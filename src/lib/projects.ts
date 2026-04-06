import { Project } from "./types";

export const projects: Project[] = [
    {
        id: 1,
        slug: "zoo-interactive-map",
        title: "Zoo Interactive Map",
        description:
            "An interactive map web application designed with a strong focus on UX/UI and full-stack development. The system provides GPS navigation, location filtering, and real-time updates to enhance user experience and accessibility. Designed in Figma and developed as a responsive application, it bridges intuitive design with functional system implementation.",
        image: "/p1.png",
        imageScale: true,
        techStack: ["Figma", "JavaScript", "Node.js", "MySQL", "Google Maps API"],
        year: "Aug 2025 - Dec 2025",
        roles: ["UX/UI Designer", "Full-stack Developer"],
        filters: ["UX/UI DESIGNER", "FULL-STACK DEVELOPER"],
        sections: [
            {
                type: "hero",
                title:
                    "Enhancing visitor experience through intuitive navigation and accessibility.",
                description:
                    "The Zoo Interactive Map is a final-year project developed in collaboration with Khon Kaen Zoo to improve navigation and real-time information access for visitors. The project addresses the limitations of traditional static maps, where updates to animal locations, facilities, and announcements require frequent reprints and manual distribution. \n\nTo solve this, I designed and developed a web-based interactive map that can be accessed instantly via QR code, eliminating the need for mobile app installation while improving accessibility and reducing paper usage and operational costs.",    
            },
            {
                type: "image",
                images: [
                    "/projects/zoo-interactive-map/1.png",
                    "/projects/zoo-interactive-map/2.png",
                    "/projects/zoo-interactive-map/3.png",
                    "/projects/zoo-interactive-map/4.png",
                ],
            },
            {
                type: "mobile",
                images: [
                    "/projects/zoo-interactive-map/5.png",
                    "/projects/zoo-interactive-map/6.png",
                    "/projects/zoo-interactive-map/7.png",
                    "/projects/zoo-interactive-map/8.png",
                ],
                title: "From Design to Development",
                description:
                    "I was responsible for the end-to-end development of the system, including UX/UI design, frontend implementation, and backend development. The platform provides real-time updates, allowing zoo staff to manage and update map data, locations, and announcements dynamically. \n\nKey features include GPS-based navigation, interactive map visualization, and location filtering by categories (animals, facilities, events). The system also displays zoo news and announcements, along with real-time event information such as ongoing and upcoming events, including detailed schedules and showtimes. \n\nAdditionally, users can submit feedback directly through the website, enabling continuous improvement based on visitor input. The system is fully responsive, ensuring a seamless user experience across devices while improving efficiency for both visitors and staff.",
            },
            {
                type: "features",
                categories: [
                    {
                        title: "UX/UI DESIGN",
                        items: [
                            "Designed an interactive map in Figma for both user and admin interfaces",
                            "Created user flows and structured information architecture for seamless navigation",
                            "Developed prototypes to present and validate the design before development",
                        ],
                    },
                    {
                        title: "DEVELOPER_LOG",
                        items: [
                            "Developed and deployed a full-stack web application, covering both frontend and backend systems",
                            "Implemented interactive map features with dynamic data handling and real-time updates",
                            "Managed version control using GitHub and delivered the project to Khon Kaen Zoo",
                        ],
                    },
                    {
                        title: "TECH_STACK",
                        items: [
                            "Frontend: HTML, CSS, JavaScript",
                            "Backend: Node.js (Express)",
                            "Database: MySQL",
                            "Tools & Services: Figma, Google Maps API, GitHub",
                        ],
                    },
                ],
            },
        ],
    },

    {
        id: 2,
        slug: "hertz-rental-app",
        title: "Hertz Rental Application",
        description:
            "A mobile-first car rental application designed with a user-centered approach, focusing on UX/UI and functionality. The system supports browsing, booking, and rental management through intuitive user flows and a clean interface design. Implemented with Flutter, it provides a responsive and user-friendly experience.",
        image: "/p10.png",
        imageScale: false,
        techStack: ["Figma", "Flutter"],
        year: "Jan 2024 - Apr 2024 ",
        roles: ["UX/UI Designer", "Front-end Developer"],
        filters: ["UX/UI DESIGNER", "FRONT-END DEVELOPER"],
        sections: [
            {
                type: "hero",
                title:
                    "Designing a seamless and intuitive mobile car rental experience.",
                description:
                    "This project was developed during my third year as part of a mobile application development course, with a focus on building a Flutter-based application. The system supports three main roles: borrower, lender, and admin. \n\nI led the UX/UI design and defined the end-to-end user flow of the application. I also contributed to frontend implementation, ensuring the interface was accurately translated from design to code and aligned closely with the intended UI. \n\nThe Hertz Rental Application was designed as a mobile-first solution to simplify the car rental process. It allows users to browse vehicles, make bookings, and manage rentals through a clear and intuitive interface. With a strong focus on user-centered design, the application ensures smooth navigation and efficient workflows, delivering a responsive and consistent experience across mobile devices.",
            },
            {
                type: "image",
                images: [
                    "/projects/hertz-rental-application/1.png",
                    "/projects/hertz-rental-application/2.png",
                    "/projects/hertz-rental-application/3.png",
                    "/projects/hertz-rental-application/4.png",
                ],
            },
            {
                type: "features",
                categories: [
                    {
                        title: "UX/UI DESIGN",
                        items: [
                            "Designed multi-role interfaces (borrower, lender, admin) with a focus on usability and clarity",
                            "Defined user journeys and optimized flows for booking and rental management",
                            "Built interactive prototypes to test and refine user experience",
                        ],
                    },
                    {
                        title: "DEVELOPER_LOG",
                        items: [
                            "Built a Flutter-based mobile application with responsive and consistent UI",
                            "Ensured accurate implementation of UI designs with pixel-level attention to detail",
                            "Developed key features such as browsing, booking, and rental tracking",
                        ],
                    },
                    {
                        title: "TECH_STACK",
                        items: [
                            "Frontend: Flutter (Dart)",
                            "Tools & Services: Figma, GitHub",
                        ],
                    },
                ],
            },
        ],
    },

    {
        id: 3,
        slug: "just-match-website",
        title: "Just Match Website",
        description:
            "A movie rental web application designed to support multiple user roles with a focus on UX/UI and functionality. The system enables browsing, search, and content management through structured user flows and clear interface design. Developed with frontend and backend integration, it provides a responsive and user-friendly experience.",
        image: "/p12.png",
        imageScale: false,
        techStack: ["Figma", "JavaScript", "Node.js", "MySQL"],
        year: "Jan 2023 - Apr 2023",
        roles: ["UX/UI Designer", "Full-stack Developer"],
        filters: ["UX/UI DESIGNER", "FULL-STACK DEVELOPER"],
        sections: [
            {
                type: "hero",
                title:
                    "A multi-role movie rental platform with structured user experience.",
                description:
                    "This project was developed during my second year as part of a web application development course, focusing on building a multi-role platform with borrower, lender, and admin functionalities. \n\nI led the UX/UI design and defined the end-to-end user flow of the system. I also contributed to frontend implementation, ensuring the interface closely aligned with the design. Additionally, I supported backend development by managing data communication between the application and the database, enabling efficient data handling and system functionality. \n\nThe Just Match Website was developed as a movie rental platform that allows users to browse, search, and manage content through structured user flows. With a strong focus on usability and system integration, the platform delivers a responsive and efficient experience for both users and administrators.",
            },
            {
                type: "image",
                images: [
                    "/projects/just-watch-website/1.png",
                    "/projects/just-watch-website/2.png",
                    "/projects/just-watch-website/3.png",
                ],
            },
            {
                type: "features",
                categories: [
                    {
                        title: "UX/UI DESIGN",
                        items: [
                            "Designed multi-role interfaces with structured user flows and clear information architecture",
                            "Optimized user journeys for browsing, renting, and managing content",
                            "Developed prototypes to test usability and improve interaction design",
                        ],
                    },
                    {
                        title: "DEVELOPER_LOG",
                        items: [
                            "Built a full-stack web application with responsive and maintainable code",
                            "Ensured high fidelity between design and implementation with attention to detail",
                            "Developed and integrated core system features including search, rental flow, and admin management",
                            "Managed data flow between frontend and database for efficient CRUD operations",
                        ],
                    },
                    {
                        title: "TECH_STACK",
                        items: [
                            "Frontend: HTML, CSS, JavaScript",
                            "Backend: Node.js (Express)",
                            "Tools & Services: Figma, GitHub",
                        ],
                    },
                ],
            },
        ],
    },

    {
        id: 4,
        slug: "jum-pop-app",
        title: "Jum Pop Application",
        description:
            "A mystery box (gacha) application designed in Figma, focusing on UX/UI and a mobile-first user experience. The design includes e-commerce workflows such as ordering and shipping, with clearly defined user flows. It also features structured admin interfaces for product, payment, and order management across different roles.",
        image: "/p13.png",
        imageScale: false,
        techStack: ["Figma"],
        year: "2024",
        roles: ["UX/UI Designer"],
        filters: ["UX/UI DESIGNER"],
        sections: [
            {
                type: "hero",
                title:
                    "Creating an engaging and gamified e-commerce experience through design.",
                description:
                    "This project was developed as part of a Data Structures course, focusing on designing a complete e-commerce system for ordering and shipping products using Figma. The system supports both customer and admin roles, with the admin side divided into inventory, finance, and shipping modules. \n\nI designed the end-to-end user flows and system structure, ensuring seamless interaction across all roles. The entire application was prototyped in Figma, with fully connected interactive flows to simulate real user journeys and system behavior. \n\nThe Jum Pop Application is a mystery box (gacha) platform designed with a strong emphasis on UX/UI and mobile-first interaction. It incorporates key e-commerce processes such as ordering, payment, and delivery, while maintaining an engaging and gamified user experience.",
            },
            {
                type: "image",
                images: [
                    "/projects/jum-pop-application/1.png",
                    "/projects/jum-pop-application/2.png",
                    "/projects/jum-pop-application/3.png",
                    "/projects/jum-pop-application/4.png",
                ],
            },
            {
                type: "features",
                categories: [
                    {
                        title: "UX/UI DESIGN",
                        items: [
                            "Designed a multi-role system with well-structured flows and scalable information architecture",
                            "Optimized user journeys across ordering, payment, and delivery processes",
                            "Created high-fidelity prototypes to test and refine user experience",
                        ],
                    },
                    {
                        title: "DEVELOPER_LOG",
                        items: [
                            "Translated data structure concepts into practical system design and user flow logic",
                            "Modeled application behavior and interactions across customer and admin roles",
                            "Delivered a fully interactive prototype simulating real-world application usage",
                        ],
                    },
                    {
                        title: "TECH_STACK",
                        items: [
                            "Design Tool: Figma",
                            "Prototype: Figma Interactive Prototype",
                        ],
                    },
                ],
            },
        ],
    },
];