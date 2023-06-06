var openPage = () => {
  cy.visit("/login");
  cy.url().should("include", "/login");
};

describe("View point tests", () => {
  [1024, 1025, 1100].forEach((size) => {
    it("Login form should be located in the left part of screen", () => {
      cy.viewport(size, 750);
      openPage();
      cy.get(".Layout__defaultColumn___yphOS").should("be.visible");
    });
  });

  [1023, 700].forEach((size) => {
    it("Login form should be stretched on full screen", () => {
      cy.viewport(size, 750);
      openPage();
      cy.get(".Layout__defaultColumn___yphOS").should("not.be.visible");
    });
  });
});
