import convert from "color-convert";
import "./sass/index.scss";

const colorPicker = document.querySelector("#colorPicker");

const heightInput = document.querySelector("#heightInput");

function changeHandle() {
  let wavelength = convertHueToLength(convertHexToHue(getColor()));
  let height = heightInput.value;

  document.querySelector("#result").innerHTML = wavelength;

  if (height.length != 0) {
    let heightResult = document.querySelector("#heightResult");
    let colorResult = document.querySelector("#colorResult");
    document.querySelector("#resultText").classList.remove("hidden");
    colorResult.innerHTML = "#" + getColor();
    heightResult.innerHTML =
      Math.round((height / wavelength / 1e-7) * 100) / 100;
  } else {
    document.querySelector("#resultText").classList.add("hidden");
  }
}

function getColor() {
  let hexValue = colorPicker.value;
  return hexValue.substring(1, 7);
}

function convertHexToHue(hexCode) {
  return convert.hex.hsv(hexCode)[0];
}

function convertHueToLength(hueDeg) {
  return Math.round((620 - (170 / 270) * hueDeg) * 100) / 100;
}

colorPicker.addEventListener("change", () => changeHandle());

heightInput.addEventListener("keyup", () => changeHandle());

changeHandle();
