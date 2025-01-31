export const METADATA = {
  author: "Navin Kumar",
  title: "Portfolio | Navin Kumar",
  description:
    "Navin is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.kumarnavin.me/",
  twitterHandle: "@",
  keywords: [
    "Navin Kumar",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Navfolio",
    "Folio",
  ].join(", "),
  image:
    "",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Building boundary-pushing solutions",
  "Crafting intuitive web interfaces",
  "Turning ideas into interactive experiences",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: hacktheplanet0062@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/navinkumar0062/",
  },
  {
    name: "github",
    url: "https://github.com/Navin0062",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/kumar_na_vin/",
  },
  {
    name: "twitter",
    url: "https://x.com/kumar_na_vin",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "express",
    "postman",
    "figma",
    
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "vite",
    "antdesign",
    "chakra-ui",
    "gsap"
  ],
  databases: ["firebase", "mongodb"],
  other: ["git", "github"],
};

export const PROJECTS = [
  {
    name: "National Service Scheme",
    image: "/projects/nss.webp",
    blurImage: "/projects/blur/nss-blur.webp",
    description: "NSS website built with React + TailwindCSS for community service. 🤝",
    gradient: ["#F14658", "#DC2537"],
    url: "https://nssbitsindri.in",
    tech: ["react", "vite", "tailwindcss", "firebase" ],
  },
  {
    name: "Obys Agency",
    image: "/projects/obys.webp",
    blurImage: "/projects/blur/obys-blur.webp",
    description: "Obys Agency clone with animations using HTML + CSS + JS + GSAP 🎨",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://agency-obys-clone.netlify.app/",
    tech: ["javascript", "html", "css", "gsap"],
  },
  {
    name: "Mini Marvels Montessori",
    image: "/projects/education.webp",
    blurImage: "/projects/blur/education-blur.webp",
    description: "A vibrant school website for kindergarten kids built with HTML + CSS + JavaScript. 🏫",
    gradient: ["#000066", "#6699FF"],
    // gradient: ["#00A1FF", "#00FF8F"],
    url: "https://minimarvelsmontessori.netlify.app/",
    tech: ["javascript", "html", "css"],
  },
  // {
  //   name: "Refokus Clone",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "",
  //   gradient: ["#000066", "#6699FF"],
  //   url: "",
  //   tech: ["react", "javascript", "tailwindcss", "vite"],
  // },
  {
    name: "Razorpay ",
    image: "/projects/razorpay.webp",
    blurImage: "/projects/blur/razorpay-blur.webp",
    description: "Razorpay interface clone built with React and TailwindCSS. 💰",
    gradient: ["#142D46", "#2E4964"],
    url: "https://razorpay-payment-app.netlify.app/",
    tech: ["react", "tailwindcss", "nodejs", "javascript"],
  },
];

export const WORK_CONTENTS = {
  NSS: [
    {
      title: "NATIONAL SERVICE SCHEME",
      description:
        "Led the development and optimization of the official NSS BIT Sindri website, focusing on improving its design, functionality, and user experience for students and volunteers. The platform serves as a hub for all NSS activities, offering seamless access to event updates, volunteer registration, and community service initiatives.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Empowering community engagement through a streamlined, user-friendly platform.
        </div>
      ),
    },
    {
      title: "Web Platform Optimization",
      description:
        "As Senior Web Developer, I spearheaded the revamp of the NSS website, enhancing its UI and improving overall site performance. I integrated a more responsive design and optimized the backend to improve speed and scalability. This helped in increasing the site’s traffic and engagement, especially during events and registration periods.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Design Overhaul & Performance Enhancement",
      description:
        "Recognizing the importance of user experience, I led the redesign of the website’s layout, implementing a more modern, intuitive UI. I also focused on optimizing the site's performance, reducing load times and improving mobile compatibility, which led to better accessibility for all users.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Directed redesign and performance optimization for improved user engagement.
        </div>
      ),
    },
  ],
  JOB_PORTAL: [
    {
      title: "Job Portal",
      description:
        "Developed a comprehensive job portal designed for job-seekers, focusing on non-technical roles across top companies. The platform is aimed at simplifying the job search process with easy navigation, intuitive UI, and real-time updates.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Empowering job-seekers with streamlined access to top opportunities.
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "Led the development of a dynamic job matching system, a core feature of the job portal, enhancing user experience through intelligent recommendations and advanced filtering. Took initiatives to optimize the platform for better user engagement and traffic growth, along with implementing a comprehensive bug-reporting system to improve platform reliability.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer Intern
        </div>
      ),
    },
  ],
  
};

export const GTAG = "G-5HCTL2TJ5W";
