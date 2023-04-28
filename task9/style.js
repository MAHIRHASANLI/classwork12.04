// let Dbody = document.querySelector("body");
// let array = ["aple", "banana", "tomato", "banana", "tomato"];
// const ul = document.createElement("ul");

// array.forEach((value) => {
//   const li = document.createElement("li");
//   li.textContent=value;
//   ul.appendChild(li);
// });
// Dbody.appendChild(ul);


// let ul = document.querySelectorAll("ul");
// console.log(ul);
// ul.forEach((element)=>{
//     let first = element.querySelector("li:first-child");
//     let last = element.querySelector("li:last-child");
//     first.textContent = "first";
//     last.textContent = "last";
// });
let body=document.body;
body.style.backgroundColor="blue";
body.style.display="flex";
body.style.justifyContent="center"
body.style.textAlign="center"
let btn1=document.querySelector("#btn1")

let btn2=document.querySelector("#btn2")
let btn3=document.querySelector("#btn3")
let nums=document.querySelector("#num")

let num=0;

btn1.addEventListener("click", ()=>{
    let newNum=++num;
    nums.innerText=newNum;
});


btn3.addEventListener("click", ()=>{
    let newNum=--num;
    nums.innerText=newNum;
});

btn2.addEventListener("click", ()=>{
    nums.innerText=num=0;
})
