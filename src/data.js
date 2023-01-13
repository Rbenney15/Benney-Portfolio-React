import uplift from '../src/img/uplift.png';
import notetaker from '../src/img/notetaker.jpg';
import codingquiz from '../src/img/codingquiz.png';
import scheduler from '../src/img/scheduler.jpg';
import weather from '../src/img/weather.jpg';
import techblog from '../src/img/techblog.png';

export const products = [
  {
    id: 1,
    img: uplift,
    link: "https://uplift-srb.herokuapp.com/login",
    description:
      "Fitness Tracker application that allows users to join a like minded community to track and share workouts.",
    github: "https://github.com/Rbenney15/UpLift",
  },
  {
    id: 2,
    img: notetaker,
    link: "https://note-taker-rbgwu.herokuapp.com",
    description:
      "Note taking application that provides an electronic notepad for taking and saving project notes. Notes can be deleted upon project completion.",
    github: "https://github.com/Rbenney15/note-taker",
  },
  {
    id: 3,
    img: codingquiz,
    link: "https://rbenney15.github.io/coding-quiz/",
    description:
      "Timed Coding Quiz that will test your basic JavaScript knowledge.",
    github: "https://github.com/Rbenney15/coding-quiz",
  },
  {
    id: 4,
    img: scheduler,
    link: "https://rbenney15.github.io/workday-scheduler/",
    description: "An editable weekday scheduler to track daily tasks.",
    github: "https://github.com/Rbenney15/workday-scheduler",
  },
  {
    id: 5,
    img: weather,
    link: "https://rbenney15.github.io/weather-dashboard/",
    description:
      "Weather Dashboard application where a user can search for a city they would like to know the current and upcoming 5 day forecast.",
    github: "https://github.com/Rbenney15/weather-dashboard",
  },
  {
    id: 6,
    img: techblog,
    link: "https://techblogrbgwu.herokuapp.com/",
    description:
      "This project is a CMS-style blog site. Giving developers the opportunity to publish their blog posts and comment on other developers posts. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
    github: "https://github.com/Rbenney15/blog-tech",
  },
];