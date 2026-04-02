import { Project } from "./types";

export const internships: Project[] = [
  {
    id: 101,
    slug: "internship-platform",
    title: "Internship Platform",
    description:
      "A full-stack internship recruitment platform designed to improve candidate credibility and hiring workflows. The system features AI-powered resume parsing with autofill, along with verification for education, skills, and projects. It includes role-based access, profile tracking, and AI-driven job matching to support recruitment decision-making.",
    image: "/p7.png",
    imageScale: true,
    techStack: ["FIGMA", "TYPESCRIPT", "TAILWIND CSS", "NODE.JS", "POSTGRE SQL"],
    year: "2026",
    roles: ["UX/UI Designer", "Full-stack Developer"],
    filters: ["UX/UI DESIGNER", "FULL-STACK DEVELOPER"],
    sections: [
      {
        type: "hero",
        title:
          "Improving recruitment efficiency through AI-powered workflow and verification.",
        description:
          "The Internship Platform was developed to enhance the recruitment process by improving candidate credibility and streamlining hiring workflows. The system integrates AI-powered resume parsing that automatically extracts and fills candidate information, reducing manual input. It also provides verification for education, skills, and projects to ensure data reliability. With role-based access, recruiters and candidates can manage profiles efficiently, while AI-driven job matching helps connect candidates with the most suitable opportunities.",
      },
      {
        type: "image",
        src: "/p11.png",
      },
      {
        type: "features",
        items: [
          "AI-powered resume parsing with autofill",
          "Verification system for education, skills, and projects",
          "Role-based access with profile tracking",
          "AI-driven job matching system",
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
    image: "/p4.png",
    imageScale: true,
    techStack: ["FIGMA", "TYPESCRIPT", "REACT"],
    year: "2026",
    roles: ["Front-end Developer"],
    filters: ["FRONT-END DEVELOPER"],
    sections: [
      {
        type: "hero",
        title:
          "Redesigning a corporate website with improved usability and modern frontend practices.",
        description:
          "The Trinity Website project focused on redesigning an existing corporate website to improve usability, accessibility, and consistency. The new design emphasizes clarity and structured layout, ensuring a seamless experience across all devices. Implemented using modern frontend technologies, the website aligns with business goals while enhancing overall user experience.",
      },
      {
        type: "image",
        src: "/p12.png",
      },
      {
        type: "features",
        items: [
          "Responsive design across all devices",
          "Improved usability and accessibility",
          "Clean and consistent UI structure",
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
    image: "/p14.png",
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
          "The Pine Script project was developed as a trading signal system using TradingView. It focuses on analyzing market trends and generating buy/sell signals based on multiple timeframes. The system includes dynamic data visualization to help users better understand market movements. Additionally, webhook integration enables real-time alerts to be sent to Telegram, supporting faster and more informed decision-making.",
      },
      {
        type: "image",
        src: "/p13.png",
      },
      {
        type: "features",
        items: [
          "Multi-timeframe trend analysis",
          "Buy/Sell signal detection",
          "Real-time alerts via Telegram webhook",
          "Dynamic chart visualization",
        ],
      },
    ],
  },
];