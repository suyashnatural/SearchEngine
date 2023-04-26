import SearchFactory from "./page_objects/SearchFactory";
import regressiondata from "../../cypress/fixtures/regressiondata.json";
import negativeregressiondata from "../../cypress/fixtures/negativeregressiondata.json";

/**************************************************************************
    This is a regression test suite for the search page
    This test suites executes the happy path and negative path tests
**************************************************************************/

describe("Regression Test Suite", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.wait(500);
  });
  it("should return the expected result in all search engines", () => {
      regressiondata.forEach((searchEngine) => {
        cy.log(`Searching "${searchEngine.searchTerm}" in ${searchEngine.engine}`)
        const searchPage = SearchFactory.getSearchPageInstance(searchEngine.engine);
        searchPage.visit(searchEngine.url)
        searchPage.search(searchEngine.searchTerm);
        searchPage.getResultLink().should("contain", searchEngine.expectedText.toLowerCase());
      })
  });
  it("should not return the expected result in the search engines", () => {
    negativeregressiondata.forEach((data) => {
      cy.log(`Searching "${data.searchTerm}" in ${data.engine}`)
      const searchPage = SearchFactory.getSearchPageInstance(data.engine);
      searchPage.visit(data.url)
      searchPage.search(data.searchTerm);
      if(!data.searchTerm) { // undefined search term
        searchPage.getUrlLink().should("not.contain", data.expectedText.toLowerCase());
      } else {
        searchPage.getResultLink().should("not.contain", data.expectedText.toLowerCase());
      }
    })
});
});
