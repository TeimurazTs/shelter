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
    console.log(e);
    // if (e.target.localName === "p") {
    //   e.target = e.target.parentElement.children[0];
    // }
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
        document.body.style.overflow = "hidden";
        let domMain = document.createElement("main");
        domMain.classList.add("dom-main-popup");
        domMain.style.top = window.scrollY + "px";
        document.body.append(domMain);

        let domDiv = document.createElement("div");
        domDiv.classList.add("dom-div-popup");
        domMain.append(domDiv);

        let closeDiv = document.createElement("div");
        closeDiv.classList.add("closeDiv");
        let closeDivP = document.createElement("p");
        closeDiv.addEventListener("click", () => {
          document.body.style.overflow = "visible";
          document.body.removeChild(domMain);
        });

        closeDivP.textContent = "x";
        closeDiv.append(closeDivP);
        domDiv.append(closeDiv);

        if (window.screen.availWidth > 766) {
          let domImg = document.createElement("img");
          domImg.setAttribute(
            "src",
            `${e.target.parentElement.children[0].attributes.src.nodeValue}`
          );
          domDiv.append(domImg);
        }

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
        domli4.textContent = "parasites: " + data[count].parasites;
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
