import homeImg from "./img/home.png";

const mainContent = document.querySelector("#content");

function showHome() {
    //console.log("Funciona este archivo");
    const homeText = document.createElement("div");
    const homeBanner = document.createElement("div");
    const welcomeText = document.createElement("p");
    const setImg = document.createElement("img");

    homeText.classList.add("home-text");
    homeBanner.classList.add("home-banner");
    welcomeText.textContent = "Come and try one of the best cuisines in the world!";
    setImg.src = homeImg;
    setImg.classList.add("home-img");

    mainContent.appendChild(homeText);
    homeText.appendChild(welcomeText);
    mainContent.appendChild(homeBanner);
    homeBanner.appendChild(setImg);
}

export { showHome };