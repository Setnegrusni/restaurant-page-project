import dishOne from "./img/quesabirrias.png";
import dishTwo from "./img/pozoleRojo.png";
import dishThree from "./img/tamales.png";

const mainContent = document.querySelector("#content");

function showMenu() {
    //console.log("Módulo: Menú");
    for (let i = 0; i <= 2; i++) {
        createDishArea(i);
    }
}

function createDishArea(i) {
    const dishArea = document.createElement("div");
    let actualID = crypto.randomUUID();

    dishArea.classList.add("dish-area");
    dishArea.setAttribute("data-id", actualID);

    mainContent.appendChild(dishArea);

    addElementsToDishArea(actualID, i);
}

function addElementsToDishArea(dishAreaId, dishPosition) {
    const selectDishArea = document.querySelector("[data-id='" + dishAreaId + "']");
    const dishTitle = document.createElement("p");
    const dishPrice = document.createElement("p");
    const setImg = document.createElement("img");

    setImg.classList.add("dish-img");

    if (dishPosition === 0) {
        dishTitle.textContent = "Platillo: Quesabirrias";
        dishPrice.textContent = "Precio: $20";
        setImg.src = dishOne;
    } else if (dishPosition === 1) {
        dishTitle.textContent = "Platillo: Pozole rojo";
        dishPrice.textContent = "Precio: $50";
        setImg.src = dishTwo;
    } else if (dishPosition === 2) {
        dishTitle.textContent = "Platillo: Tamales";
        dishPrice.textContent = "Precio: $20";
        setImg.src = dishThree;
    } else {
        console.log("Se fue raro");
    }
    
    selectDishArea.appendChild(dishTitle);
    selectDishArea.appendChild(dishPrice);
    selectDishArea.appendChild(setImg);
}

export { showMenu };