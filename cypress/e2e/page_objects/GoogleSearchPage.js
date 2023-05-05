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
    this.tools = '#hdtb-tls';
    this.anyTime = "div[class='hdtb-mn-hd Yg3U7e'] div[class='KTBKoe']";
  }
}
export default GoogleSearchPage;
