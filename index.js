function getRandomNumber(min, max) {
   return min + Math.floor((max - min) * Math.random());
};

function getNumberWithUnits(number, units) {
   return number + units;
};

function insertValue(value, placeID) {
   let place = document.getElementById(placeID);
   place.innerText = value;
};

function moveButton() {
   let buttonWidth = button.offsetWidth;
   let buttonHeight = button.offsetHeight;

   let leftRandom = getRandomNumber(0, button.parentElement.offsetWidth - buttonWidth);
   let topRandom = getRandomNumber(0, button.parentElement.offsetHeight - buttonHeight);

   button.style.marginLeft = getNumberWithUnits(leftRandom, "px");
   button.style.marginTop = getNumberWithUnits(topRandom, "px");
};

let button = document.getElementById("the-button");

let counter = 0;

button.addEventListener("click", function() {
   counter++;

   moveButton();

   insertValue(counter, "score");
});

button.addEventListener("pointerover", function() {
   if(timeLimit > 0){
      moveButton();
   }
});

let timeLimit = 10;

let intervalID = setInterval(function() {
   timeLimit--;

   if (timeLimit === 0) {
      clearInterval(intervalID);
      button.disabled = true;
   }

   insertValue(timeLimit, "time");
}, 1000);

setTimeout(() => {
   if(timeLimit === 0 && counter === 0){
      alert("Time is up. You are not good at this game... :(");
   }
}, 10000);
