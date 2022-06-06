let thisarray = [];
let thatarray = [];
// let counter = 0;

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
console.log(domNotPets);

let domPointerButton = document.querySelector(".dom-pointer-button");

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
  for (let i = 0; i < 8; i++) {
    domNotPets[i].children[0].setAttribute(
      "src",
      `${petsObject[thisarray[i]].img}`
    );
    domNotPets[i].children[1].textContent = petsObject[thatarray[i]].name;
  }
}
