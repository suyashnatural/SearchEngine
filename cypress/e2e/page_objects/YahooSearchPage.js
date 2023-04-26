import SearchPage from "./SearchPage";

class YahooSearchPage extends SearchPage {
  /***************************************************
    This class inherits SearchPage.
    It is used to navigate to the Yahoo search page.
    And sets the yahoo search locators and attributes.
  ***************************************************/
  constructor() {
    super();
    this.url = "https://www.yahoo.com";
    this.searchInput = '#ybar-sbq';
    this.searchButton = 'form';
    this.resultLink = '#web';
  }
}
export default YahooSearchPage;
