let btn = document.querySelector("#btn");
let text = document.querySelector("#text");
let sum = document.querySelector("#sum");
let num = document.querySelector("#num");
let cavab = document.querySelector("#cavab");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (text.value > 1 && text.value < 15) {
      sum.innerText = text.value;
      const randomvalue=Math.random()*15;
    num.innerText=Math.floor(randomvalue)

    if (text.value > Math.floor(randomvalue)) {
      cavab.innerText = "Texmininiz cox boyukdur!!!";
    } 

    else if (text.value < Math.floor(randomvalue)) {
      cavab.innerText = "Texmininiz cox kicikdir!!!";
    }
    
     else if(text.value == Math.floor(randomvalue)){
      cavab.innerText = "Texmininiz duzdur!!!";
    }
  }
  else{
    cavab.innerText = "eded 15 den kicik olmalidi !!!";
  }
});
