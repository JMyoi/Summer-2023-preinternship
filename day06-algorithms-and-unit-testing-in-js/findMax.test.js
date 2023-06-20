const findMax = require("./findMax");

describe('findMax function returns the maximum number in an array', () => {
    test("findMax([]) => null", () => {
      expect(findMax([])).toEqual(null);
    })
    test("findMax[1] => 1", ()=>{
        expect(findMax([1])).toEqual(1);
    })
    test("findMax[1,2,3,4,5] => 5", ()=>{
        expect(findMax([1,2,3,4,5])).toEqual(5);
    })
  })