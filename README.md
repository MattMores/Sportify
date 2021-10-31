# Welcome to Sportify!

![sportifyLogo](https://user-images.githubusercontent.com/79879179/139563220-9bcb5f5f-e8b3-4a83-9f1f-c50fb4f970f3.png)


#### Table of Contents

* [Summary](#summary)
* [Primary Features](#primary-features)
* [Database & Technologies Used](#database-and-technologies-used)
* [Live Site](#live-site)
* [Wiki](#wiki)

## Summary
Sportify is a full-stack web application serving you a weekly mixtape of fresh bets. Users can create, post and update bets they want to make - allowing friends to review, rate and comment with their own thoughts. The goal is to build a community of bettors who can share their insights on individual bets so that, collectively, everyone can make smarter betting decisions. The vision was to create a visual clone of Spotify, while having the UX/UI of Reddit/Yelp.

On the site, users can:

* Sign Up and log in / log out with their data persisting between visits
* Use the demo login to experience the site without creating an account
* Navigate to the /bets page to create, post, update and delete bets - which other users can comment on and rate
* Navigate to the /bets:id page to create, post, update and delete reviews of other users' bets
* Use the search feature to display only bets that are relevant to the keyword query
* Authenticate Spotify's API if the user wants their Spotify profile image to appear next to their bets

## Primary Features

### User Login and Sign Up

Users can Login or Sign Up/Register using a Login Form Modal powered by React

![fullscreenLogin](https://user-images.githubusercontent.com/79879179/139563242-69e0b4e8-cfbd-4c7f-b387-921304c15984.gif)
<img width="600" alt="Screen Shot 2021-10-29 at 5 26 57 PM" src="https://user-images.githubusercontent.com/79879179/139507896-6d38cebb-df83-46cc-80a6-5a763bd3050f.png">
<img width="600" alt="Screen Shot 2021-10-29 at 5 27 29 PM" src="https://user-images.githubusercontent.com/79879179/139507940-9df4ba95-5f83-42ae-9ceb-63ff95c13024.png">

### Bets Page

After logging in, the user lands on the home page where they can view all the latest bets that their friends are interested in. This is also the place that users can create a bet, search for bets, and use external Betting Resources to do research for upcoming games. 

<img width="1193" alt="BetsPage" src="https://user-images.githubusercontent.com/79879179/139511245-927de499-32e3-42f8-8622-02602b14c0cf.png">

### Creating A Bet

Users can post a bet they are thinking of making, which other users can then review and rate. Once created, this bet is quickly displayed without refreshing the page. 

https://user-images.githubusercontent.com/79879179/139508575-55d10b25-c75e-4c82-98af-d207acfac5e7.mov

### Updating A Bet
By enabling frontend and backend authentication measures, along with React Router, users have the privacy and autonomy to only access and change/update their own bets. 

https://user-images.githubusercontent.com/79879179/139564215-26ce7f10-aa66-43d6-bd7f-424ab56d7d0c.mov

Once clicking "Update", a modal form pops up that allows users to quickly and cleanly update their bet.

<img width="513" alt="UpdateBet" src="https://user-images.githubusercontent.com/79879179/139508867-cc65f0c4-87b6-4ef4-84d8-e81fb2ae766d.png">

<img width="1400" alt="UpdateBetModal" src="https://user-images.githubusercontent.com/79879179/139508875-008a2040-9771-46da-8032-576bbad6080f.png">

After making their update, the modal closes and the updated bet is displayed on the home page.  

<img width="478" alt="UpdatedBet" src="https://user-images.githubusercontent.com/79879179/139508880-06ff4621-326a-4ca4-b7ec-92a2f7a5757a.png">

### Commenting and Rating 

Along with their own bets, users can view bets that others are thinking of placing. If there is a bet they have feedback on, they can click on the "Comment" button to be redirected to the individual bet page (/bets:id) - where they can view the comments/ratings that other users have published, and post their own comments/ratings. 

https://user-images.githubusercontent.com/79879179/139564371-6d0f438f-f362-47a6-90e7-9f4b6cd029a6.mov

<img width="499" alt="Comment" src="https://user-images.githubusercontent.com/79879179/139509764-50b67841-ea5a-488c-99d5-7790bcee1c9c.png">

<img width="1335" alt="CommentPageTwo" src="https://user-images.githubusercontent.com/79879179/139509859-3bc3e24b-4525-451c-b114-29be6ff3048e.png">

### Search

Logged in users can also search for specific bets/games by name. A custom search algorithm then displays only bets that are relevant to that user’s search query.

https://user-images.githubusercontent.com/79879179/139564473-dbe32bab-59bf-4833-ab1a-a262bff8a824.mov

<img width="1098" alt="Search" src="https://user-images.githubusercontent.com/79879179/139511548-58805ac2-e577-43f1-8ace-7dc667e93c40.png">

## Database and Technologies Used

### Structure Overview

The backend was built using JavaScript and Express, and connects to a postgreSQL database via Sequelize. The RESTful convention was followed in all backend API routes. 

The frontend was built using React and Redux, powered by JavaScript, and designed with CSS and Material UI. Spotify For Developers was also tapped into to access user data through Spotify's API.

### Additional Libraries and Technologies Used

Express Router, Postbird, Postman, Express Security Middlewares, BCRYPT Password Hashing, Cookie-Parser, CORS, CSURF protection, JSON Web Token, Morgan, API routes, Error Handling, Table Migration

### Database Schema

<img width="1059" alt="dbSchema" src="https://user-images.githubusercontent.com/79879179/139563282-52c42d2b-b07e-4526-8469-cb831b6a1784.png">

## Live Site

##### NOTE: Site is currently inactive as hosting Dyno hours have expired.

## Wiki
The Wiki contains additional information and planning documents:

* [MVP Feature List](https://github.com/MattMores/Sportify/wiki/mvp-feature-list)
* [User Stories](https://github.com/MattMores/Sportify/wiki/user-stories)
* [User Facing Routes](https://github.com/MattMores/Sportify/wiki/user-facing-routes)
* [Backend Routes](https://github.com/MattMores/Sportify/wiki/backend-routes)


