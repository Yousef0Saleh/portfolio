/* eslint-disable no-unused-vars */
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  xora,
  iphone,
  sumz,
  threejs,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "Responsive Design Specialist",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelance / Personal Projects",
    icon: web, // Placeholder for icon
    iconBg: "#383E56",
    date: "From 2018",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with designers and developers to create user-friendly interfaces.",
      "Implementing responsive design and ensuring cross-browser compatibility across projects.",
      "Participating in self-led code reviews to enhance code quality and efficiency.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Self-initiated Projects",
    icon: reactjs, // Placeholder for icon
    iconBg: "#383E56",
    date: "From 2019",
    points: [
      "Building dynamic and interactive web applications using React.js.",
      "Utilizing state management libraries like Redux for efficient data handling.",
      "Optimizing components for maximum performance across a variety of web-capable devices.",
      "Engaging in collaborative project work to refine UI and enhance user experience.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Personal Projects",
    icon: creator, // Placeholder for icon
    iconBg: "#383E56",
    date: "From 2020",
    points: [
      "Designing wireframes and prototypes for web applications to improve user experience.",
      "Conducting user research to inform design decisions and enhance usability.",
      "Collaborating with developers to ensure design fidelity during implementation.",
      "Iterating on designs based on user feedback and testing results.",
    ],
  },
  {
    title: "Code Quality Advocate",
    company_name: "Independent Work",
    icon: github, // Placeholder for icon
    iconBg: "#383E56",
    date: "From 2018",
    points: [
      "Establishing coding standards and best practices for personal projects.",
      "Reviewing and refactoring code to improve readability and performance.",
      "Documenting processes and solutions for future reference.",
      "Mentoring peers in effective coding techniques and practices.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
  },
];

const projects = [
  {
    name: "Xora",
    description:
      "A modern template for an AI video editing website, designed to enhance user experience with seamless editing tools and intuitive navigation.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "SaaS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: xora,
    source_code_link: "https://xora-project.vercel.app/",
  },
  {
    name: "IPhone",
    description:
      "iPhone Project Website is an enhanced version of the official iPhone site, showcasing a modern design and improved performance while maintaining the brand's elegance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tialwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://project-iphone.vercel.app/",
  },
  {
    name: "Sumz",
    description:
      "Sumz, an open-source article summarizer that transforms lengthy articles into clear and concise summaries, helping you save time and focus on key insights.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "tialwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: sumz,
    source_code_link: "https://sumz-project.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };