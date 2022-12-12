import { addItem, lowerCasedCSV } from "./functions.js";
let shoppingList = document.querySelector("#shopping-list");
let itemInput = document.querySelector("#item-name");
let listCSV = document.querySelector("#exported-list");
let form = document.querySelector("#addForm");
let items = [];

function renderItems(items){
    shoppingList.innerHTML = "";
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
    // items =[];
    

} )