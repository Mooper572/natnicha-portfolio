import { Project } from "./types";

export const internships: Project[] = [
  {
    id: 101,
    slug: "internship-platform",
    title: "Internship Platform",
    description:
      "A full-stack internship recruitment platform designed to improve candidate credibility and hiring workflows. The system features AI-powered resume parsing with autofill, along with verification for education, skills, and projects. It includes role-based access, profile tracking, and AI-driven job matching to support recruitment decision-making.",
    image: "/p7.webp",
    imageScale: true,
    techStack: ["Figma", "Typescript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    year: "2026",
    roles: ["UX/UI Designer", "Full-stack Developer"],
    filters: ["UX/UI DESIGNER", "FULL-STACK DEVELOPER"],
    sections: [
      {
        type: "hero",
        title:
          "Improving recruitment efficiency through AI-powered workflow and verification.",
        description:
          "The Internship Platform was developed to enhance the recruitment process by improving candidate credibility and streamlining hiring workflows. During my internship, I joined this project to support and accelerate its development, contributing to both design and system implementation. \n\nThe system integrates AI-powered resume parsing that automatically extracts and fills candidate information, reducing manual input. It also provides verification for education, skills, and projects to ensure data reliability. With role-based access, recruiters and candidates can manage profiles efficiently, while AI-driven job matching helps connect candidates with the most suitable opportunities.",
      },
      {
        type: "image",
        images: [
          "/internship/internship-platform-website/1.webp",
          "/internship/internship-platform-website/2.webp",
          "/internship/internship-platform-website/3.webp",
          "/internship/internship-platform-website/4.webp",
        ],
      },
      {
        type: "mobile",
        images: [
          "/internship/internship-platform-website/5.webp",
          "/internship/internship-platform-website/6.webp",
          "/internship/internship-platform-website/7.webp",
          "/internship/internship-platform-website/8.webp",
        ],
        title: "AI-Powered Recruitment Platform",
        description:
          "I contributed to the Internship Platform by working across UX/UI design, frontend development, backend integration, and AI feature implementation. \n\nI took the initiative to redesign the system workflow, as the existing flow did not align with project objectives and created confusion within the team. I restructured the end-to-end user flow, redesigned the UX/UI to match the new system logic, and helped realign the team with a clearer and more effective workflow. \n\nI contributed to both frontend and backend development, implementing UI improvements and handling data integration between the application and database for both user and admin interfaces. \n\nI also led the development of core AI functionalities, including AI-powered autofill, job matching, candidate analysis, and document validation to compare uploaded files with user-provided information. \n\nAdditionally, I assisted in debugging and improving responsiveness, ensuring a smooth and consistent user experience across devices.",
      },
      {
        type: "features",
        categories: [
          {
            title: "UX/UI DESIGN",
            items: [
              "Redesigned system workflow and user experience to align with project objectives and improve usability",
              "Created structured user flows and information architecture for both candidate and recruiter interfaces",
              "Designed and refined UI in Figma to support clarity, efficiency, and real-world hiring workflows",
            ],
          },
          {
            title: "DEVELOPER_LOG",
            items: [
              "Contributed to a full-stack web application across frontend, backend, and AI integration",
              "Implemented UI components and ensured accurate design-to-code translation",
              "Managed data integration between frontend and database for user and admin systems",
              "Developed AI features including autofill, job matching, analysis, and document validation",
              "Assisted in debugging and improving responsiveness and system performance",
            ],
          },
          {
            title: "TECH_STACK",
            items: [
              "Frontend: TypeScript, Tailwind CSS",
              "Backend: Node.js (Express)",
              "Database: PostgreSQL",
              "AI Integration: Google Gemini API",
              "Tools & Services: Figma, Postman, GitHub",
            ],
          },
        ],
      },
    ],
  },

  {
    id: 102,
    slug: "trinity-website",
    title: "Trinity Website",
    description:
      "A corporate website redesigned with a focus on UX/UI and responsive frontend development. The interface was improved for better usability, accessibility, and consistency across all pages and devices. Implemented with modern frontend practices, it enhances user experience and aligns with business needs.",
    image: "/p4.webp",
    imageScale: true,
    techStack: ["Figma", "Typescript", "React", "Tailwind CSS"],
    year: "2026",
    roles: ["Front-end Developer"],
    filters: ["FRONT-END DEVELOPER"],
    sections: [
      {
        type: "hero",
        title:
          "Redesigning a corporate website with improved usability and modern frontend practices.",
        description:
          "This project was my second assignment during my internship, where I contributed as a Frontend Developer. I implemented the website based on UX/UI designs from Figma, ensuring pixel-accurate execution across desktop and responsive layouts. \n\nI translated design into scalable frontend code using modern technologies and was responsible for building and deploying the website for company review. \n\nThe Trinity Website project focused on redesigning an existing corporate website to improve usability, accessibility, and consistency. The new design emphasizes clarity and structured layout, delivering a seamless experience across devices while aligning with business objectives.",
      },
      {
        type: "image",
        images: [
          "/internship/trinity-website/1.webp",
          "/internship/trinity-website/2.webp",
          "/internship/trinity-website/3.webp",
          "/internship/trinity-website/4.webp",
        ],
      },
      {
        type: "mobile",
        images: [
          "/internship/trinity-website/5.webp",
          "/internship/trinity-website/6.webp",
          "/internship/trinity-website/7.webp",
          "/internship/trinity-website/8.webp",
        ],
        title: "Redesigning a Corporate Website",
        description:
          "The Trinity Website project focused on redesigning a corporate website to enhance usability, accessibility, and design consistency. The objective was to modernize the interface and create a more intuitive and structured user experience aligned with business goals. \n\nThe design approach prioritizes clarity, improved information hierarchy, and seamless navigation, enabling users to access content more efficiently. Responsive design principles were applied to ensure a consistent experience across all devices. \n\nThe UI was crafted in Figma with a strong focus on layout structure, typography, and component consistency, resulting in a clean, scalable, and professional design system.",
      },
      {
        type: "features",
        categories: [
          {
            title: "UX/UI DESIGN",
            items: [
              "Redesigned corporate website interface to improve usability, accessibility, and visual consistency",
              "Refined layout structure, typography, and content hierarchy for clearer information delivery",
              "Designed responsive UI in Figma to ensure a seamless experience across desktop and mobile devices",
            ],
          },
          {
            title: "DEVELOPER_LOG",
            items: [
              "Implemented frontend based on UX/UI designs with pixel-accurate execution",
              "Translated design into clean, maintainable code using modern frontend technologies",
              "Developed responsive layouts to ensure consistency across different screen sizes",
              "Built and deployed the website for company review and testing",
              "Fixed UI issues and improved overall user experience and performance",
            ],
          },
          {
            title: "TECH_STACK",
            items: [
              "Frontend: TypeScript, React, Tailwind CSS",
              "Tools & Services: Figma, GitHub",
            ],
          },
        ],
      },
    ],
  },

  {
    id: 103,
    slug: "pine-script",
    title: "Pine Script",
    description:
      "A trading signal system developed using Pine Script in TradingView, focusing on trend analysis and alert generation. The system identifies buy/sell signals with multi-timeframe analysis and dynamic data visualization. It integrates webhook functionality to send real-time alerts to Telegram for monitoring and decision support.",
    image: "/p14.webp",
    imageScale: true,
    techStack: ["PINE SCRIPT", "TRADING VIEW", "WEBHOOK", "TELEGRAM API"],
    year: "2026",
    roles: ["Developer"],
    filters: ["DEVELOPER"],
    sections: [
      {
        type: "hero",
        title:
          "Building a trading signal system with real-time alerts and multi-timeframe analysis.",
        description:
          "The Pine Script project was my first assignment, where I developed a trading signal system using TradingView. The system focuses on analyzing market trends and generating buy/sell signals based on multiple timeframes. \n\nI implemented key features including multi-timeframe analysis and webhook integration to deliver real-time alerts to Telegram, enabling faster and more informed decision-making. \n\nThe project was handed over after completing the alert system to support other high-priority development needs within the team.",
      },
      {
        type: "image",
        src: "/internship/pine-script/1.webp",
      },
      {
        type: "features",
        categories: [
          {
            title: "UX/UI DESIGN",
            items: [
              "Designed clear chart visualization for buy/sell signals to improve readability",
              "Structured signal display and alerts for intuitive understanding of market trends",
              "Focused on clarity and usability within TradingView interface",
            ],
          },
          {
            title: "DEVELOPER_LOG",
            items: [
              "Developed a trading signal system using Pine Script on TradingView",
              "Implemented multi-timeframe analysis to generate buy/sell signals",
              "Designed and applied indicator-based logic to detect trading opportunities",
              "Integrated webhook functionality for real-time Telegram alerts",
              "Processed real-time market data and visualized signals directly on charts",
            ],
          },
          {
            title: "TECH_STACK",
            items: [
              "Language: Pine Script",
              "Platform: TradingView",
              "Integration: Webhook, Telegram API",
            ],
          },
        ],
      },
    ],
  },
];