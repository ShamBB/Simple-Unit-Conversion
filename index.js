const inputNumberEl = document.getElementById("inputNumberEl");
const feetEl = document.getElementById("feetEl");
const metersEl = document.getElementById("metersEl");
const gallonsEl = document.getElementById("gallonsEl");
const litersEl = document.getElementById("litersEl");
const poundsEl = document.getElementById("poundsEl");
const kilosEl = document.getElementById("kilosEl");
const btnConvertEl = document.getElementById("btnConvert");
const userNum = document.querySelectorAll(".userEnterNum");

function converter() {
  const numbertoConvert = inputNumberEl.value;
  userNum.forEach(function (el) {
    el.textContent = numbertoConvert;
  });
  //Convert to feet
  if (numbertoConvert) {
    feetEl.textContent = (numbertoConvert * 3.28084).toFixed(3);
    metersEl.textContent = (numbertoConvert * 0.3048).toFixed(3);
    gallonsEl.textContent = (numbertoConvert * 0.264172).toFixed(3);
    litersEl.textContent = (numbertoConvert * 3.78541).toFixed(3);
    poundsEl.textContent = (numbertoConvert * 2.20462).toFixed(3);
    kilosEl.textContent = (numbertoConvert * 0.453592).toFixed(3);
  }
  console.log(numbertoConvert);
}

btnConvertEl.addEventListener("click", function () {
  converter();
});
