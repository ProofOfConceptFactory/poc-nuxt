describe('hello from nuxt', () => {
    it('check h1 contains Hello from Nuxt', () => {
        cy.visit('/')
        cy.contains('h1', 'Hello from Nuxt!👋')
    })
})
