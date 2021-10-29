# Welcome to Sportify!

![Logo](https://github.com/MattMores/Sportify/blob/main/sportifyLogo.png)

#### Table of Contents

* [Summary](#summary)
* [Primary Features](#primary-features)
* [Database & Technologies Used](#database-and-technologies-used)
* [Live Site](#live-site)
* [Wiki](#wiki)

## Summary
Sportify is a full-stack web application serving you a weekly mixtape of fresh bets. Users can create, post and update bets they want to make - allowing friends to review, rate and comment with their own thoughts. The goal is to build a community of bettors who can share their insights on individual bets so that, collectively, everyone can make smarter betting decisions. 

On the site, user can:

* Create an account and log in / log out with their data persisting with each visit
* Use the demo log in to experience the site without creating an account
* Navigate to the /bets page to create, post, update and delete bets - which friends can comment on and rate
* Navigate to the /bets:id page to create, post, update and delete reviews of their friends' bets
* Use search algorithm to display only bets that are relevant to their search query
* Authenticate Spotify so their user experience is tailored to settings they established via Spotify's API

## Primary Features

### User Login and Sign Up

User can Login or Sign Up/Register using the same Login Form Modal that is powered by React. 

![LoginGif](https://github.com/MattMores/Sportify/blob/main/fullscreenLogin.gif)
![Login](https://github.com/MattMores/Sportify/blob/main/LoginTwo.png)
![SignUp](https://github.com/MattMores/Sportify/blob/main/SignUp.png)

## Database and Technologies Used

### Structure Overview

The backend was built using JavaScript and Express, and connects to a postgreSQL database via Sequelize. The RESTful convention was followed in all backend API routes. The frontend was built using React and Redux, powered by JavaScript, and designed with CSS and Material UI. I also tapped into Spotify For Developers to access the app's API. 

### Additional Libraries and Technologies Used

Express Router, Postbird, Postman, Express Security Middlewares, BCRYPT Password Hashing, Cookie-Parser, CORS, CSURF protection, JSON Web Token, Morgan, API routes, Error Handling, Table Migration

### Database Schema

![Schema](https://github.com/MattMores/Sportify/blob/main/dbSchema.png)

## Live Site

[Sportify](https://sportify-capstone.herokuapp.com/) - NOTE: Site is currently inactive as hosting Dyno hours have expired.

## Wiki
The Wiki contains additional information and planning documents:

* [Database Schema](https://github.com/MattMores/Sportify/wiki/database-schema)
* [MVP Feature List](https://github.com/MattMores/Sportify/wiki/mvp-feature-list)
* [User Stories](https://github.com/MattMores/Sportify/wiki/user-stories)
* [User Facing Routes](https://github.com/MattMores/Sportify/wiki/user-facing-routes)
* [Backend Routes](https://github.com/MattMores/Sportify/wiki/backend-routes)


