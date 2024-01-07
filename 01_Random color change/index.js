

function randomclick(){
    var color = ["red", "blue", "yellow", "green", "purple", "black", "pink", "brown", "grey", "orange"]
    
    var randomColor = color[Math.floor(Math.random() * 9)];

    
        document.addEventListener("click", function(){
            document.querySelector("body").style.background = randomColor;
        });
    
}










// Practice for understanding

// var randomColor = (Math.random());
// console.log(randomColor);

// var rc = randomColor * 9;
// console.log(rc)

// var rcd = Math.floor(rc);
// console.log(rcd)