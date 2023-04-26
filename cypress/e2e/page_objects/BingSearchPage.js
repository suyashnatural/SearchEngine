import SearchPage from "./SearchPage";

class BingSearchPage extends SearchPage {
  /***************************************************
    This class inherits SearchPage.
    It is used to navigate to the Bing search page.
    And sets the bing search locators and attributes.
  ***************************************************/
  constructor() {
    super();
    this.url = "https://www.bing.com";
    this.searchInput = '#sb_form_q';
    this.searchButton = 'form';
    this.resultLink = '#b_results';
  }
}
export default BingSearchPage;
