function createAdd() {
  let sum = 0;

  function add(...numbers) {
    sum += numbers.reduce((a, b) => a + b, 0);
    return add;
  }

  add.valueOf = function () {
    return sum;
  };

  return add;
}

const add = createAdd();

console.log(+add(1)(2)(3));
console.log(add(1, 2, 3, 4).valueOf());

// Calculator Below is without Closure implementation

// function createAdd() {
//   return function add(...numbers) {
//     let sum = numbers.reduce((a, b) => a + b, 0);

//     add.valueOf = function () {
//       return sum;
//     };

//     return add;
//   };
// }

// const add = createAdd();

// console.log(+add(1)(2)(3));
// console.log(+add(1));

// Array filter prototype method is implemented below

Array.prototype.MyFilter = function (callback, thisArg) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const arr = [1, 2, 3, 4, 5];

const filteredArr = arr.MyFilter((el) => el > 2);

console.log(filteredArr);

// window alert prompt and confirm H/A
const originalAlert = window.alert;
const originalPrompt = window.prompt;
const originalConfirm = window.confirm;

window.alert = function () {
  originalConfirm("triggered by alert");
};

window.prompt = function () {
  originalAlert("triggered by prompt");
};

window.confirm = function () {
  return originalPrompt("triggered by Confirm");
};

window.alert();
window.prompt();
window.confirm();
