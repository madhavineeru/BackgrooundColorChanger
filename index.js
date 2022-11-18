const colorPickerElement = document.getElementById("colorPicker");
const getButtonElement = document.getElementById("getButton");

function changeColor(){
    const colorValue = colorPickerElement.value;
    document.body.style.backgroundColor = colorValue;
    getButtonElement.style.backgroundColor = colorValue;
    getButtonElement.style.color = "#ffffff";
    if (colorValue == "#ffffff") {
        getButtonElement.style.color = "#000";
    }
}