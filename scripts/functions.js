export {addItem, lowerCasedCSV}

function addItem(items,item){
    items.push(item);
    
}

function lowerCasedCSV(items){
    items = items.map((item) =>{
        item = item.trim();
        return item.toLowerCase();
        
    })
    return items.join(", ")
    
}