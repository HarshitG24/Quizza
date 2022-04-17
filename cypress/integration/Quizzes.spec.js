/* global cy */

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
  it("Data is rendered correctly on dashboard", () => {
    cy.visit("http://localhost:3000/result");
    cy.get(".go-to-dashboard").click();
    cy.visit("http://localhost:3000/dashboard");
  });
});
