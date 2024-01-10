
let parent = document.querySelector(".cards");

for(let i = 0; i < 30; i++){
    let createItem = document.createElement("div");
    createItem.classList.add("card");
    parent.appendChild(createItem);
    createItem.style.backgroundColor = colorChanger();
    createItem.innerHTML = colorChanger();
}


function colorChanger(){
    let str = "0123456789abcdef";
    let colorStr = "#";
    for(let i = 0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * str.length);
        colorStr += str[randomIndex];
    }

    return colorStr;
}


colorChanger();