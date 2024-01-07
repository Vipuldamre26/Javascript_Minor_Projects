
const date = document.querySelector(".inp");
const btn = document.querySelector("button");
const para = document.getElementsByClassName("para");

btn.addEventListener("click", () =>{
    if(date.value === ""){
        alert("Please enter your date of birth");
    }
    else{
        console.log("input", date.value);
        const dob = new Date(date.value);
        const dob_year = dob.getFullYear();

        const now = new Date().getFullYear();

        let age = now - dob_year;

        para[0].innerHTML = `Your age is ${age} years old`;
    }
});
