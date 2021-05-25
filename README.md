# SaltFactory

Welcome to SaltFactory, a place to anonymously share your thoughts and feelings when you're feeling extra salty. The feed of posts will show up on your homepage. To create your own posts, the only thing you have to do is just create an account and log in! Your posts can easily be edited and deleted from Your Salt Feed.

## Available Scripts

Before starting up, install the necessary packages by running:

### `npm install`

## Connecting your local database

#### If you don't have a MongoDB Cluster with a database in it:

1. Log in to [MongoDB Cloud](https://account.mongodb.com/account/login)
2. Create a new project
3. Inside of the project, create a new cluster
4. When the cluster has been created, create a new database
5. In the left sidebar, click Database Access.
6. Add a new user with a username and password
7. In the left sidebar, click Clusters. In the Cluster overview, click Connect
8. Connect your IP address, then choose "Connect your application" and copy the string that resembles: mongodb+srv://<username>:<password>@clusterName.y0faq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
9. Click on your cluster and go to the "collections" tab.
10. Create a new database.
11. To connect your database in the code via mongoose, go to line 23 in 'server.js' and replace the string with your connection string from point 8
12. Replace <username> with the username of the user you created, and do the same with <password>. Replace myFirstDataBase with the name of the database you created.

#### If you already have a MongoDB Cluster with a database in it, and a string to connect:

Repeat point 11 from above.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The project uses components from [Material UI](https://material-ui.com/getting-started/installation/)

### Servers

Backend: http://localhost:3000

Frontend: http://localhost:3001

## Creators

This project was created by the following promising Front End Developer students: [Oliver Nygren](https://github.com/olivernygren), [Nicklas Holmqvist](https://github.com/Nicklas-Holmqvist), [Olof Wallgren](https://github.com/olofWallgren), [Timothy Gramnaes](https://github.com/TimothyGramnaes)
