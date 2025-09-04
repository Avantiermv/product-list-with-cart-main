import { createItenDynamically } from "./createItens.js";

export async function takeProductInfo() {
    try{
        const response = await fetch('/api/data');
        const data = await response.json();
        createItenDynamically(data);
    }catch(e){
        console.error("Error:", e);
    }
}