type NavLink = {
  id: number;
  name: string;
  type: WindowConfigKey;
};

const navLinks: NavLink[] = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

type WindowKey =
  | "finder"
  | "safari"
  | "photos"
  | "contact"
  | "terminal"
  | "trash";

type DockApp = {
  id: WindowKey;
  name: string;
  icon: string;
  canOpen: boolean;
};

const dockApps: DockApp[] = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: false,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native with Expo (Intermediate)"],
  },
  {
    category: "Styling & UI",
    items: ["CSS", "Tailwind CSS", "Shadcn UI", "MUI"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    className: "bg-rose-400 dark:bg-rose-600",
    link: "https://github.com/arpit194",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    className: "bg-emerald-400 dark:bg-emerald-600",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    className: "bg-orange-300 dark:bg-orange-400",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    className: "bg-blue-300 dark:bg-blue-500",
    link: "https://www.linkedin.com/in/arpitpatel194",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Beautiful Grid Layout Package",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-20 left-40",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Beautiful Grid Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "@arpit194/beautiful-grid is a lightweight and flexible grid layout library designed for building custom, responsive, and bento-style layouts.",
            "Instead of rigid 12-column systems, it gives developers complete freedom to create dynamic grid-based designs with drag-and-drop capability and fully customizable cell sizing.",
            "Think of it like a modern design tool inside your React app—perfect for dashboards, portfolio layouts, or customizable UIs.",
            "It's built with React and css, focusing on simplicity, performance, and design flexibility.",
          ],
        },
        {
          id: 2,
          name: "beautiful-grid.npm",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.npmjs.com/package/@arpit194/beautiful-grid",
          position: "top-20 left-70",
        },
        {
          id: 3,
          name: "GitHub Repository",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/arpit194/beautiful-grid",
          position: "top-40 left-5",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-30 left-5",
      subtitle: "Meet the Developer Behind the Code",
      // image: "/images/adrian.jpg",
      description: [
        "Hey! I'm Arpit 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Tailwind—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I'm big on clean UI, good UX, and writing code that doesn't need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

type WindowConfigKey = Exclude<
  WindowKey | "resume" | "txtfile" | "imgfile",
  "trash"
>;

type Window = {
  isOpen: boolean;
  zIndex: number;
  data: unknown;
};

type Windows = Record<WindowConfigKey, Window>;

const WINDOW_CONFIG: Windows = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: true, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export {
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
  type WindowConfigKey,
  type Window,
  type DockApp,
  type Windows,
};
