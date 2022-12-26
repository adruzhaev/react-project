describe('Search for Transformers movie', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('input').type('Transformers 7')
    cy.get('button[id="searchButton"]').click()
    cy.get('button[id="Transformers 7"]').click()
    cy.url().should('include', '/search?movie=424785')
  })
})
