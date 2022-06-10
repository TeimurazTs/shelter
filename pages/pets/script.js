// create array of 8 random numbers
let thisarray = [];
let thatarray = [];

function createErray() {
  thisarray = [];
  while (thisarray.length !== 8) {
    let num = Math.floor(Math.random() * 10 - 2);
    if (num >= 0 && !thisarray.includes(num)) {
      thisarray.push(num);
    }
  }
}

function createErray2() {
  thatarray = [];
  while (thatarray.length !== 8) {
    let num = Math.floor(Math.random() * 10 - 2);
    if (num >= 0 && !thatarray.includes(num)) {
      thatarray.push(num);
    }
  }
}

let counter = 1;
let evenListenerCout = 1;

let domNotPets = document.querySelectorAll(".dom-not-box");

let domPointerButton = document.querySelector(".dom-pointer-button");
let domPaginationMinus = document.querySelector(".dom-pagination-minus");
let domPaginationCount = document.querySelector(".dom-pagination-button");
let domDoubleArrowPlus = document.querySelector(".dom-double-arrow-plus");
let domDoubleMinus = document.querySelector(".dom-double-minus");

domPaginationMinus.addEventListener("click", () => {
  if (counter < 2) {
    domPaginationMinus.classList.add("arrow-disable");
    domDoubleMinus.classList.add("arrow-disable");
    domPaginationMinus.removeEventListener("click");
  }
  domPointerButton.classList.remove("arrow-disable");
  domDoubleArrowPlus.classList.remove("arrow-disable");
  counter--;
  domPaginationCount.textContent = counter;
  domDoubleArrowPlus.addEventListener("click", doublePlus);
  domDoubleMinus.addEventListener("click", minusFunction);
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
  domPaginationMinus.classList.remove("arrow-disable");
  domDoubleMinus.classList.remove("arrow-disable");
  counter++;
  domDoubleArrowPlus.addEventListener("click", doublePlus);
  domDoubleMinus.addEventListener("click", minusFunction);
  if (counter > 6) {
    counter = 6;
    domPointerButton.classList.add("arrow-disable");
    domDoubleArrowPlus.classList.add("arrow-disable");
    domPointerButton.removeEventListener("click");
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

domDoubleArrowPlus.addEventListener("click", doublePlus);

function doublePlus() {
  counter = 6;
  domPaginationCount.textContent = counter;
  domDoubleMinus.addEventListener("click", minusFunction);
  domPaginationMinus.classList.remove("arrow-disable");
  domDoubleMinus.classList.remove("arrow-disable");
  setTimeout(() => {
    domPointerButton.classList.add("arrow-disable");
    domDoubleArrowPlus.classList.add("arrow-disable");
    domDoubleArrowPlus.removeEventListener("click", doublePlus);
  }, 0);
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
}

domDoubleMinus.addEventListener("click", minusFunction);

function minusFunction() {
  counter = 1;
  domPaginationCount.textContent = counter;
  domPointerButton.classList.remove("arrow-disable");
  domDoubleArrowPlus.classList.remove("arrow-disable");
  domDoubleArrowPlus.addEventListener("click", doublePlus);
  setTimeout(() => {
    domPaginationMinus.classList.add("arrow-disable");
    domDoubleMinus.classList.add("arrow-disable");
    domDoubleMinus.removeEventListener("click", minusFunction);
  }, 0);
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
}
