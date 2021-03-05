import { foo } from '../main-page'

// A sample Jasmine test
describe("B suite", function() {
  it("works with multiple files", function() {
    expect(foo()).toBe('Hello World!');
  });
});
