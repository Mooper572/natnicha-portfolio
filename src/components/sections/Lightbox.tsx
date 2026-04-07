"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

export function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const offsetAtDragStart = useRef({ x: 0, y: 0 });
  const lastTap = useRef(0);
  const lastPinchDist = useRef<number | null>(null);

  // Refs for reading latest state inside native listeners
  const isZoomedRef = useRef(false);
  const scaleRef = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });

  const isZoomed = scale > 1.01;

  useEffect(() => { isZoomedRef.current = isZoomed; }, [isZoomed]);
  useEffect(() => { scaleRef.current = scale; }, [scale]);
  useEffect(() => { offsetRef.current = offset; }, [offset]);

  const resetTransform = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
      resetTransform();
    },
    [current, resetTransform]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!isZoomedRef.current && e.key === "ArrowRight")
        setCurrent((c) => (c + 1) % images.length);
      if (!isZoomedRef.current && e.key === "ArrowLeft")
        setCurrent((c) => (c - 1 + images.length) % images.length);
      if (e.key === "r" || e.key === "0") resetTransform();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, resetTransform, images.length]);

  // ── Non-passive wheel + touchmove (both need preventDefault) ──
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const delta = e.deltaY < 0 ? 0.2 : -0.2;
      setScale((prev) => {
        const next = Math.min(Math.max(prev + delta, 1), 6);
        if (next <= 1) {
          setOffset({ x: 0, y: 0 });
          return 1;
        }
        return next;
      });
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length === 2 && lastPinchDist.current !== null) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const ratio = dist / lastPinchDist.current;
        setScale((prev) => Math.min(Math.max(prev * ratio, 1), 6));
        lastPinchDist.current = dist;
      } else if (e.touches.length === 1 && isZoomedRef.current) {
        setOffset({
          x: offsetAtDragStart.current.x + (e.touches[0].clientX - dragStart.current.x),
          y: offsetAtDragStart.current.y + (e.touches[0].clientY - dragStart.current.y),
        });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, []); // mount/unmount only

  // Mouse drag
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      offsetAtDragStart.current = { x: offset.x, y: offset.y };
    },
    [offset]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragging) return;
      setOffset({
        x: offsetAtDragStart.current.x + (e.clientX - dragStart.current.x),
        y: offsetAtDragStart.current.y + (e.clientY - dragStart.current.y),
      });
    },
    [dragging]
  );

  const handleMouseUp = useCallback(() => setDragging(false), []);

  // Double click
  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isZoomed) {
        resetTransform();
      } else {
        setScale(2.5);
      }
    },
    [isZoomed, resetTransform]
  );

  // Touch start + double-tap
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastPinchDist.current = Math.hypot(dx, dy);
      } else if (e.touches.length === 1) {
        dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        offsetAtDragStart.current = { x: offset.x, y: offset.y };
        const now = Date.now();
        if (now - lastTap.current < 300) {
          if (isZoomed) { resetTransform(); } else { setScale(2.5); }
        }
        lastTap.current = now;
      }
    },
    [offset, isZoomed, resetTransform]
  );

  const handleTouchEnd = useCallback(() => {
    lastPinchDist.current = null;
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={!isZoomed ? onClose : undefined}
      />

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 font-grotesk text-[11px] tracking-widest text-white/50 select-none pointer-events-none">
        {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {/* Zoom % badge */}
      {isZoomed && (
        <div className="absolute top-6 left-6 z-20 font-grotesk text-[11px] tracking-widest text-white/40 select-none pointer-events-none">
          {Math.round(scale * 100)}%
        </div>
      )}

      {/* Hint */}
      <div className="absolute bottom-[52px] left-1/2 -translate-x-1/2 z-20 font-grotesk text-[10px] tracking-widest text-white/20 select-none pointer-events-none">
        {isZoomed
          ? "double-click to reset"
          : "scroll or double-click to zoom · drag to pan"}
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 z-20 w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:bg-white/10 hover:text-white transition-all duration-200 text-lg"
      >
        ✕
      </button>

      {/* Image viewport */}
      <div
        ref={viewportRef}
        className="relative w-[90vw] max-w-5xl h-[80vh] z-10 overflow-hidden"
        style={{ cursor: isZoomed ? (dragging ? "grabbing" : "grab") : "zoom-in" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDoubleClick={handleDoubleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        // onWheel and onTouchMove removed — handled by native listeners
      >
        <AnimatePresence mode="sync" custom={direction}>
          <motion.div
            key={current}
            className="absolute inset-0"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 220, damping: 28 },
              opacity: { duration: 0.2 },
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
                transformOrigin: "center center",
                transition: dragging ? "none" : "transform 0.12s ease-out",
                willChange: "transform",
              }}
            >
              <Image
                src={images[current]}
                alt=""
                fill
                className="object-contain"
                draggable={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next — hidden when zoomed */}
      {images.length > 1 && !isZoomed && (
        <>
          <button
            onClick={() => goTo((current - 1 + images.length) % images.length)}
            className="absolute left-4 md:left-8 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 text-xl"
          >
            ‹
          </button>
          <button
            onClick={() => goTo((current + 1) % images.length)}
            className="absolute right-4 md:right-8 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 text-xl"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => !isZoomed && goTo(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? "bg-white w-5 h-2"
                : "bg-white/30 w-2 h-2 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}