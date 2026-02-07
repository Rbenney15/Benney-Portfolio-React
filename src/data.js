import knowledgebase from "../src/img/knowledgebase.png";
import codingquiz from "../src/img/codingquiz.png";
import scheduler from "../src/img/scheduler.png";
import weather from "../src/img/weather.png";

// Curated portfolio list:
// - Featured: real-world production platform 
// - Selected: only projects that are live

export const products = [
  {
    id: "kb",
    featured: true,
    title: "Ask Capitol Knowledge Base",
    img: knowledgebase,
    link: "/knowledge-base",
    description:
      "University knowledge base I oversee end-to-end—structure, navigation, content standards, and accessibility checks to keep resources easy to find and easy to maintain.",
    github: null,
  },
  {
    id: "coding-quiz",
    title: "Coding Quiz",
    img: codingquiz,
    link: "https://rbenney15.github.io/coding-quiz/",
    description: "Timed quiz to test JavaScript fundamentals.",
    github: "https://github.com/Rbenney15/coding-quiz",
  },
  {
    id: "workday-scheduler",
    title: "Workday Scheduler",
    img: scheduler,
    link: "https://rbenney15.github.io/workday-scheduler/",
    description: "Editable weekday scheduler for tracking daily tasks.",
    github: "https://github.com/Rbenney15/workday-scheduler",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    img: weather,
    link: "https://rbenney15.github.io/weather-dashboard/",
    description: "Weather dashboard with city search and 5-day forecast.",
    github: "https://github.com/Rbenney15/weather-dashboard",
  },
];
