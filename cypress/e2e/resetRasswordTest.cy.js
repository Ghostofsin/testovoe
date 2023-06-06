const {
  resetPasswordPage,
} = require("../support/pageObjects/ResetPasswordPage");

describe("Reset password tests", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.url().should("include", "/login");
  });

  it("Should success message appear if correct email", () => {
    resetPasswordPage.goToResetPassword();
    resetPasswordPage.resetPassword("name@dfdf.ru");
    cy.contains("We've sent an email to").should("be.visible");
  });

  it("Should error message appear if incorrect email", () => {
    resetPasswordPage.goToResetPassword();
    resetPasswordPage.resetPassword("name.ru");
    cy.contains("Please enter a valid email").should("be.visible");
  });

  it("Should be able return back to login page", () => {
    resetPasswordPage.goToResetPassword();
    cy.contains("Return to login").should("be.visible").click();
    cy.url().should("include", "/login");
  });
});
