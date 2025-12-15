//Imports
import "./styles.css";
import { showHome } from "./home.js";
import { showMenu } from "./menu.js";
import { showAbout } from "./about.js";

//Global variables
const tabButtons = document.querySelectorAll("button");

//console.log("Prueba de funcionamiento");
//Carga inicial de la página
showHome();

//Buttons event listeners
tabButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        changeTab(button.id);
    });
});

//Functions

//Function that changes content based on button clicked
function changeTab(myTab) {
    clearContent();
    
    switch(myTab) {
        case "btHome":
            showHome();
            break;
        case "btMenu":
            showMenu();
            break;
        case "btAbout":
            showAbout();
            break;
    }
}

//Function that clears content
function clearContent() {
    const mainContent = document.querySelector("#content");
    mainContent.innerHTML = "";
}