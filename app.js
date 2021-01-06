const allButtons = document.querySelectorAll(".btn");

const input = document.querySelector(".screen");

const equalBtn = document.querySelector(".btn-equal");

const clearBtn = document.querySelector(".btn-clear");

allButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
      console.log(btn);
    const value = e.target.dataset.num;
    input.value += value;
    console.log(input);
  });
});

equalBtn.addEventListener("click", (e) => {
  if (input.value === "") {
    input.value = "Enter a value";
  } else {
    let answer = eval(input.value);
    input.value = answer;
  }
});

clearBtn.addEventListener("click", (e) => {
  input.value = "";
});
