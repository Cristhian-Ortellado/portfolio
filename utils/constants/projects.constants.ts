import crud from "@assets/img/placeholders/crud.png";
import laralearn from "@assets/img/placeholders/laralearn.png";
import console_app from "@assets/img/placeholders/console.png";
import twitter from "@assets/img/placeholders/twitter.jpeg";
import tailwind from "@assets/img/placeholders/tailwind.png";
import spotify from "@assets/img/placeholders/spotify.png";

export const projects = [
  {
    number: "01",
    title: "Spotify Clone",
    languages: ["JavaScript", "Tailwind CSS", "Astro", "React", "Svelte"],
    description:
      "This project is an imitation of Spotify website built using Astro",
    cta: "https://spotify-clone-i5db.vercel.app/",
    imageSource: spotify,
    altImage: "Screenshot of the Spotify Project",
    ariaLabelLink: "See the deployed spotify project",
  },
  {
    number: "02",
    title: "Lara Learn",
    languages: ["PHP", "Laravel", "Tailwind CSS", "HTML", "MYSQL"],
    description:
      "Lara Learn is a blog project. It is a powerful and feature-rich application designed to provide a seamless and interactive blogging experience.",
    cta: "https://github.com/Cristhian-Ortellado/laralearn",
    imageSource: laralearn,
    altImage: "Screenshot of the Blog Project",
    ariaLabelLink: "See the source code of the Lara Learn blog Project",
  },
  {
    number: "03",
    title: "CRUD of Projects",
    languages: ["PHP", "Laravel", "Bootstrap", "HTML", "MYSQL"],
    description: `Functional web aplication that gives you the posibility to show
        information about you and your projects...some kind of portfolio. 
        This is a CRUD of projects with a system authentication in order to provide the ability
        to create your own portfolio! 
        `,
    cta: "https://github.com/Cristhian-Ortellado/CRUD_projects/tree/main",
    imageSource: crud,
    altImage: "Screenshot of the Project",
    ariaLabelLink: "See the source code of the CRUD  of Project",
  },
  {
    number: "04",
    title: "Tracking of tasks",
    languages: ["Javascript", "Nodejs"],
    description:
      "This is an app console in nodejs tha gives you the posibility to save all your pending task and then mark as completed or delete it. This app console have a beautiful user interface with colors and interactive things!",
    cta: "https://github.com/Cristhian-Ortellado/tracking-of-tasks-app-console",
    imageSource: console_app,
    altImage: "Screenshot of the App Console Project",
    ariaLabelLink: "See the source code of the App Console Project",
  },
  {
    number: "05",
    title: "Tailwind Css Blog",
    languages: ["JAVASCRIPT", "CSS", "VITE JS", "TAILWIND CSS", "HTML"],
    description:
      "This is a blog built with Tailwind CSS. This blog support Dark mode, Light mode and default system mode for web and mobile. If you change your theme in your computer the website will change the default theme automatically.",
    cta: "https://tailwindcss-blog-ochre.vercel.app/",
    imageSource: tailwind,
    altImage: "Screenshot of the Project",
    ariaLabelLink: "See the live project",
  },
  {
    number: "06",
    title: "Twitter Copy",
    languages: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "MYSQL",
      "HTML",
      "JavaScript",
      "BLADE",
    ],
    description:
      "This is a Laravel-based Twitter clone that replicates some of the basic functionalities of the popular social media platform Twitter. It allows users to create accounts, post tweets, follow other users, and view a timeline of tweets from the users they follow.",
    cta: "https://github.com/Cristhian-Ortellado/twitter-copy/tree/main",
    imageSource: twitter,
    altImage: "Screenshot of the Project",
    ariaLabelLink: "See the source code of the Project",
  },
];
