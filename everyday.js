const button = document.getElementById("blue");

//First
button.addEventListener("click", () => {
  document.body.style.backgroundColor = "#00FF00";
});

//Second
const partyForm = document.querySelector(".party-form");
const party = document.querySelector(".party");

const appendToPage = function (a, b, c, d) {
  return `${a}, will act as the Warrior.</br>
  ${b}, will act as the Mage.</br>
  ${c}, will act as the Cleric.</br>
  ${d}, will act as the Wizard.</br>
  `;
};

partyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let warrior = event.target.warrior.value;
  let mage = event.target.mage.value;
  let cleric = event.target.cleric.value;
  let wizard = event.target.wizard.value;
  if (warrior && mage && cleric && wizard != "") {
    party.innerHTML += appendToPage(warrior, mage, cleric, wizard);
  } else {
    return (party.innerText += "All job spaces must be occupied to continue");
  }
});

party.addEventListener(
  "mouseover",
  (event) => {
    // debugger
    event.target.style.backgroundColor = "#6F8FAF";
    setTimeout(function () {
      event.target.style.backgroundColor = "";
    }, 500);
  },
  false
);

//three
let i = 0;
const txt = "Lorem ipsum typing effect!"; /* The text */
const speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("cursor").innerHTML += txt.charAt(i);
    i++;
    // debugger
    setTimeout(typeWriter, speed);
  }
}
// Four
let changeIt = function () {
  const colors = ["red", "magenta", "blue", "yellow"];
  let random = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("color").style.backgroundColor = random;
};

//Five
//select the numbers, and be able to take whatever numbers in the inputs and give the proper total. in this case the sum of the numbers.
const mathForm = document.getElementById("math-form");
let totalSection = document.getElementById("total-section");

mathForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let addBtn = document.getElementById("add");

  let seeIfClicked = function () {
    addBtn.clicked;
  };
  if (num1 && num2 && seeIfClicked()) {
    debugger;
    totalSection.innerText += `The total is:` + addItUp(num1, num2);
  }
});

const addItUp = (num1, num2) => num1 + num2;
const whatsTheProduct = (num1, num2) => num1 * num2;

//six
