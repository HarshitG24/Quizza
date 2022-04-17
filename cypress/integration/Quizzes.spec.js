/* global cy */
import { getDataWithoutCbk } from "../../src/Model/Mininmongo";

describe("Select Category", () => {
  it("To check if the user selects category before starting the quiz", () => {
    cy.visit("http://localhost:3000/quizzes");

    cy.get(".take-quiz-btn button#take-quiz").should("be.disabled");

    cy.get(".catgeory-card").click({ multiple: true });

    cy.get(".take-quiz-btn button#take-quiz").should("be.enabled");

    cy.get(".take-quiz-btn button#take-quiz").click();
  });
});

describe("Selection option in quiz", () => {
  it("To check if the user can go to next question only after selecting an option", () => {
    // cy.get(".card p#question-number").should("have.value", "Question 1");
    cy.get(".quiz-button").should("be.disabled");
    cy.get(".option-row").click({ multiple: true });
    cy.get(".quiz-button").should("be.enabled");
  });
});

describe("Result page", () => {
  before(() => {
    cy.then(async () => {
      let arr = await getDashboardData();
      console.log("arr", arr);
      cy.wrap(arr).as("fetchedData");
    });
  });
  it("Data is rendered correctly on dashboard", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("@fetchedData").then((data) => {
      if (data.length === 0) {
        cy.get(".no-test-text").should("have.text", "No Tests taken");
      } else {
        cy.get(".dash-text").should(
          "have.text",
          "Following are the quizes taken so far"
        );
      }
    });
  });
});

async function getDashboardData() {
  console.log("started asyncFunction2");
  let data = await getDataWithoutCbk("quiz_score", "quiz");
  console.log("data is", data);
  return data;
}
