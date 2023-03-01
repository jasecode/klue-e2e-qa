Cypress.Commands.add('searchBlog', (query) => {
    cy.get('input#search')
    .type(query)
    .get('input.image')
    .click()
})
