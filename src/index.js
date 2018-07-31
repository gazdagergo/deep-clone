const myObj = {
  name: "Paddy",
  address: {
    town: "Lerum",
    country: "Sweden"
  }
};

function deepClone(obj) {
  Object.keys(obj).map(k => {
    if (typeof obj[k] === "object") {
      deepClone(obj[k]);
    }
    console.log(k);
  });
}

deepClone(myObj);
