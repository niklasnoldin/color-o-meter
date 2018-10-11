import convert from "color-convert";
import "./sass/index.scss";

const colorPicker = document.querySelector("#colorPicker");

function GetColor() {
  let hexValue = colorPicker.value;
  console.log(hexValue.substring(1, 7));
  return hexValue.substring(1, 7);
}

function ConvertHexToHue(hexCode) {
  return convert.hex.hsv(hexCode)[0];
}

function ConvertHueToLength(hueDeg) {
  return 620 - (170 / 270) * hueDeg;
}

function InsertIntoHtml(hexValue) {
  let value = ConvertHueToLength(ConvertHexToHue("B000B5"));
  document.querySelector("#result").innerHTML = value;
}

colorPicker.addEventListener("change", ev => {
  document.querySelector("result").innerHTML = ConvertHueToLength(
    ConvertHexToHue(GetColor())
  );
});

InsertIntoHtml(GetColor());
