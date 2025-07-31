const add1 = document.querySelector(".add1");
const add2 = document.querySelector(".add2");
const totalPr = document.querySelector(".total");

const amnt1 = parseInt(document.querySelector(".amnt1").innerText);
const amnt2 = parseInt(document.querySelector(".amnt2").innerText);

let counter1 = 0;
let counter2 = 0;

function updateTotal() {
    const total = counter1 * amnt1 + counter2 * amnt2;
    totalPr.innerHTML = `<span>₹</span>${total}`;
}

function bindAdd1Buttons() {
    const incr = add1.querySelector(".incr1");
    const decr = add1.querySelector(".decr1");
    const count = add1.querySelector(".count1");

    incr.addEventListener("click", () => {
        if (counter1 < 10) {
            counter1++;
            count.innerText = counter1;
            updateTotal();
        }

    });

    decr.addEventListener("click", () => {
        counter1--;
        if (counter1 < 1) {
            counter1 = 0;
            resetAdd1();
        } else {
            count.innerText = counter1;
        }
        updateTotal();
    });
}

function bindAdd2Buttons() {
    const incr = add2.querySelector(".incr2");
    const decr = add2.querySelector(".decr2");
    const count = add2.querySelector(".count2");

    incr.addEventListener("click", () => {
        if (counter2 < 10) {
            counter2++;
            count.innerText = counter2;
            updateTotal();
        }

    });

    decr.addEventListener("click", () => {
        counter2--;
        if (counter2 < 1) {
            counter2 = 0;
            resetAdd2();
        } else {
            count.innerText = counter2;
        }
        updateTotal();
    });
}

function renderAdd1() {
    counter1 = 1;
    counter2 = 0;

    add1.innerHTML = `
      <div class="flex justify-evenly">
        <span class="decr1  " style="cursor:pointer;">-</span>
        <span class="count1 ">${counter1}</span>
        <span class="incr1 " style="cursor:pointer;">+</span>
      </div>
    `;

    resetAdd2();
    bindAdd1Buttons();
    updateTotal();
}

function renderAdd2() {
    counter2 = 1;
    counter1 = 0;

    add2.innerHTML = `
      <div class="flex justify-evenly">
        <span class="decr2 pr-1" style="cursor:pointer;">-</span>
        <span class="count2 pr-1">${counter2}</span>
        <span class="incr2 pr-1" style="cursor:pointer;">+</span>
      </div>
    `;

    resetAdd1();
    bindAdd2Buttons();
    updateTotal();
}

function resetAdd1() {
    add1.innerText = "Add";
    add1.addEventListener("click", renderAdd1, { once: true });
}

function resetAdd2() {
    add2.innerText = "Add";
    add2.addEventListener("click", renderAdd2, { once: true });
}

resetAdd1();
resetAdd2();
