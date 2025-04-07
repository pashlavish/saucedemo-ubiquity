describe("Smoke Tests", () => {
  beforeEach(() => {
    cy.fixture("users").then((users) => {
      cy.login(users.standard_user.username, users.standard_user.password);
    });
  });

  it("should verify inventory page loads correctly", () => {
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").should("have.length.at.least", 6);
  });

  it("should verify cart is accessible", () => {
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".cart_list").should("be.visible");
  });

  it("should verify logout functionality", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
    cy.url().should("eq", "https://www.saucedemo.com/");
  });
});