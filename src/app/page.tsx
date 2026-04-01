import Hero from "@/components/sections/Hero";
import CoreCompetencies from "@/components/sections/CoreCompetencies";
import FeaturedWork from "@/components/sections/FeaturedWork";
import DesignApproach from "@/components/sections/DesignApproach";
import Collaborate from "@/components/sections/Collaborate";

export const metadata = {
  title: "Portfolio Website",
  description:
    "Portfolio of Natnicha Inkongngam, a Computer Engineering student and UX/UI designer focused on intuitive, user-centered digital experiences.",
};

export default function Home() {
  return (
    <>
      <div id="home"><Hero /></div>
      <div id="projects"><CoreCompetencies /></div>
      <div id="intern"><FeaturedWork /></div>
      <div id="about"><DesignApproach /></div>
      <Collaborate /> {/* มี id="contact" อยู่แล้วใน component */}
    </>
  );
}