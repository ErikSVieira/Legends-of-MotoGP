import { renderPilot } from "./renderData.js";
import { button } from "./button.js";


async function renderDataEBtn() {
    try {
        await renderPilot();

        button();
    } catch (erro) {
        console.error(erro);
    }
    
} 

renderDataEBtn();