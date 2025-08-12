import { FaFacebook, FaMailBulk } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxHeight,
  RxLinkedinLogo,
} from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";
import { TbFileCv } from "react-icons/tb";

export const SERVICES = [
  {
    title: "Backend Developer",
    icon: "web.png",
  },
  {
    title: "Blockchain Developer",
    icon: "backend.png",
  },
  {
    title: "AI & Machine Learning Enthusiast",
    icon: "frontend.png",
  },
  {
    title: "Full-Stack Web & Mobile Developer",
    icon: "mobile.png",
  },
] as const;

export const EXPERIENCES = {
  education: [
    {
      title: "B.Sc. in Computer Science and Engineering",
      name: "Brac University",
      icon: "bracu.webp",
      iconBg: "#E6DEDD",
      date: "Jauary 2020 - August 2024",
      points: [
        "CGPA: **3.23**",
        "Thesis: **Decentralized Identity Verification: A Blockchain-Based Framework for Self-Sovereign Identity (SSI) with Issuer Trust Registry**",
      ],
    },
  ],
  job: [
    {
      title: "Associate Software Engineer",
      name: "All Generation Tech",
      icon: "agt.png",
      iconBg: "#E6DEDD",
      date: "July 2024 - February 2025",
      points: [
        "Gained hands-on experience in no-code application development using the **Unqork** platform.",
        "Developed skills in workflow automation, dynamic UI creation, and system integration associated with **Auxo Solutions**. Acquired knowledge in building and optimizing enterprise-level applications.",
        "Completed multiple projects, ensuring full client alignment through direct communication.",
        "Ensuring the performance, security, and scalability of applications in a fast-paced development environment.",
      ],
    },
    {
      title: "Nextern - Internship",
      name: "Grameenphone Ltd.",
      icon: "gp.png",
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Internship in Center of Experties at People and Organization Department",
        " Helped organizing multiple learning workshops and managed a Learning and Development platform, ensuring effective knowledge transfer and skill enhancement.",
        "Developed a web-based game to gamify an exam for NBL candidates, increasing engagement and improving the learning experience. Using **Next.JS, FastAPI, HTML5, CSS3, JS and Laravel**",
      ],
    },
    {
      title: "Software Developer(Mobile) ",
      name: "BeepPay",
      icon: "beep.png",
      iconBg: "#383E56",
      date: "Feb 2023 - Jul 2023",
      points: [
        "Developed a prototype app using **Flutter** for presentation at the **CX NXT - Customer Experience BFSI Summit in the UAE**",
        "Managed a **Team of 5 developers** to run the whole operation smoothly and successfully.",
        "Had direct communication with the investors and founders to align project goals and expectations.",
      ],
    },
    {
      title: "Full Stack Web Developer",
      name: "Tekinouchi",
      icon: "tekinouchi.png",
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Maintained strong skill set in various technologies to update, optimize and rectify issues with corporate website.",
        "Maintained  version control systems such as **Git** in order to keep track of changes made to the source code.",
        "Provided technical support and troubleshooting services when needed.",
        "Designed creative user interfaces for websites with a focus on usability",
        "Developed, tested and debugged web applications using **HTML5, CSS3, JS and Laravel**",
        "Modified existing WordPress plugin or theme to add functionality.",
        "Configured databases such as **MySQL** in order to store data securely",
        "Integrated **third-party APIs** into web applications for enhanced functionality",
      ],
    },
  ],
} as const;

export const BASE_LANGUAGE = [
  {
    skill_name: "Python",
    image: "python.png",
    size: 80,
  },
  {
    skill_name: "Dart",
    image: "dart.png",
    size: 80,
  },
  {
    skill_name: "TypeScript",
    image: "typescript.png",
    size: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    size: 90,
  },
  {
    skill_name: "C",
    image: "c.png",
    size: 80,
  },
  {
    skill_name: "C++",
    image: "c++.png",
    size: 65,
  },
  {
    skill_name: "Solidity",
    image: "solidity.png",
    size: 65,
  },
  {
    skill_name: "Verilog",
    image: "verilog.png",
    size: 90,
  },
  {
    skill_name: "GO",
    image: "go.png",
    size: 70,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    size: 100,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    size: 90,
  },
] as const;

export const SOCIALS = [
  {
    name: "Discord",
    icon: RxDiscordLogo,
    link: "https://discordapp.com/users/473137017757368322",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/ash.fahim.x/",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/ash-fahim/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Flutter",
    image: "flutter.png",
    size: 70,
  },
  {
    skill_name: "React",
    image: "react.png",
    size: 70,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    size: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    size: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    size: 80,
  },
  {
    skill_name: "Next.js 13",
    image: "next.png",
    size: 70,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    size: 70,
  },
] as const;

