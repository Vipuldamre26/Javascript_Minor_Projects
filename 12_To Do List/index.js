const input = document.getElementById("input");
const items = document.getElementsByClassName("items")[0];


input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        addItem();
    }
})

function addItem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>' + input.value + '</div>';

    checkIcon.className = "fa-regular fa-square-check";
    checkIcon.style.color = "gray";
    checkIcon.addEventListener("click", () =>{
        checkIcon.style.color = "green";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fa-solid fa-trash";
    trashIcon.color = "darkgray";

    trashIcon.addEventListener("click", () =>{
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    items.appendChild(divParent);

    input.value = '';
}