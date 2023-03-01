
class homePage {
    // XPath Equivalent - //*[@id='menu-super-nav']//*[text()="Resources"]
    get menuResourcesButton() {return cy.get('#menu-super-nav #menu-item-18752')}
    get subMenuBlogLink() {return cy.get('#menu-super-nav-1 a[href="https://klue.com/blog"]')}

    goToBlogFromMenu(){
        // Hover over navigation
        this.menuResourcesButton.trigger('mouseover')
        this.subMenuBlogLink.click()
    }
}

module.exports = new homePage();