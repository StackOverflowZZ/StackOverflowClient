# StackOverflowClient
Front-end of the application StackOverflow

# Features

- Questions: Possibility to create, to show, to edit, or to delete questions. Questions can be up-voted and down-voted.
- Answers: Possibility to answer to a question. A user can edit his own answers, or delete them. Answers can be up-voted
and down-voted.
- Comments: Possibility to comment an answer or a question. A user can edit his own comments, or delete them. Comments
can be up-voted and down-voted.
- Authentication: Possibility to log in to the back-end API through JWT.
- Edit users profiles and change their role if you are admin.
- Feature flipping: admins can disable and enable features on the back-end API.

# Requirements

This application will run on port 8081. To work, the application needs the back-end application,
[StackOverflowAPI](https://github.com/StackOverflowZZ/StackOverflowAPI), to run on port 8080.

# Deployment
To install and run the application :

- Install Node.js
- Install packages with the command ```npm install```
- Run the script server.js with the command ```npm start```