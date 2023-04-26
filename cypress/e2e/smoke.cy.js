import SearchFactory from "./page_objects/SearchFactory";
import smokedata from "../../cypress/fixtures/smokedata.json";


/**************************************************************************
    This is a smoke test suite for the search page
    This test suites executes the happy path tests
**************************************************************************/
describe("Smoke Test Suite", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.wait(500);
  });
  it("should return the expected result", () => {
    smokedata.forEach((smokeData) => {
      cy.log(`Searching "${smokeData.searchterm}" in ${smokeData.searchengine}`)
      const searchPage = SearchFactory.getSearchPageInstance(smokeData.searchengine);
      searchPage.visit();
      searchPage.search(smokeData.searchterm);
      searchPage.getResultLink().should("contain", smokeData.expectedtext.toLowerCase());
    })
  });
});
