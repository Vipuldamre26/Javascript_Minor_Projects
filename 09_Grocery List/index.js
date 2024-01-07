const inputText = document.getElementById("input");
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");

pencil.addEventListener("click", () => {
    allItems.innerHTML = "";
})

inputText.addEventListener("keydown", (event) => {
    if (event.key == "Enter"){
        addItem();
    }
});

function addItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + inputText.value;

    h2.addEventListener("click", () => {
        h2.style.textDecoration = "line-through";
    })

    allItems.insertAdjacentElement("beforeend", h2);
    
    inputText.value = "";
}