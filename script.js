let colorButton = document.getElementById("button-color")
let body = document.body

const colorArray = ["lightblue", "blue", "aqua", "aquamarine", "lightseagreen", "lightskyblue" ]

colorButton.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random()* colorArray.length)
    body.style.backgroundColor = colorArray[randomIndex]
})