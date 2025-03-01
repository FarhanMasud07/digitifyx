const yellowMarguaritaColor = "#FEDE00";
const yellowMarguaritaDarkColor = "#e5be00";
const whiteColor = "#fff";
const blackColor = "black";
const lightGreen = "#00ff9a";
const transparentColor = "transparent";

const colorFunctionality = {
  setSvgFillColor(color, domElement) {
    domElement &&
      domElement.length &&
      domElement.forEach((element) => {
        element.setAttribute("fill", color);
        element.style.setProperty("border-color", color);
        element.style.setProperty("color", color);
        if (element.classList.contains("border-button")) {
          element.addEventListener("mouseover", function () {
            element.style.backgroundColor = color;
            element.style.color = blackColor;
          });
          element.addEventListener("mouseout", function () {
            element.style.backgroundColor = transparentColor;
            element.style.color = color;
          });
        }
      });
  },
  onButtonClick() {
    const yellowLight = document.querySelectorAll(".color-change");
    const yellowDark = document.querySelectorAll(".color-change-dark");
    this.setSvgFillColor(yellowMarguaritaColor, yellowLight);
    this.setSvgFillColor(yellowMarguaritaDarkColor, yellowDark);
  },
};
