# Angular Task

The app called Shopping cart app.
We provide a few components to build a simple shop with a cart system.
The main goal is to fix a few issues across comonents and implement add and remove products to you cart.
 

---

## Your Task

This is a TDD (test driven development) task. 
Your task is to fix a few issues across the app and to add few features and pass the tests. 
It may look scary at first but carry on!

### 1. Products List Component
- Some products do not have a proper template rendering to fix it, consider the following:
    * Make sure the 'default' template is used if the product type has no template provided.
    * If a custom 'default' template is provided, make sure it overrides the 'default' template of the component. 

### 2. Cart Service
- At first, the view only updates when the user interacts with it, to fix this consider the following:
    * Make sure cartState is emiting updates upon subscribing.
    * There are some items already added in the cart. Make sure to display them when open the page
- Implement addProduct, consider the following rules:
    * _cardState should to be updated.
    * Product should be pushed to items Array inside _products.
    * If adding a product that is already in the cart, the product amount should increase instead of adding a new record.
    * Product subtotal should be calculated based of the product amount.
        * EX: PRODUCT_A -> Price: 500 -> Amount: 2 -> Subtotal should be 1000
        * subtotal = price * amount (see calculateSubtotal method already implemented)
     * Cart total price should be calculated based of the subtotals.
        * EX: PRODUCT_A -> Subtotal 1000 + PRODUCT_B -> Subtotal: 750 -> Total price should be 1750.
        * total = sum of all subtotals (see calculateTotal method already implemented) 
- Implement removeProduct, consider the following rules:
    * _cardState should be updated.
    * Product should be removed from items Array inside _products.
    * If removing a product that was added more than once, the product amount should decrease instead of removing the whole.
    * Subtotal and total should be re-calculated accordingly.

### 3. Cart item control 
- Has a potential memory leak.
- Sorting and filtering products leave dangling subscriptions in cart control component.
- Make sure components unsubscribe when they get destroyed. (You can also use async pipe)

### 4. CSS Theming
- The application is using the bootstrap classes, however they are not being applied.
    * Configure the application to use the bootstrap CSS.

### 5. [BONUS] Unit tests
- The application has some unit tests to help you checkout if everything is working correctly. There are also unit tests which are broken
    * Make sure the unit tests are passing and working correctly

---

Follow the steps above to achieve completion! Feel free to use any of the angular features.
New features in the app are welcome and appreciated.

## If you downloaded the project, make sure to delete node_modules before zipping and uploading it back.

# Setup

1. `npm install` to get dependencies
2. Start app with `npm run start` and point webbrowser to `http://localhost:4200/`
3. Use `npm run test:watch` to see tests failing
4. Fix issues so that tests pass
5. Solve all issues mentioned here
6. Submit your code on Devskiller platform to see if task is completed

# Good Luck!
