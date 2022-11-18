const simple = ["red", "yellow", "pink", "gray"]
let button = document.getElementById("btn")
let color = document.querySelector(".color")

button.addEventListener("click",function(){
  let colorNumber = simple[Math.floor(randomNumber())]
  color.textContent = colorNumber
  document.body.style.backgroundColor = colorNumber
})

function randomNumber(){
  return Math.random()*simple.length;
}
