//* *** Data Initial ***
let gridElement = document.querySelector(".grid");
let elementDivs = [];
const DIV = `
    <!-- single child -->
    <div>
    </div>
`;


//* *** Funcions ***
function createDivs() {
    for (let d = 0; d < 20; d++) {
        elementDivs.push(DIV);
    }

    elementDivs = elementDivs.join(" ");
    gridElement.innerHTML = elementDivs;
    // console.log(elementDivs);
}

function displayDivs() {
    createDivs();
}


//* *** Events ***
window.addEventListener("DOMContentLoaded", () => {
    displayDivs();
});

// ¨ ¨ ¨ ¨ ¨ ¨ ¨▲.︵.▲
// ¨ ¨ ¨ ¨ ¨ ¨ ¨◄ƒ░░ 0 }…..︵.
// ¨ ¨ ¨ ¨ ¨ ¨◄ƒ░░░░░░ o”)
// ¨ ¨ ¨ ¨ ¨ ◄ƒ░░░(────.·^”’
// ¨ ¨ ¨ ¨ ¨ ◄ƒ░░░§ ´
// )\¨ ¨ ¨ ¨ ◄ƒ░░░░§ ¨ ¨ ¨✺✺✺
// ) \ ¨ ¨ ¨◄ƒ░░░░░§¨ ¨ ¨\|//✺
// );;\ ¨ ¨ ◄ƒ░.︵.░░░§__(((
// );;;\¨ ¨◄ƒ░(░░)\______//
// );;;;\¨◄ƒ░░░░░░__//
// );;;;;\◄ƒ░░░░░░░░§
// );;;;;;;\░░░░░░░░░(((
