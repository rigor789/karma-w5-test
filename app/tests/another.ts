// import { foo } from '../app'

function foo() {
  return 'Hello World!'
}

// A sample Jasmine test
describe("B suite", function() {
  it("works with multiple files", function() {
    expect(foo()).toBe('Hello World!');
  });
});
