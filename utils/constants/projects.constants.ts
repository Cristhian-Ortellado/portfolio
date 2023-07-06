import crud from '@assets/img/placeholders/crud.png';
import laralearn from '@assets/img/placeholders/laralearn.png';
import console_app from '@assets/img/placeholders/console.png';
import twitter from '@assets/img/placeholders/twitter.jpeg';


export const projects = [
    {
        number: "01",
        title: "Lara Learn",
        languages: ["PHP", "Laravel", "Tailwind CSS","HTML","MYSQL"],
        description: "Lara Learn is a blog project. It is a powerful and feature-rich application designed to provide a seamless and interactive blogging experience.",
        cta: "https://github.com/Cristhian-Ortellado/laralearn",
        imageSource: laralearn,
        altImage: 'Screenshot of the Blog Project',
        ariaLabelLink: 'See the source code of the Lara Learn blog Project'
    },
    {
        number: "02",
        title: "CRUD of Projects",
        languages: ["PHP", "Laravel", "Bootstrap","HTML","MYSQL"],
        description: `Functional web aplication that gives you the posibility to show
        information about you and your projects...some kind of portfolio. 
        This is a CRUD of projects with a system authentication in order to provide the ability
        to create your own portfolio! 
        `,
        cta: "https://github.com/Cristhian-Ortellado/CRUD_projects/tree/main",
        imageSource: crud,
        altImage: 'Screenshot of the Project',
        ariaLabelLink: 'See the source code of the CRUD  of Project'
    },
    {
        number: "03",
        title: "Tracking of tasks",
        languages: ["Javascript", "Nodejs"],
        description: "This is an app console in nodejs tha gives you the posibility to save all your pending task and then mark as completed or delete it. This app console have a beautiful user interface with colors and interactive things!",
        cta: "https://github.com/Cristhian-Ortellado/tracking-of-tasks-app-console",
        imageSource: console_app,
        altImage: 'Screenshot of the App Console Project',
        ariaLabelLink: 'See the source code of the App Console Project'
    },
    {
        number: "04",
        title: "Twitter Copy",
        languages: ["Laravel", "PHP", "Tailwind CSS", "MYSQL","HTML","JS","BLADE"],
        description: "This is a Laravel-based Twitter clone that replicates some of the basic functionalities of the popular social media platform Twitter. It allows users to create accounts, post tweets, follow other users, and view a timeline of tweets from the users they follow.",
        cta: "https://github.com/Cristhian-Ortellado/twitter-copy/tree/main",
        imageSource: twitter,
        altImage: 'Screenshot of the Project',
        ariaLabelLink: 'See the source code of the Project'
    },
];