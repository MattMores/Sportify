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
<img width="600" alt="Screen Shot 2021-10-29 at 5 26 57 PM" src="https://user-images.githubusercontent.com/79879179/139507896-6d38cebb-df83-46cc-80a6-5a763bd3050f.png">
<img width="600" alt="Screen Shot 2021-10-29 at 5 27 29 PM" src="https://user-images.githubusercontent.com/79879179/139507940-9df4ba95-5f83-42ae-9ceb-63ff95c13024.png">

### Placing A Bet

Users can post a bet they are thinking of making, which other users can then review and rate. This bet is quickly displayed on the page without refreshing the page. 

https://user-images.githubusercontent.com/79879179/139508575-55d10b25-c75e-4c82-98af-d207acfac5e7.mov

### Updating A Bet
By enabling frontend and backend authentication measures, along with React Router, users have the privacy and autonomy to only access and change/update their own bets. 

<img width="513" alt="UpdateBet" src="https://user-images.githubusercontent.com/79879179/139508867-cc65f0c4-87b6-4ef4-84d8-e81fb2ae766d.png">
Once clicking "Update", a modal form pops up that allows users to quickly and cleanly update their bet. 
<img width="1400" alt="UpdateBetModal" src="https://user-images.githubusercontent.com/79879179/139508875-008a2040-9771-46da-8032-576bbad6080f.png">
After making their update, they are returned to the home betting page. 
<img width="478" alt="UpdatedBet" src="https://user-images.githubusercontent.com/79879179/139508880-06ff4621-326a-4ca4-b7ec-92a2f7a5757a.png">

### Commenting and Rating 

Along with their own bets, users can view bets that others are thinking of placing. If there is a bet they have feedback on, they can click on the comment button. Users are redirected to the individual bet page (/bets:id) where they can view the comments/ratings that other users provided, and post their own comments/ratings. 

<img width="499" alt="Comment" src="https://user-images.githubusercontent.com/79879179/139509764-50b67841-ea5a-488c-99d5-7790bcee1c9c.png">

<img width="1335" alt="CommentPageTwo" src="https://user-images.githubusercontent.com/79879179/139509859-3bc3e24b-4525-451c-b114-29be6ff3048e.png">

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


