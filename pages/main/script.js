alert('Hello, I still have some work to do. Could you check my task later?')

// header stuff
let burger = document.querySelector(".dom-burger");
let menu = document.querySelector(".dom-main-header");

burger.addEventListener("click", () => {
  burger.classList.toggle("dom-rotate");
  if (burger.classList[2] === "dom-rotate") {
    disableScroll();
  } else {
    enableScroll();
  }
  menu.classList.toggle("dom-display-none");
});

// carousel stuff

let arrowLeft = document.querySelector(".dom-arrow-left");
let arrowRight = document.querySelector(".dom-arrow-right");
let petBox = document.querySelectorAll(".dom-pets-box");

// scrol disable stuff

function disableScroll() {
  window.onscroll = function () {
    window.scrollTo(window.pageYOffset, window.pageXOffset);
  };
}
function enableScroll() {
  window.onscroll = function () {};
}

// navigation listeners

let navLi = document.querySelectorAll(".dom-nav-event");
for (let i = 0; i < 3; i++) {
  navLi[i].addEventListener("click", () => {
    burger.classList.toggle("dom-rotate");
    if (burger.classList[2] === "dom-rotate") {
      disableScroll();
    } else {
      enableScroll();
    }
    menu.classList.toggle("dom-display-none");
  });
}

// carousel stuff

for (let i = 0; i < petBox.length; i++) {
  petBox[i].addEventListener("click", (e) => {
    let count = 0;
    fetch("../Pets.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        while (
          e.target.parentElement.children[1].textContent !== data[count].name
        ) {
          count++;
        }
        let domMain = document.createElement("main");
        domMain.classList.add("dom-main-popup");
        document.body.append(domMain);

        let domDiv = document.createElement("div");
        domDiv.classList.add("dom-div-popup");
        domMain.append(domDiv);

        let domImg = document.createElement("img");
        domImg.setAttribute("src", `${data[count].img}`);
        domDiv.append(domImg);

        let domDivChild = document.createElement("div");
        domDivChild.classList.add("dom-div-child");
        domDiv.append(domDivChild);

        let domPF = document.createElement("p");
        domPF.classList.add("dom-p-f");
        domPF.textContent = data[count].name;
        domDivChild.append(domPF);

        let domPS = document.createElement("p");
        domPS.classList.add("dom-p-s");
        domPS.textContent = data[count].type + " - " + data[count].breed;
        domDivChild.append(domPS);

        let domPT = document.createElement("p");
        domPT.classList.add("dom-p-t");
        domPT.textContent = data[count].description;
        domDivChild.append(domPT);

        let domUl = document.createElement("ul");
        domUl.classList.add("dom-ul");
        domDivChild.append(domUl);

        let domli1 = document.createElement("li");
        domli1.classList.add("dom-li");
        domli1.innerHTML = "Age: " + data[count].age;
        domDivChild.append(domli1);

        let domli2 = document.createElement("li");
        domli2.classList.add("dom-li");
        domli2.textContent = "Inoculations: " + data[count].inoculations;
        domDivChild.append(domli2);

        let domli3 = document.createElement("li");
        domli3.classList.add("dom-li");
        domli3.textContent = "Diseases: " + data[count].diseases;
        domDivChild.append(domli3);

        let domli4 = document.createElement("li");
        domli4.classList.add("dom-li");
        domli4.textContent = "Diseases: " + data[count].diseases;
        domDivChild.append(domli4);
      });
  });
}

let count = 0;

function createPets(petsData) {
  if (window.screen.availWidth >= 1280) {
    for (let i = 0; i < petBox.length; i++) {
      if (count > 7) {
        count = 0;
      }
      petBox[i].children[0].setAttribute("src", `${petsData[count].img}`);
      petBox[i].children[1].textContent = petsData[count].name;
      count++;
    }
  }

  if (window.screen.availWidth >= 768 && window.screen.availWidth <= 1280) {
    for (let i = 0; i < 2; i++) {
      if (count > 7) {
        count = 0;
      }
      petBox[i].children[0].setAttribute("src", `${petsData[count].img}`);
      petBox[i].children[1].textContent = petsData[count].name;
      count++;
    }
  }

  if (window.screen.availWidth <= 768) {
    for (let i = 0; i < 1; i++) {
      if (count > 7) {
        count = 0;
      }
      petBox[i].children[0].setAttribute("src", `${petsData[count].img}`);
      petBox[i].children[1].textContent = petsData[count].name;
      count++;
    }
  }
}

arrowLeft.addEventListener("click", () => {
  fetch("../Pets.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createPets(data);
    });
});

arrowRight.addEventListener("click", () => {
  fetch("../Pets.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createPets(data);
    });
});
