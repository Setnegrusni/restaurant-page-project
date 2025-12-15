const mainContent = document.querySelector("#content");

function showAbout() {
    //console.log("Módulo: Acerca de");
    const textArea = document.createElement("div");
    const textAbout = document.createElement("p");

    textAbout.textContent = 'Esta página forma parte del proyecto "Restaurant Page" de "The Odin Project"';
    textArea.classList.add("text-area");
    textArea.appendChild(textAbout);
    mainContent.appendChild(textArea);
}

export { showAbout };