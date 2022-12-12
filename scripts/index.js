//HTMLElement.insertAdjacentHTML(position, html) is used to add html to the html element at certain position
//HTMLElement.textContent - used to add text content to an html element
import { addItem, lowerCasedCSV } from "./functions.js";

let shoppingList = document.querySelector("#shopping-list");//used to add items to the list
let itemInput = document.querySelector("#item-name");
let listCSV = document.querySelector("#exported-list");//used to output list items in CSV format
let form = document.querySelector("#addForm");
let items = [];

function renderItems(items){
    shoppingList.innerHTML = "";//needed to refresh list so it doesnt doubles
    items.forEach((item) =>{
    shoppingList.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
    });
    listCSV.textContent = lowerCasedCSV(items);
}

form.addEventListener("submit", event => {
    event.preventDefault();
    addItem(items, itemInput.value);
    itemInput.value = "";
    renderItems(items);
    

} )