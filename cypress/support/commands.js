Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

Cypress.Commands.add("addToCartByIndex", (index) => {
  cy.get(".inventory_item").eq(index).find(".btn_inventory").click();
});

Cypress.Commands.add("proceedToCheckout", () => {
  cy.get(".shopping_cart_link").click();
  cy.get("#checkout").click();
});

Cypress.Commands.add("fillCheckoutForm", (firstName, lastName, postalCode) => {
  cy.get("#first-name").type(firstName);
  cy.get("#last-name").type(lastName);
  cy.get("#postal-code").type(postalCode);
  cy.get("#continue").click();
});