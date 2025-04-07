describe("Purchase Flow", () => {
  beforeEach(() => {
    cy.fixture("users").then((users) => {
      cy.login(users.standard_user.username, users.standard_user.password);
    });
  });

  it("should complete a purchase with two products", () => {
    // Sort by Price (low to high)
    cy.get(".product_sort_container").select("lohi");

    // Add the last product to the cart
    cy.get(".inventory_item").last().find(".btn_inventory").click();

    // Sort by Name (A to Z)
    cy.get(".product_sort_container").select("az");

    // Add the top-right product to the cart (first item in the grid)
    cy.addToCartByIndex(0);

    // Proceed to checkout
    cy.proceedToCheckout();

    // Fill out customer details
    cy.fillCheckoutForm("John", "Doe", "12345");

    // Verify items in the checkout overview
    cy.get(".cart_item").should("have.length", 2);
    cy.get(".cart_item")
      .eq(0)
      .find(".inventory_item_name")
      .invoke("text")
      .then((firstItem) => {
        cy.get(".cart_item")
          .eq(1)
          .find(".inventory_item_name")
          .invoke("text")
          .then((secondItem) => {
            expect([firstItem, secondItem]).to.include.members([
              "Sauce Labs Fleece Jacket",
              "Sauce Labs Backpack",
            ]);
          });
      });

    // Complete the purchase
    cy.get("#finish").click();

    // Verify purchase success
    cy.get(".complete-header").should(
      "contain",
      "Thank you for your order!"
    );
  });
});