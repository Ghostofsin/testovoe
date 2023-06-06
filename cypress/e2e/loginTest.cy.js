const { loginPage } = require("../support/pageObjects/LoginPage");
import { v4 as uuidv4 } from "uuid";

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

  it("Should be logined with correct data", () => {
    loginPage.autorization(uuidv4() + "@abtasty.com", uuidv4()); //correct
    // you should be on the new page
  });

  it("Should not be logined with incorrect password", () => {
    loginPage.autorization(uuidv4() + "@abtasty.com", uuidv4()); // incorrect password
    cy.contains("Please enter a valid email or password").should("be.visible");
    cy.url().should("include", "/login");
  });

  it("Should not be logined with unknown data", () => {
    loginPage.autorization(uuidv4() + "@abtasty.com", uuidv4()); // unknown data
    cy.contains("Please enter a valid email or password").should("be.visible");
    cy.url().should("include", "/login");
  });

  it("Recapcha should be shown after 3 mistakes", () => {
    let login = uuidv4() + "@abtasty.com";
    let password = uuidv4();
    for (let i = 0; i < 3; i++) {
      loginPage.autorization(login, password); // unknown data
    }
    cy.get(loginPage.recapcha).should("be.visible");
  });
});
