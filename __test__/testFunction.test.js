const isInteger= (value)=>!isNaN(parseInt(value, 10));

const integerNumbers = [
    [-1, true],
    [-0, true],
    [1, true]
  ];
  
  test.each(integerNumbers)(
      "isInteger passes for integer value %j with result %j",
      (fixture, result) => expect(isInteger(fixture)).toBe(result)
  );