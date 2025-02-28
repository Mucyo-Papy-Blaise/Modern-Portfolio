import JavaScript from '../assets/java-script.png'
import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import react from '../assets/science.png'
import photoshop from '../assets/photoshop.png'
import ui from '../assets/ui.png'
import cyber  from '../assets/Cyber.jpg'
import rwandaNziza from '../assets/rwanda web.jpg'
import edgeReach from '../assets/Edge-reach.webp'
import streaming from '../assets/streaming web.webp'
 
interface project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
  challenges: string[];
  link: string;
}

export const education = [
    {
      year: "2021-2025",
      title: "Business Information and Technology",
      institution: "University Of Rwanda",
      description: "Bachelor's degree Information Technology and Communication (ICTs), Computer Science, Computer & Software Engineering",
    },
    {
      year: "2018-2021",
      title: "Accounting",
      institution: "E.A.V Ntendezi(Ecole Agricole et Veterinaire Ntendezi)",
      description: "High school diploma Business and Economics (Administration, Commerce, Finance, Accounting and Human Resource)",
    },
    {
      year: "2016-2017",
      title: "Ordinary Level",
      institution: "SAINT MATTHEW'S",
      description: "Some college / No degree",
    },
  ];

export const experience = [
    {
        company:"EdgeReach Tech",
        workAs:"Front-End Developer",
        workType:"Full Time",
        Time:"Jan 24 - Dec 24",
        TotalTime:"11 Months",
        description : "As a Front-End Developer at EdgeReach Tech, I design and implement user interfaces for web applications, ensuring responsiveness and accessibility across devices",
    },
    {
        company:"B&P Beach Villa and Ever Design Group Ltd",
        workAs:"Graphic Designer",
        workType:"Full Time",
        Time:"Jan 24 - Present",
        TotalTime:"About 2 Years",
        description : "As a Graphic Designer at B&P Beach Villa and Ever Design Group Ltd, I created visually compelling designs for various projects, including marketing materials, social media content, and brand identities.",
    }
]

 export const skills = [
    {
        icon: react, 
        title: "React",
        level: "w-[65%] bg-[#ffc86b] h-full",
        percentage: 65,
    },
    {
        icon: JavaScript, 
        title: "JavaScript",
        level: "w-[75%] bg-[#ffc86b] h-full",
        percentage: 75
    },
    {
        icon: html, 
        title: "HTML",
        level: "w-[90%] bg-[#ffc86b] h-full",
        percentage: 90
    },
    {
        icon: css, 
        title: "CSS & TailwindCss",
        level: "w-[85%] bg-[#ffc86b] h-full",
        percentage: 85
    },
    {
      icon: ui, 
      title: "UI/UX Design ",
      level: "w-[75%] bg-[#ffc86b] h-full",
      percentage: 75
  },
  {
    icon: photoshop, 
    title: "Photoshop",
    level: "w-[80%] bg-[#ffc86b] h-full",
    percentage: 80
},

]

export const projects: project[] = [
  {
    id: 1,
    title: "CyberPro Group",
    category: "Web Development",
    image: cyber,
    description: "A professional website for CyberPro Group, providing cybersecurity, consultancy, and camera installation services.",
    tools: ["React", "Node.js", "TailwindCss"],
    challenges: [
      "Ensuring website security",
      "Building a secure payment system",
      'Optimizing performance for a professional and fast-loading experience.',
    ],
    link: "https://ecommerce-example.com"
  },
  {
    id: 2,
    title: "Edge Reach Tech",
    category: "Web Development",
    image: edgeReach,
    description: "A modern and dynamic website for Edgreach Tech, showcasing its IT solutions, software development, and innovation-driven services.",
    tools: ["React", "Node.js", "Tailwindcss"],
    challenges: [
      "Creating a professional UI/UX ",
      "Effectively structuring and presenting services and past projects.",
    ],
    link: "https://www.edgereachtech.com/"
  },
  {
    id: 3,
    title: "Rwanda-Nziza",
    category: "Web Development",
    image: rwandaNziza,
    description: "A tourism-focused website showcasing Rwanda’s beauty, hotels, and attractions to promote travel experiences.",
    tools: ["React", "Node.js", "TailwindCss"],
    challenges: [
      "Optimizing images for fast loading",
      "integrating interactive maps",
      "Ensuring a seamless user experience."
    ],
    link: ""
  },
  {
    id: 4,
    title: "Streaming Website",
    category: "Web Development",
    image: streaming ,
    description: " A platform to stream your DJ mixes, allowing users to listen and engage with your music.",
    tools: ["React", "Node.js", "TailWindCss"],
    challenges: [
      "Implementing real-time inventory sync across multiple warehouses",
      "Optimizing database queries for large product catalogs",
      "Building a secure payment processing system"
    ],
    link: "https://ecommerce-example.com"
  },
  {
    id: 5,
    title: "Person Portfolio",
    category: "Web Development",
    image: cyber,
    description: "A personal website showcasing your skills, projects, and DJing experience.",
    tools: ["React", "Node.js", "TailwindCss"],
    challenges: [
      "Balancing design and functionality,",
      "Ensuring fast load times, and making it mobile-friendly.",
    ],
    link: "https://ecommerce-example.com"
  },
]

export const searchAllData = (query: string) => {
  if (!query || query.trim() === '') {
    return {
      education: education,
      experience: experience,
      skills: skills,
      projects: projects,
      resultsFound: true
    };
  }

  // Convert query to lowercase for case-insensitive search
  const searchQuery = query.toLowerCase().trim();

  // Search through education
  const filteredEducation = education.filter(item => 
    item.title.toLowerCase().includes(searchQuery) ||
    item.institution.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery) ||
    item.year.toLowerCase().includes(searchQuery)
  );

  // Search through experience
  const filteredExperience = experience.filter(item =>
    item.company.toLowerCase().includes(searchQuery) ||
    item.workAs.toLowerCase().includes(searchQuery) ||
    item.workType.toLowerCase().includes(searchQuery) ||
    item.Time.toLowerCase().includes(searchQuery) ||
    item.TotalTime.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery)
  );

  // Search through skills
  const filteredSkills = skills.filter(item =>
    item.title.toLowerCase().includes(searchQuery) ||
    item.percentage.toString().includes(searchQuery)
  );

  // Search through projects
  const filteredProjects = projects.filter(item =>
    item.title.toLowerCase().includes(searchQuery) ||
    item.category.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery) ||
    item.tools.some(tool => tool.toLowerCase().includes(searchQuery)) ||
    item.challenges.some(challenge => challenge.toLowerCase().includes(searchQuery))
  );

  // Check if any results were found
  const resultsFound = 
    filteredEducation.length > 0 || 
    filteredExperience.length > 0 || 
    filteredSkills.length > 0 || 
    filteredProjects.length > 0;

  return {
    education: filteredEducation,
    experience: filteredExperience,
    skills: filteredSkills,
    projects: filteredProjects,
    resultsFound
  };
};