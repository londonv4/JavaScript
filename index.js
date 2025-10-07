Document.queryselector(“.btn”)
Console.log(button)
Const box= document.queryselector(“.box”);
button.addEventListener(“click”, function (event) {

let r = Math.floor(Math.random() * 256));
let g = Math.floor(Math.random() * 256));
let b = Math.floor(Math.random() *256));

box.style.backgroundColor = ‘rgb(${r}, ${g},  ${b})’;
}
button.addEventListener(“Click”, MAKERGB);


});
