var deepClone = require("./index");

var testObjects = {
  simpleObject: { foo: "bar" },
  nestedObject: {
    name: "Paddy",
    address: { town: "Lerum", country: "Sweden" }
  },
  nestedObjectWithArray: {
    name: "Paddy",
    address: {
      town: "Lerum",
      country: "Sweden",
      buildings: [34, { floor: 5 }]
    },
    badges: ["foo", { b1: "bar" }]
  },
  arrayWithObject: ["foo", { bar: { foo: "bar" } }],
  emptyArray: [],
  emptyObject: {},
  deepNestedObject: { a: { a: { a: {} } } },
  nestedEmptyArray: [[[]]]
};

Object.keys(testObjects).forEach(key => {
  it(key, () => {
    var object = testObjects[key];
    expect(object).toMatchObject(deepClone(object));
    expect(object).not.toBe(deepClone(object));
  });
});

it("works with primitive too", () => {
  var primitive = "abc";
  expect(primitive).toBe(deepClone(primitive));
});
