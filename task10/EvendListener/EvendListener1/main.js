let div=document.querySelector(".div__item");
let body=document.querySelector("body");
let span=document.querySelector("span")

div.addEventListener("mousemove",(e)=>{
    x=e.clientX % 255;
    y=e.clientY % 255;
    body.style.backgroundColor=`rgb(${x},${y},${x-y})`;
    div.style.backgroundColor=`rgb(${x-50},${y-50},${x+y})`;
    span.textContent=`rgb(${x},${y},${x+y})`
})