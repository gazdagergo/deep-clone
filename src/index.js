const myObj = {
  name: "Paddy",
  address: {
    town: "Lerum",
    country: "Sweden",
    buildings: [34, { floor: 5 }]
  },
  badges: ["foo", { b1: "bar" }]
};

function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

function deepClone(obj, isArr = false) {
  var newObject = {};
  if (isArr) newObject = [];
  Object.keys(obj).map(k => {
    if (typeof obj[k] === "object") {
      if (isArray(obj[k])) {
        Object.assign(newObject, { [k]: deepClone(obj[k], true) });
      } else {
        Object.assign(newObject, { [k]: deepClone(obj[k]) });
      }
    } else {
      Object.assign(newObject, { [k]: obj[k] });
    }
  });
  return newObject;
}

var n = deepClone(myObj);
console.log(myObj);
console.log(n);
