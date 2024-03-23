const input = document.querySelector(".input-box input");
const displayResult = document.querySelector(".input-box .result");
const buttons = document.querySelectorAll(".buttons-box button");

let result = "";

for (const btn of buttons) {
  btn.addEventListener("click", () => {
    if (btn.innerHTML == "=") {
      if (
        result.charAt(result.length - 1) == "+" ||
        result.charAt(result.length - 1) == "-" ||
        result.charAt(result.length - 1) == "*" ||
        result.charAt(result.length - 1) == "/"
      ) {
        displayResult.innerHTML = "Error";
      }

      result === ""
        ? (displayResult.innerHTML = "0")
        : (displayResult.innerHTML = eval(result));
    } else if (btn.innerHTML == "C") {
      input.value = null;
      displayResult.innerHTML = "0";
      result = "";
    } else if (btn.innerHTML == "del") {
      input.value = input.value.slice(0, -1);
      result = result.slice(0, -1);
    } else if (
      btn.innerHTML == "×" ||
      btn.innerHTML == "÷" ||
      btn.innerHTML == "%"
    ) {
      input.value += btn.innerHTML;

      if (btn.innerHTML == "×") {
        result += "*";
      } else if (btn.innerHTML == "÷") {
        result += "/";
      } else {
        result += "/100";
      }
    } else if (btn.innerHTML == "+/-") {
      result += "";
      alert("tombol ini belum bisa digunakan");
    } else {
      input.value += btn.innerHTML;
      result += btn.innerHTML;
    }
  });
}
