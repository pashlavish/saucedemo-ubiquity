# Saucedemo E2E Test Suite

This project contains end-to-end (E2E) tests for the [saucedemo.com](https://www.saucedemo.com) website using [Cypress](https://www.cypress.io/).

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Setup

1. Clone the repository or create a new project directory:

   ```bash
   mkdir saucedemo-ubiquity && cd saucedemo-ubiquity

### Explanation of the Solution

**Framework Choice**: I used Cypress because it’s JavaScript-based, aligns with your preference, and is well-suited for E2E testing with a simple API and built-in assertions.

1. **Login Flow**:
   - Tests both `locked_out_user` (should fail with an error) and `standard_user` (should succeed and redirect to the inventory page).
   - Uses a custom `login` command to reduce code duplication.
   - Verifies key elements like the logo, cart link, menu button, copyright notice, and social media links.
2. **Purchase Flow**:
   - Follows the exact steps: sorting by price, adding the last product, sorting by name, adding the top-right product, and completing checkout.
   - Verifies cart contents before finishing the purchase and checks the success message.
3. **Smoke Tests (Bonus)**:
   - Added tests for inventory page load, cart accessibility, and logout functionality to ensure critical paths work.
4. **README**:
   - Provides clear instructions for setup, running tests, and understanding the test suite.
5. **Best Practices**:
   - Used fixtures for test data.
   - Created custom commands for reusability.
   - Organized tests into separate files for clarity.
   - Included assertions for all critical steps.
