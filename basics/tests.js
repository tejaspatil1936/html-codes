let modeBtn = document.querySelector("#mode");
let currentMode = "light"; // make it dark
modeBtn.addEventListener("click", () => {
    if(currentMode === "light") {
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor="blue";
    }
    else {
        currentMode = "light";
        document.querySelector("body").style.backgroundColor="pink";
    }

    console.log(currentMode);
})