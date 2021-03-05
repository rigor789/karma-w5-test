// A sample Jasmine test
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("contains spec with an expectation 2", function() {
    expect(false).toBe(false);
  });

  it("contains spec with an expectation 3", function(done) {
    setTimeout(done, 3000);
  });
});
