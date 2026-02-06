import knowledgebase from "../src/img/knowledgebase.png";
import uplift from "../src/img/uplift.png";
import notetaker from "../src/img/notetaker.jpg";
import codingquiz from "../src/img/codingquiz.png";
import scheduler from "../src/img/scheduler.jpg";
import weather from "../src/img/weather.jpg";
import techblog from "../src/img/techblog.png";

export const products = [
  {
    id: "kb",
    featured: true,
    title: "Ask Capitol Knowledge Base",
    img: knowledgebase,
    link: "https://ask.captechu.edu/",
    description:
      "University knowledge base I oversee end-to-end: page structure, navigation, content standards, and accessibility checks to keep resources easy to find and maintain.",
    github: null,
  },
  {
    id: "uplift",
    title: "UpLift",
    img: uplift,
    link: "https://uplift-srb.herokuapp.com/login",
    description:
      "Fitness tracker app where users can track and share workouts within a community.",
    github: "https://github.com/Rbenney15/UpLift",
  },
  {
    id: "notetaker",
    title: "Note Taker",
    img: notetaker,
    link: "https://note-taker-rbgwu.herokuapp.com",
    description:
      "Note-taking app for creating, saving, and deleting project notes.",
    github: "https://github.com/Rbenney15/note-taker",
  },
  {
    id: "techblog",
    title: "Tech Blog",
    img: techblog,
    link: "https://techblogrbgwu.herokuapp.com/",
    description:
      "CMS-style blog with authentication and commenting; built with Handlebars, Sequelize, and Express sessions.",
    github: "https://github.com/Rbenney15/blog-tech",
  },

  // OPTIONAL: keep these only if you want more than 3 additional projects
  {
    id: "codingquiz",
    title: "Coding Quiz",
    img: codingquiz,
    link: "https://rbenney15.github.io/coding-quiz/",
    description: "Timed quiz to test JavaScript fundamentals.",
    github: "https://github.com/Rbenney15/coding-quiz",
  },
  {
    id: "scheduler",
    title: "Workday Scheduler",
    img: scheduler,
    link: "https://rbenney15.github.io/workday-scheduler/",
    description: "Editable weekday scheduler for tracking daily tasks.",
    github: "https://github.com/Rbenney15/workday-scheduler",
  },
  {
    id: "weather",
    title: "Weather Dashboard",
    img: weather,
    link: "https://rbenney15.github.io/weather-dashboard/",
    description: "City search weather dashboard with 5-day forecast.",
    github: "https://github.com/Rbenney15/weather-dashboard",
  },
];
