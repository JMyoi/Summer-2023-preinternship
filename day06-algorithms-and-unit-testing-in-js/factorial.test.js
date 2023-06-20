const factorial = require("./factorial");

describe("factorial(n) returns the factorial of n", () => {
  test("factorial(0) => 1", () => {
    expect(factorial(0)).toEqual(1);
  })
  test("factorial(1) => 1", () =>{
    expect (factorial(1)).toEqual(1);
  })
  test("factorial(2) => 2", ()=>{
    expect(factorial(2)).toEqual(2);
  })
  test("factorial(4) => 24",()=>{
    expect(factorial(4)).toEqual(24);
  })
})