const { ssoLoginPage } = require("../support/pageObjects/SsoLoginPage");

describe("Login tests", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.url().should("include", "/login");
  });

  it("Should be loggined ", () => {
    ssoLoginPage.goToSsoLogin();
    ssoLoginPage.signIn("name@abtasty.com"); //correct
    // you should be on the new page
  });

  it("Should be error message", () => {
    ssoLoginPage.goToSsoLogin();
    ssoLoginPage.signIn("name@.com"); //in correct
    cy.contains("Please enter a valid email").should("be.visible");
    cy.url().should("include", "/ssologin");
  });

  it("Should be able return back to login page", () => {
    ssoLoginPage.goToSsoLogin();
    cy.contains("Sign in with email & password").should("be.visible").click();
    cy.url().should("include", "/login");
  });
});
