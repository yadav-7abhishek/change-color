const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let button = document.getElementById("btn")
let color = document.querySelector(".color")

button.addEventListener("click", function(){
  let hexColor = "#"
  for(let i=0; i<6; i++){
    hexColor += hex[Math.floor(randomNumber())]
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
  }

})

function randomNumber(){
  return Math.random()*hex.length
}
