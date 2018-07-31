const myObj = {
  name: "Paddy",
  address: {
    town: "Lerum",
    country: "Sweden",
    buildings: [34, { floor: 5 }]
  },
  badges: ["foo", { b1: "bar" }]
};

const myArr = ["foo", { bar: { foo: "bar" } }];

function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

function deepClone(obj) {
  if (isArray(obj)) {
    var newArray = [];
    obj.map(item => {
      if (typeof item === "object") {
        newArray.push(deepClone(item));
      } else {
        newArray.push(item);
      }
    });
    return newArray;
  } else {
    var newObject = {};
    Object.keys(obj).forEach(k => {
      if (typeof obj[k] === "object") {
        Object.assign(newObject, { [k]: deepClone(obj[k], true) });
      } else {
        Object.assign(newObject, { [k]: obj[k] });
      }
    });
    return newObject;
  }
}

var n = deepClone(myObj);
console.log(myObj);
console.log(n);

var a = deepClone(myArr);
console.log(myArr);
console.log(a);
