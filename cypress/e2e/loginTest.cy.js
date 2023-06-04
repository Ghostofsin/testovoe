const { loginPage } = require("../support/pageObjects/LoginPage");

describe("Login tests", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.url().should("include", "/login");
  });

  it("Button should be disabled", () => {
    cy.get(loginPage.loginInput).should("be.visible").should("not.have.value");
    cy.get(loginPage.passwordInput)
      .should("be.visible")
      .should("not.have.value");
    cy.get(loginPage.submitButton).should("be.disabled");
  });

  it("Button should be clickable", () => {
    cy.get(loginPage.loginInput)
      .should("be.visible")
      .type("email")
      .should("have.value", "email");
    cy.get(loginPage.passwordInput)
      .should("be.visible")
      .type("password")
      .should("have.value", "password");
    cy.get(loginPage.submitButton).should("be.enabled");
  });

  it("Should be error message", () => {
    cy.get(loginPage.loginInput).should("be.visible").type("email");
    cy.get(loginPage.passwordInput).click();
    cy.contains("Please enter a valid email").should("be.visible");
  });

  it("Should not be error message", () => {
    cy.get(loginPage.loginInput).should("be.visible").type("df@s.com");
    cy.get(loginPage.passwordInput).click();
    cy.contains("Please enter a valid email").should("not.exist");
  });

  it("Should be logined", () => {
    loginPage.autorization("email@abtasty.com", "password"); //correct
    // you should be on the new page
  });

  it("Should not be logined", () => {
    loginPage.autorization("email@abtasty.com", "password"); // incorrect
    cy.contains("Please enter a valid email or password").should("be.visible");
    cy.url().should("include", "/login");
  });

  it("Should be open ssologin page", () => {
    cy.contains("Sign in with SSO").should("be.enabled").click();
    cy.url().should("include", "/ssologin");
    cy.get("input[type='email']").should("be.enabled");
    cy.get("button[type='submit']").should("be.enabled");
  });
});
