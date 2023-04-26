class SearchPage {
  /***************************************
      default constructor that creates a 
      new instance of the class and sets 
      the default values
  ***************************************/
    constructor() {
      this.url = null;
      this.searchInput = null;
      this.searchButton = null;
      this.resultLink = null;
    }
  /***************************************
      utility methods
      - visit(): visits the page
      - search(term): searches the page for the term
      - getResultLink(): returns the result link
      - getUrlLink(): returns the url of the page
  ***************************************/
    visit() {
      cy.visit(this.url)
    }
    search(term) {
      cy.get(this.searchInput).type(term);
      cy.get(this.searchButton).first().submit();
    }
    getResultLink() {
      return cy.get(this.resultLink)
      .find('a')
      .first()
      .should('have.attr', 'href');
    }
    getUrlLink() {
      return cy.url();
    }
  } // end class SearchPage
  /************************************
        exports the SearchPage class
  ************************************/
  export default SearchPage;
  