let input = document.querySelector("#input");
let list = document.querySelector("#list");
let button = document.querySelector("#button");


//
button.addEventListener("click", (e) => {
    e.preventDefault();
  const array = [];
  let aa = input.value;
  let myObject = {
    list: input.value,
  };
  array.push(myObject);
  // e.preventedDefault()
  for (let i = 0; i < array.length; i++) {
    console.log(array);
    
  }
    if (input.value.length != 0) {
        list.innerHTML += `<li class="list-group-item list__item">
        <span>${aa}</span>
        <span>
        <i class=" doceration fa-solid fa-check"></i>
        <i style="padding:15px" class="remove fa-solid fa-trash"></i>
        </span>
        </li>`;
        input.value = "";
      
      }
      else{
        window.alert("Silinsin");
        return;
      }

let doceration=document.querySelectorAll(".doceration")
doceration.forEach((element)=>{
element.addEventListener("click",(e)=>{
    if(element.parentElement.previousElementSibling.style.textDecoration!="line-through"){
        element.parentElement.previousElementSibling.style.textDecoration="line-through";
        element.parentElement.parentElement.style.opacity="0.3"
        console.log(element.parentElement.parentElement);
    }
   else if(element.parentElement.previousElementSibling.style.textDecoration=="line-through"){
    element.parentElement.previousElementSibling.style.textDecoration="none"
    element.parentElement.parentElement.style.opacity="1"
   }
})
})
let remove=document.querySelectorAll(".remove")
      remove.forEach((element)=>{
          element.addEventListener("click",()=>{
              element.parentElement.parentElement.remove()
          })
      })
      localStorage.setItem("myCat", "aa");
      const cat = localStorage.getItem("myCat");
});

