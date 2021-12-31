# Webpack Express With Sass Example App
A webpack express with Sass example application that evaluates a news article by NLP using meaningCloud API 
"https://api.meaningcloud.com/sentiment-2.1?"
the response of the API is a long list of analysis for the articles but to keep it short we show the following parameters only:
Subjectivity
Agreement 
irony
confidence 
This project is originally forked from https://github.com/udacity/fend-webpack-sass
and under the Udacity Advanced Front end development course


## Running

create an account on meaningCloud -obtain your License KEY from 
https://www.meaningcloud.com/developer/account/subscriptions

create a .env file and fill it in this format 
KEY = ***** 

run:
- ```npm install```
- ```npm run build-dev``` to start the webpack dev server
- ```npm run build-prod``` to generate a dist folder for prod
- ```npm start``` to run the Express server on port 8081

## Testing

the project is tested using JEST 