import bbbImg from "../Assets/bbb.png";
import makanwhereImg from "../Assets/makanwhere.png";
import quantumquizImg from "../Assets/quantumquiz.png";
import sudokuImg from "../Assets/sudoku.png";

export const projects = [
  {
    title: "Makan Where",
    subtitle: "PERN stack",
    description: "Personalised local food recommendations",
    image: makanwhereImg,
    link: "https://makan-where-app.web.app/",
    repos: {
      frontend: "https://github.com/prettykaur/makan-where-frontend",
      backend: "https://github.com/prettykaur/makan-where-backend",
    },
    features: [
      "Secure user authentication using JWTs",
      "Location-based restaurant search",
      "Review food places",
      "Create and share themed food lists",
      "Follow users and view activities in feed",
      "Save your favourite places, reviews, and lists",
      "Interactive food recommendations map",
      "View most popular places in 'featured' feed",
    ],
    tech_stack: [
      "React",
      "Material UI",
      "JSON Web Tokens",
      "Node",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Google Maps API",
    ],
  },
  {
    title: "Best Book Buddies",
    subtitle: "PERN stack",
    description: "Social media app for book lovers",
    image: bbbImg,
    link: "https://bestbookbuddies.netlify.app",
    repos: {
      frontend: "https://github.com/prettykaur/bestbookbuddy-frontend",
      backend: "https://github.com/prettykaur/bestbookbuddy-backend",
    },
    features: [
      "Book search engine",
      "Share book recommendations",
      "Compile themed book collections",
      "Track reading activity",
      "Review books",
      "User networking via friend requests",
      "View friend activity in user feed",
      "Book discussion threads",
    ],
    tech_stack: [
      "React",
      "Material UI",
      "Auth0",
      "Node",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Google Books API",
      "Open Library API",
    ],
  },
  {
    title: "Quantum Quiz",
    subtitle: "React and Firebase",
    description: "Interactive trivia games with friends",
    image: quantumquizImg,
    link: "https://trivia-7c009.web.app",
    repos: {
      frontend: "https://github.com/prettykaur/trivia",
    },
    features: [
      "Real-time score updates",
      "User authentication",
      "Data storage",
      "Timed quizzes",
      "Asynchronous API calls for trivia questions",
    ],
    tech_stack: ["React", "Material UI", "Firebase", "Open Trivia DB"],
  },
  {
    title: "Sudoku",
    subtitle: "React",
    description: "My take on the popular logic puzzle game",
    image: sudokuImg,
    link: "https://prettykaur.github.io/project1-bootcamp/",
    repos: {
      frontend: "https://github.com/prettykaur/project1-bootcamp",
    },
    features: [
      "Three difficulty levels",
      "Score tracking",
      "Hints",
      "Real-time game feedback, including error tracking",
    ],
    tech_stack: ["React", "Material UI", "Node", "GitHub Pages"],
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "Java",
  "HTML",
  "CSS",
  "React",
  "Node",
  "PostgreSQL",
  "Express",
  "Sequelize",
  "Firebase",
  "Material UI",
  "Chakra UI",
  "Bootstrap",
];
