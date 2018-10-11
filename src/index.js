import convert from "color-convert";
import "./sass/index.scss";

const colorPicker = document.querySelector("#colorPicker");
console.log(colorPicker);
const heightInput = document.querySelector("#heightInput");

function GetColor() {
  let hexValue = colorPicker.value;
  return hexValue.substring(1, 7);
}

function ConvertHexToHue(hexCode) {
  return convert.hex.hsv(hexCode)[0];
}

function ConvertHueToLength(hueDeg) {
  return Math.round((620 - (170 / 270) * hueDeg) * 100) / 100;
}

function InsertIntoHtml(hexValue) {
  let value = ConvertHueToLength(ConvertHexToHue(hexValue));
  document.querySelector("#result").innerHTML = value;
  document.querySelector("#resultText").classList.add("hidden");
}

colorPicker.addEventListener("change", ev => {
  changeHandle();
});

InsertIntoHtml(GetColor());

heightInput.addEventListener("keyup", () => {
  changeHandle();
});

function changeHandle() {
  let value = ConvertHueToLength(ConvertHexToHue(GetColor()));
  document.querySelector("#result").innerHTML = value;

  let height = heightInput.value;
  console.log(height);
  if (height.length != 0) {
    document.querySelector("#resultText").classList.remove("hidden");
    let colorLength = ConvertHueToLength(ConvertHexToHue(GetColor()));
    let heightResult = document.querySelector("#heightResult");
    let colorResult = document.querySelector("#colorResult");
    colorResult.innerHTML = "#" + GetColor();
    heightResult.innerHTML =
      Math.round((height / colorLength / 1e-7) * 100) / 100;
  } else {
    document.querySelector("#resultText").classList.add("hidden");
  }
}
