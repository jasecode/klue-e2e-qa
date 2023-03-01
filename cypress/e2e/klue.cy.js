// Basic actions:
// 1. Go to https://www.google.com/ and search “Klue”
// 2. Click the first Ad - https://www.klue.com/ to go to klue website
// 3. Click “BLOG” option from the top and go to blog page
// 4. Use the blog search to find “growing” and make sure “Klue Named One of the
// Fastest-Growing Companies in Deloitte Technology Fast 50” blog appears
// 5. Go to “Klue Named One of the Fastest-Growing Companies in Deloitte Technology Fast
// 50” blog and make sure “Deloitte’s Fast 50 List” section appears
// 6. Go back to Blog via the bottom navigation bar “Blog > News”


describe('Klue Blog', () => {
    let blogTitleText = "Klue Named One of the Fastest-Growing Companies in Deloitte Technology Fast 50™"
    let blogSectionText = "Deloitte’s Fast 50 List"


    before(() => {
        // Ads for Google - Don't show up every single time
        cy.visit('https://www.google.com/search?q=klue')
        // cy.get('[data-text-ad="1"] [data-pcu="https://klue.com/"]').click()
        cy.get('a[href="https://klue.com/"]').click()
    })

    it('can verify Klues top blog contains its most important section section', () => {
        // Hover over navigation
        cy.get('#menu-super-nav #menu-item-18752').trigger('mouseover')
        cy.get('#menu-super-nav-1 a[href="https://klue.com/blog"]').click()

        cy.searchBlog('growing')

        cy.findByText(blogTitleText).should('be.visible')

        // Alternatively use xPath instead: 
        // xPath for 'Learn More'
        // Look something like: "//h3[contains(text(),'Deloitte Technology Fast 50')]//..//..//*[text()='Learn More']"
        cy.contains(blogTitleText)
           .parent()
           .parent()
           .find('.newbutton')
           .click()
        
        cy.findByText(blogSectionText).should('exist')
        cy.get('#breadcrumbs [href="/blog"]').click()
        cy.url().should('contain', '/blog')
        cy.get('h1').should('be.visible')
    })
})