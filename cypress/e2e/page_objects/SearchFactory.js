import GoogleSearchPage from "./GoogleSearchPage";
import BingSearchPage from "./BingSearchPage";
import YahooSearchPage from "./YahooSearchPage";

/*******************************************************************
  This Factory class is used to create the search page instances.
********************************************************************/
class SearchFactory {
  static getSearchPageInstance(searchEngine) {
    switch (searchEngine.toLowerCase()) {
      case "google":
        return new GoogleSearchPage();
      case "bing":
        return new BingSearchPage();
      case "yahoo":
        return new YahooSearchPage();
      default:
        throw new Error("Invalid search engine!");
    }
  }
}

export default SearchFactory;
