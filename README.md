# Sup-news App

[Check out the hosted version](https://stoic-austin-6977f9.netlify.app/)

## My goal was to build the front-end for a news app project

This project is a React JS front-end web interface for handling all client-side interactions with the web app, sending requests to the back-end API and receiving information which is displayed for the user.

### Features

- user accounts
- display of articles
- posting of articles by a user
- posting comments on articles
- user can delete their own comments
- user can like/upvote an article
- view articles by topic
- sort articles by votes, date or number of comments
- order articles by date created: ascending or descending

## How I worked on this project

- I built this app based on a crude wireframe (3-day project) [see here](https://user-images.githubusercontent.com/86922213/162637697-c32f36db-81d5-4d81-bb59-d9495cac4f92.png)
- I used feature branches and pull requests [see here](https://user-images.githubusercontent.com/86922213/162637691-24fdf503-3b43-4384-90d4-29563da96881.png)

## How to navigate this project

- Stateful logic [see here](https://user-images.githubusercontent.com/86922213/162637694-99b591bb-6cbc-410e-a3b7-b2608d84c276.png)
- Responsive front-end using react-bootstrap [see here](https://user-images.githubusercontent.com/86922213/162637692-aa6151e1-78f3-491e-adad-0040ec929684.png) & [here](https://user-images.githubusercontent.com/86922213/162637708-3a441a6f-a586-4219-98b6-7bacf9978ee5.png)
- The application fetches data from the REST API using axios [see here](https://user-images.githubusercontent.com/86922213/162637690-3c88ddc2-1eea-4c39-99fc-c4b282af846c.png)

## Why I built the project this way

- The React js framework is a JavaScript library for creating and building high quality user interfaces using components that manage their own state
- React uses a virtual DOM which is faster and more efficient to update
- React-bootstrap removes the friction of building a mobile-first web app
- Axios provides helpful tools for adding queries to endpoints

## If I had more time I would change this

- Add more options for a users profile
- Improve the authorisation flow for a better login experience
- Integrate Pagination or infinite scroll without loading all of the content at once

[Check out the back-end repo](https://github.com/deasar-js/nc-news)

## Minimum Version Requirements

Node v17.3.0

## How to run this project locally

1. Clone this repo to your local environment

git clone <https://github.com/deasar-js/fe-nc-news>

2. cd into the repo

3. $run npm install

4. $run npm start
