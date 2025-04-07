describe("Login Flow and Footer Header Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should prevent locked_out_user from logging in", () => {
    cy.fixture("users").then((users) => {
      cy.login(users.locked_out_user.username, users.locked_out_user.password);
      cy.get(".error-message-container").should(
        "contain",
        "Epic sadface: Sorry, this user has been locked out."
      );
    });
  });

  it("should allow standard_user to log in and verify correct key elements in footer and header", () => {
    cy.fixture("users").then((users) => {
      cy.login(users.standard_user.username, users.standard_user.password);
      cy.url().should("include", "/inventory.html");
      cy.get(".app_logo").should("be.visible");
      cy.get(".shopping_cart_link").should("be.visible");
      cy.get("#react-burger-menu-btn").should("be.visible");
      cy.get(".footer_copy").should(
        "contain",
        "© 2025 Sauce Labs. All Rights Reserved."
      );
      cy.get(".social_twitter").should("be.visible");
      cy.get(".social_facebook").should("be.visible");
      cy.get(".social_linkedin").should("be.visible");
    });
  });

});