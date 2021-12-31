import { checkForURL } from "../js/URLChecker"

describe("Testing the URL checking functionality", () => {
    test("Testing the checkForURL() function is defined", () => {
      
           expect(checkForURL).toBeDefined();
})

test("Testing the checkForURL() function with invalid URL", () => {
      
    expect(checkForURL("notaURL")).toBeFalsy();
})
test("Testing the checkForURL() function with valid URL", () => {
      
    expect(checkForURL("https://en.wikipedia.org/wiki/Buoyancy")).toBeTruthy();
})

});