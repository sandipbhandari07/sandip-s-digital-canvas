export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  github: string;
  imageUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "kid-learning-game",
    title: "Kid Learning Game",
    subtitle: "Android Game Application",
    description: "Android Application with JAVA",
    features: [
      "AlphabeticActivity",
      "SettingActivity",
      "DrawingActivity",
      "FruitsActivity",
      "KnowledgeActivity",
      "NumberActivity",
    ],
    github: "https://github.com/sandipbhandari07/KidLearningGame_androidApp",
    imageUrl: "/project-kid-game.jpg",
    category: "Mobile App",
  },
  {
    id: "gtbs",
    title: "GTBS",
    subtitle: "Ecommerce Android Application",
    description: "Android Application with Firebase",
    features: [
      "Add Products",
      "View Products",
      "Add to cart",
      "Buy",
      "Admin Dashboard",
      "Buyer Dashboard",
      "Seller Dashboard",
    ],
    github: "https://github.com/sandipbhandari07/GTBS",
    imageUrl: "/project-gtbs.jpg",
    category: "Mobile App",
  },
  {
    id: "library-nepal",
    title: "Library Nepal",
    subtitle: "A learning android application",
    description: "Android Application with Firebase",
    features: [
      "Add book",
      "View book",
      "Notes",
      "Solution books",
      "Model questions",
    ],
    github: "https://github.com/sandipbhandari07/LibraryNepal",
    imageUrl: "/project-library.jpg",
    category: "Mobile App",
  },
  {
    id: "gamemartz",
    title: "GameMartz",
    subtitle: "A Gaming ecommerce web-application",
    description: "WordPress web-application",
    features: ["View store", "Games", "Add to cart"],
    github: "https://github.com/sandipbhandari07/gameMartz",
    imageUrl: "/project-gamemartz.jpg",
    category: "Web App",
  },
  {
    id: "slayer",
    title: "Slayer",
    subtitle: "Web Based Game",
    description: "Web based game with JavaScript",
    features: ["Battle"],
    github: "https://github.com/sandipbhandari07/Slayer_The_Web_Base_Game",
    imageUrl: "/project-slayer.jpg",
    category: "Web Game",
  },
  {
    id: "cave-escape",
    title: "CaveEscape",
    subtitle: "Web Based Game",
    description: "Web based game with HTML and CSS",
    features: ["Replay", "Exit the game"],
    github: "https://github.com/sandipbhandari07/CaveEscape",
    imageUrl: "/project-cave.jpg",
    category: "Web Game",
  },
  {
    id: "agriculture-website",
    title: "Agriculture Website",
    subtitle: "Ecommerce Application",
    description: "Laravel Application",
    features: ["Add Products", "View Products", "Add to cart", "Admin Dashboard"],
    github: "https://github.com/sandipbhandari07/laravel_project",
    imageUrl: "/project-agriculture.jpg",
    category: "Web App",
  },
];
