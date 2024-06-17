describe('Add to Cart', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('[data-testid="add-to-cart"]').as('addToCartBtn');
		cy.get('[data-testid="product-card"]').as('productCard');

		cy.contains('Popular Picks');

		// Adding a item to cart
		cy.get('@addToCartBtn').first().click();
		cy.visit('/cart');
	});

	it('can add products to cart', () => {
		cy.contains('Your Shopping Cart');
		cy.get('@productCard').should('have.length.at.least', 1);
	});

	it('can remove products from cart', () => {
		cy.get('button').contains('Remove from Cart').click();
		cy.contains('No Products Found');
	});
});