export const DATABASE = [
  {
    skill_name: "MySQL",
    image: "sql.svg",
    size: 100,
  },
  {
    skill_name: "MongoDB",
    image: "mongo.png",
    size: 70,
  },
  {
    skill_name: "CockroachDB",
    image: "cockroachdb.png",
    size: 70,
  },
] as const;

export const TOOLS = [
  {
    skill_name: "Git",
    image: "git.png",
    size: 70,
  },
  {
    skill_name: "Linux",
    image: "linux.png",
    size: 70,
  },
  {
    skill_name: "Android Studio",
    image: "android.png",
    size: 70,
  },
  {
    skill_name: "VS Code",
    image: "vscode.png",
    size: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.webp",
    size: 70,
  },
  {
    skill_name: "Vim",
    image: "vim2.png",
    size: 50,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Laravel",
    image: "laravel.svg",
    size: 70,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    size: 70,
  },
  {
    skill_name: "FastAPI",
    image: "fastapi.svg",
    size: 50,
  },
  {
    skill_name: "Django",
    image: "django.png",
    size: 50,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    size: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    size: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    size: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    size: 60,
  },
  {
    skill_name: "Github Actions",
    image: "github-actions.svg",
    size: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Tribenee",
    description:
      "Tribenee is a digital archive and exhibition website commemorating the memory of three women who were martyred during the liberation war of 1971. The project showcases artworks, stories, media coverage, downloadable resources, and legal contracts related to the exhibition, held at Bangladesh Shilpakala Academy.",
    image: "/projects/tribenee.png",
    demo: "https://www.tribenee.com/",
    source: "https://github.com/AshFahim/tribenee",
    tech: [
      {
        name: "Next.js",
        icon: "next.png",
      },
      {
        name: "React",
        icon: "react.png",
      },
      {
        name: "TypeScript",
        icon: "ts.png",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind.png",
      },
      {
        name: "Framer Motion",
        icon: "framer.png",
      },
      {
        name: "Three.js",
        icon: "three.svg",
      },
      {
        name: "WordPress API",
        icon: "wordpress.png",
      },
      {
        name: "HTML",
        icon: "html.png",
      },
      {
        name: "CSS",
        icon: "css.png",
      },
    ],
  },
  {
    title: "Vehicle Accessories Inventory Shop",
    description:
      "A complete Store Website where admin can manage products, orders, and users. Users can buy products and track their orders. Has filtering, searching, and sorting.",
    image: "/projects/vehicleparts.webp",
    demo: "",
    source: "https://github.com/AshFahim/Vehicle-Accessories-Inventory-Shop",
    tech: [
      {
        name: "Laravel",
        icon: "laravel.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind.png",
      },
      {
        name: "PostgreSQL",
        icon: "postgresql.png",
      },
      {
        name: "JavaScript",
        icon: "js.png",
      },
      {
        name: "HTML",
        icon: "html.png",
      },
      {
        name: "CSS",
        icon: "css.png",
      },
      {
        name: "Vercel",
        icon: "vercel.png",
      },
    ],
  },
  {
    title: "Furnicraft BD",
    description:
      "A static company portfolio website hosted via cloudflare page. It's a responsive website with a clean UI.",
    image: "/projects/furni.webp",
    demo: "https://www.furnicraftbd.com",
    source: "",
    tech: [
      {
        name: "HTML",
        icon: "html.png",
      },
      {
        name: "CSS",
        icon: "css.png",
      },
      {
        name: "JavaScript",
        icon: "js.png",
      },
      {
        name: "Cloudflare",
        icon: "cloudflare.png",
      },
    ],
  },
  {
    title: "Decentralized Identity Verificatio",
    description:
      "This research explores a blockchain-based Self-Sovereign Identity (SSI) system to secure and streamline personal identification, introducing an Issuer Trust Registry to ensure credential reliability. It highlights blockchain’s potential to enhance authentication, reduce fraud, and protect privacy in services like passports, licenses, banking, and land registration.",
    image: "/projects/thesis.jpg",
    demo: "",
    source:
      "https://dspace.bracu.ac.bd/xmlui/bitstream/handle/10361/25158/24141271%2C%2020101496%2C%202010360%2C%2020101053_CSE.pdf?sequence=1&isAllowed=y",
    tech: [
      {
        name: "Solidity",
        icon: "solidity.png",
      },
      {
        name: "Hyperledger Fabric",
        icon: "fabric.png",
      },
      { name: "Hyperledger Aries", icon: "aries2.png" },
      { name: "JavaScript", icon: "js.png" },
      { name: "Python", icon: "python.png" },
    ],
  },

  {
    title: "4shadi",
    description:
      "4Shadi is a matchmaking platform for divorced and married individuals, featuring OCR-powered identity verification, secure authentication, and intelligent search. Built with React, Next.js, and a robust backend, it also offers relationship blogs and legal support for a socially conscious approach to modern matchmaking.",
    image: "/projects/4shadi.png",
    demo: "",
    source: "https://github.com/FuSan21/PocketKaraoke",
    tech: [
      {
        name: "Python",
        icon: "python.png",
      },
      {
        name: "FastAPI",
        icon: "fastapi.svg",
      },
      {
        name: "Next.JS",
        icon: "next.png",
      },
    ],
  },

  {
    title: "BeepPay - Mobile App",
    description:
      "A prototype app developed for BeepPay, showcased at the CX NXT - Customer Experience BFSI Summit in the UAE. The app is built using Flutter and integrates with various APIs to provide a seamless user experience.",
    image: "/projects/beeppay.png",
    demo: "",
    source: "",
    tech: [
      {
        name: "Flutter",
        icon: "flutter.png",
      },
      {
        name: "Python",
        icon: "python.png",
      },
    ],
  },
  {
    title: "3d Space Portfolio",
    description:
      "This project is an enhanced version of the sanidhyy/space-portfolio, incorporating advanced features and improved responsiveness for smaller screens. It utilizes Three.js for sophisticated 3D rendering and Framer Motion for dynamic animations.",
    image: "/projects/portfolio.webp",
    demo: "https://www.fusan.me",
    source: "https://github.com/FuSan21/portfolio",
    tech: [
      {
        name: "Next.js",
        icon: "next.png",
      },
      {
        name: "React",
        icon: "react.png",
      },
      {
        name: "Three.js",
        icon: "three.svg",
      },
      {
        name: "Framer Motion",
        icon: "framer.png",
      },
      {
        name: "JavaScript",
        icon: "js.png",
      },
      {
        name: "HTML",
        icon: "html.png",
      },
      {
        name: "CSS",
        icon: "css.png",
      },
      {
        name: "Vercel",
        icon: "vercel.png",
      },
    ],
  },
  {
    title: "Instagram Follower Manager",
    description:
      "A Tempermonkey Script for managing Instagram followers, including tracking unfollowers and unfollowers. Includes in browser ui for this.",
    image: "/projects/unfollower.png",
    demo: "",
    source: "https://github.com/AshFahim/Instagram-Unfollowers-Checker-Manager",
    tech: [
      {
        name: "JavaScript",
        icon: "js.png",
      },
      {
        name: "HTML",
        icon: "html.png",
      },
      {
        name: "CSS",
        icon: "css.png",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experiences",
    link: "#experiences",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact-us",
  },
] as const;

//professional profiles and links
export const PROFESSIONAL_PROFILES = [
  {
    profile_name: "Download CV",
    icon: TbFileCv,
    link: "./CV/CV_Ashiqur_Rahman_Fahim.pdf",
  },
  {
    profile_name: "Email",
    icon: FaMailBulk,
    link: "mailto:fahimashiqurrahman@gmail.com",
  },
  {
    profile_name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/ash-fahim/",
  },
  {
    profile_name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/AshFahim",
  },
] as const;

export const USED_TECH = [
  {
    name: "Next.js",
    image: "next.png",
    size: 70,
  },
  {
    name: "React",
    image: "react.png",
    size: 70,
  },
  {
    name: "TypeScript",
    image: "ts.png",
    size: 70,
  },
  {
    name: "Tailwind CSS",
    image: "tailwind.png",
    size: 70,
  },
  {
    name: "Three.js",
    image: "three.svg",
    size: 70,
  },
  {
    name: "Framer Motion",
    image: "framer.png",
    size: 70,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "FastAPI",
    image: "fastapi.svg",
    size: 80,
  },
  {
    skill_name: "Flask",
    image: "flask.svg",
    size: 80,
  },
  {
    skill_name: "Express js",
    image: "express.png",
    size: 80,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    size: 55,
  },
  {
    skill_name: "Node js",
    image: "node-js.png",
    size: 70,
  },
  {
    skill_name: "Django",
    image: "django.png",
    size: 70,
  },
  {
    skill_name: "Hyperledger Fabric",
    image: "fabric.png",
    size: 100,
  },
  {
    skill_name: "Hyperledger Aries",
    image: "aries2.png",
    size: 70,
  },
  {
    skill_name: "Laravel",
    image: "laravel.svg",
    size: 70,
  },
] as const;
