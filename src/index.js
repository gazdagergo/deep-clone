function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

function deepClone(obj) {
  if (typeof obj !== "object") return obj;
  if (isArray(obj)) {
    var newArray = [];
    obj.forEach(item => {
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
        Object.assign(newObject, { [k]: deepClone(obj[k]) });
      } else {
        Object.assign(newObject, { [k]: obj[k] });
      }
    });
    return newObject;
  }
}

module.exports = deepClone;
