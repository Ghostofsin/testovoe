export class SsoLoginPage {
  constructor() {
    this.emailInput = "input[type='email']";
    this.submitButton = "button[type='submit']";
  }

  goToSsoLogin() {
    cy.contains("Sign in with SSO").should("be.enabled").click();
    cy.url().should("include", "/ssologin");
  }

  signIn(email) {
    cy.get(this.emailInput).should("be.enabled").clear().type(email);
    cy.get(this.submitButton).should("be.enabled").click();
  }
}

export const ssoLoginPage = new SsoLoginPage();
