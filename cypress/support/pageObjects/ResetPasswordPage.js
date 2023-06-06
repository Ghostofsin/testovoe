export class ResetPasswordPage {
  constructor() {
    this.emailInput = "input[name='email']";
    this.submitButton = "button[type='submit']";
  }

  goToResetPassword() {
    cy.contains("Forgot your password?").should("be.visible").click();
    cy.url().should("include", "/reset-password");
  }

  resetPassword(email) {
    cy.get(this.emailInput).should("be.visible").clear().type(email);
    cy.get(this.submitButton).should("be.enabled").click();
  }
}

export const resetPasswordPage = new ResetPasswordPage();
