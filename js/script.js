let counterValue = 0;

const app = document.getElementById ("app");

const counterContainer = document.createElement ("div");
const btnMinus = document.createElement ("button");
const counterValueEl = document.createElement ("span");
const btnPlus = document.createElement ("button");

counterContainer.classList.add("counter");
counterValueEl.classList.add("counter__value");
btnMinus.classList.add("counter__btn");
btnPlus.classList.add("counter__btn");
btnMinus.classList.add("counter__btn--minus");

btnMinus.textContent = "-";
counterValueEl.textContent = counterValue;
btnPlus.textContent = "+";

counterContainer.appendChild (btnMinus);
counterContainer.appendChild (counterValueEl);
counterContainer.appendChild (btnPlus);

app.appendChild (counterContainer);

function updateCounterDisplay () {
  counterValueEl.textContent = counterValue;
}

function increment () {
    counterValue = counterValue + 1;
    updateCounterDisplay ();
}

function decrement () {
    if (counterValue >0) {
        counterValue = counterValue - 1;
        updateCounterDisplay ();
    }
}

btnMinus.addEventListener ("click", decrement);
btnPlus.addEventListener ("click", increment);

