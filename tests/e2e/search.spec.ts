describe('Search', () => {
	beforeEach(() => {
      cy.visit('/')
		cy.get('[data-testid="search-input"]').as('searchInput');
		cy.get('[data-testid="product-card"]').as('productCard');
		cy.get('[data-testid="products-container"]').as('productsContainer');
	});

	it('can enter query', () => {
		cy.get('@searchInput').should('be.visible');
		cy.get('@searchInput').focus().type('men');
	});

	it('can filter search results', () => {
		cy.get('@searchInput').focus().type('men');
		cy.get('@productCard').should('have.length.at.least', 1);
	});

	it('can see no results message', () => {
		cy.get('@searchInput').focus().type('xyz');
		cy.wait(1000);
		cy.contains('No Results Found');
	});
});
