const button = document.getElementById("blue");
const form = document.querySelector(".party-form");
const party = document.querySelector(".party");
//First
button.addEventListener("click", () => {
  document.body.style.backgroundColor = "#00FF00";
});

//Second
const appendToPage = function (a, b, c, d) {
  return `${a}, will act as the Warrior.</br>
  ${b}, will act as the Mage.</br>
  ${c}, will act as the Cleric.</br>
  ${d}, will act as the Wizard.</br>
  `;
};

form.addEventListener("submit", (event) => {
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
