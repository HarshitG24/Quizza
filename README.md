# About the Project

This project was made by Harshit Gajjar for PDP Project 2.

# Initializing the project

1. Git clone the repo
2. Checkout to the folder
3. Run npm install
4. npm start

# About the project

The project has following features:

1. Home page - Which gives details about the website
2. Quizzes Page - Where users can select category they want to take quiz for
3. Dashboard Page - Fetches data from minimongo database and shows all the tests taken by the user.
4. Results page - It shows the following data: Date of quiz, score of quiz, answer summary, performance and a tables which shows the user answer and correct answer and colors the row in green if the answer was correct and the row is colored in red, if the answer was wrong.
5. Minimongo - Implemented only on Dashboard page

- User will land on the home page.
- They can go to the quizzes page and select a category to take the quiz.
- Once category selected, they can start teh quiz.
- User will be presented randomly picked 5 questions and 4 options, out of which only one option will be correct.
- User's cannot go back to previous question
- In order to go to next question, user has to select one option of the given question.
- User can change their selected option before clicking next.
- To see the score, user has to complete the quiz, answering all 5 questions.
- If the user closes the browser or refreshes the page in middle of the quiz, the quiz won't be considered and no scores will be generated nor results will be stored in the database.
- User can take quiz on same category multiple times, but only the latest quiz result will be stored in database.

# Minimongo Implementation

Minimongo has been implemented only on the dashboard page.

## Testing Minimongo

- User should take a quiz.
- If they go to dashboard page, they can see the results of all quizes taken so far.
- Even if they refresh the page, the results will be still retained on the User Interface.
- If the users take the same quiz multiple times, the latest results are stored in database and previous onces are removed.
- If multiple quizzes taken, user can see the latest result only on dashboard.
- On no other page, minimongo is implemented

# Cypress - Implementing Tests

- Total 3 tests are written using cypress.
- To run the tests run the following command: **npm run cypress:open**
- It should run the tests

## The tests written

1. One test is to make sure that initially on the quizzes page, the take quiz button is disabled and should become enabled only after category is selected.
2. One test is to make sure that unless user doesn't select an option for the question, then cannot proceed to the next question.
3. One test is to make sure that when user goes to dashboard and no tests are taken, it shows the correct text

# Deployed version of the website

The website is deployed using surge on the following website: [http://profuse-plants.surge.sh/](http://profuse-plants.surge.sh/)

# Business Requirement File Location

The Business requirement document is added in this same project files with the name **PDP Project 2 Harshit Gajjar**
