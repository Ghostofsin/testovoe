export class LoginPage {
  constructor() {
    this.loginInput = "#email";
    this.passwordInput = "#password";
    this.submitButton = "button[type='submit']";
  }

  autorization(login, password) {
    cy.get(this.loginInput).should("be.visible").type(login);
    cy.get(this.passwordInput).should("be.visible").type(password);
    cy.get(this.submitButton).should("be.enabled").click();
  }
}

export const loginPage = new LoginPage();
