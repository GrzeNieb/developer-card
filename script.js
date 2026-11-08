const factButton = document.getElementById("fact-button")
const bio = document.querySelector("#bio");
const test = document.getElementById("test")
var kliknieciavar = 0;

factButton.addEventListener("click", function () {
  bio.textContent = "Ta treść została zmieniona przez JavaScript.";
  factButton.textContent = "Gotowe!";
});
function klikniecia() {
    kliknieciavar++;
    test.textContent = kliknieciavar;
    
}
