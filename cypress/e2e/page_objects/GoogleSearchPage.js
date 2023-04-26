import SearchPage from "./SearchPage";

class GoogleSearchPage extends SearchPage {
  /***************************************************
    This class inherits SearchPage.
    It is used to navigate to the Google search page.
    And sets the google search locators and attributes.
  ***************************************************/
  constructor() {
    super();
    this.url = "https://www.google.com";
    this.searchInput = '#APjFqb';
    this.searchButton = 'form';
    this.resultLink = '#search';
  }
}
export default GoogleSearchPage;
