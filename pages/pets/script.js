let thisarray = [];
let thatarray = [];
let counter = 1;
let evenListenerCout = 1;

function createErray2() {
  thatarray = [];
  while (thatarray.length !== 8) {
    let num = Math.floor(Math.random() * 10 - 2);
    if (num >= 0 && !thatarray.includes(num)) {
      thatarray.push(num);
    }
  }
}

function createErray() {
  thisarray = [];
  while (thisarray.length !== 8) {
    let num = Math.floor(Math.random() * 10 - 2);
    if (num >= 0 && !thisarray.includes(num)) {
      thisarray.push(num);
    }
  }
}

let domNotPets = document.querySelectorAll(".dom-not-box");

let domPointerButton = document.querySelector(".dom-pointer-button");
let domPaginationMinus = document.querySelector(".dom-pagination-minus");
let domPaginationCount = document.querySelector(".dom-pagination-button");
let domDoubleArrowPlus = document.querySelector(".dom-double-arrow-plus");
let domDoubleMinus = document.querySelector(".dom-double-minus");

domPaginationMinus.addEventListener("click", () => {
  if (counter < 2) {
    domPaginationMinus.removeEventListener();
  }
  counter--;
  domPaginationCount.textContent = counter;
  fetch("../Pets.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createErray();
      createErray2();
      for (let i = 0; i < 8; i++) {
        domNotPets[i].children[0].setAttribute(
          "src",
          `${data[thisarray[i]].img}`
        );
        domNotPets[i].children[1].textContent = data[thatarray[i]].name;
      }
    });
  if (evenListenerCout === 0) {
    evenListenerCout = 1;
    domPointerButton.addEventListener("click", () => {
      fetch("../Pets.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          pagination(data);
        });
    });
  }
});

domPointerButton.addEventListener("click", () => {
  fetch("../Pets.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      pagination(data);
    });
});

function pagination(petsObject) {
  createErray();
  createErray2();
  counter++;
  if (counter > 6) {
    counter = 6;
    domPointerButton.removeEventListener();
    evenListenerCout = 0;
  }
  domPaginationCount.textContent = counter;
  for (let i = 0; i < 8; i++) {
    domNotPets[i].children[0].setAttribute(
      "src",
      `${petsObject[thisarray[i]].img}`
    );
    domNotPets[i].children[1].textContent = petsObject[thatarray[i]].name;
  }
}

domDoubleArrowPlus.addEventListener("click", () => {
  counter = 6;
  domPaginationCount.textContent = counter;
  if (counter > 6) {
    domDoubleArrowPlus.removeEventListener();
  }
  fetch("../Pets.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createErray();
      createErray2();
      for (let i = 0; i < 8; i++) {
        domNotPets[i].children[0].setAttribute(
          "src",
          `${data[thisarray[i]].img}`
        );
        domNotPets[i].children[1].textContent = data[thatarray[i]].name;
      }
    })
});

domDoubleMinus.addEventListener("click", () => {
  counter = 1;
  domPaginationCount.textContent = counter;
  fetch("../Pets.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createErray();
      createErray2();
      for (let i = 0; i < 8; i++) {
        domNotPets[i].children[0].setAttribute(
          "src",
          `${data[thisarray[i]].img}`
        );
        domNotPets[i].children[1].textContent = data[thatarray[i]].name;
      }
    });
});
