
describe('Page Load test', () => {
	it('should visit the app and check for content', () => {
		cy.visit('/');
		cy.contains('Trendy Store');

		cy.visit('/electronics');
		cy.contains('Trendy Store');

		cy.visit('/product/1');
		cy.contains('Trendy Store');

		cy.visit('/cart');
		cy.contains('Your Shopping Cart');
	});
});
