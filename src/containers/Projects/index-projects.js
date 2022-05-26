import React from "react";
import { Grid } from '@mui/material';
import CarouselCard from "./CarouselCard";

const project1 = [
    {
        id: 1,
        image: './pictures/dragRegister.png',
        alt: 'register',
    },
    {
        id: 2,
        image: './pictures/dragSearch.png',
        alt: 'search'
    },
    {
        id: 3,
        image: './pictures/dragResults.png',
        alt: 'results'
    },
    {
        id: 4,
        image: './pictures/dragError.png',
        alt: 'error'
    },
]

const proj1Text = {
    title: 'Drag Race',
    text: "Web application to search for drag queens using a Rupaul's Drag Race API. Search for drag queens and save them to your own personal All Star team! Made with Flask, Postgres and CSS. Deployed with Heroku at https://capstone1-dragrace.herokuapp.com/register and on Github at https://github.com/howarde4/capstoneOne"
}

const project2 = [
    {
        id: 5,
        image: './pictures/menuHome.png',
        alt: 'home'
    },
    {
        id: 6,
        image: './pictures/menuRegister.png',
        alt: 'register'
    },
    {
        id: 7,
        image: './pictures/menuSignedin.png',
        alt: 'signedIn'
    },
    {
        id: 8,
        image: './pictures/menuMenu.png',
        alt: 'menu'
    },
    {
        id: 9,
        image: './pictures/menuEvents.png',
        alt: 'events'
    },
    {
        id: 10,
        image: './pictures/menuRecipe.png',
        alt: 'recipe'
    },
]

const proj2Text = {
    title: 'Menu Builder',
    text: "Web application to search for recipes through a recipe API, or add your own recipes and create menus for special events. Built with Express, Postgres, React and Bootstrap. Deployed with Surge at https://venomous-boat.surge.sh/ and on Github at https://github.com/howarde4/Capstone2"
}

const project3 = [
    {
        id: 11,
        image: './pictures/appHome.PNG',
        alt: 'home'
    },
    {
        id: 12,
        image: './pictures/appSet.PNG',
        alt: 'set'
    },
    {
        id: 13,
        image: './pictures/appList.PNG',
        alt: 'list'
    },
]

const proj3Text = {
    title: 'Reminder App',
    text: "Mobile application to create reminders and set them to a date and time. Shows list of reminders where you can mark them complete or delete them when finished. Created with React Native and Styled Components."
}

export default function Projects() {
    return (
        <Grid container spacing={2}>
            <CarouselCard project={project1} text={proj1Text} />
            <CarouselCard project={project2} text={proj2Text} />
            <CarouselCard project={project3} text={proj3Text} />
        </Grid>

    )
}