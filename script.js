const item=document.querySelector('#item')
const toDoBox=document.querySelector('#to-do-box');
const totalCount = document.getElementById('total');
const addList = document.getElementById("add");
// initially the add button will disappear
item.addEventListener('input', function(){
if(item.value.trim().length > 0){
addList.classList.remove("hide")
}else{
addList.classList.add("hide")
}
});
// adding the task after click on add(plus) button-------------
addList.addEventListener('click', function(event){
addToDo(item.value)
item.value=""
// to know the count value of task after addition of task-------
const childs = document.getElementsByTagName("li").length;
totalCount.innerHTML = childs;
})

//  function to add the work written in inputbox to list item---
const addToDo = (item) =>{
const listItem=document.createElement("li");
listItem.innerHTML=`<input class="input" type="checkbox"></input> ${item}  <i class="fas fa-trash"></i>`;

// to mark that my work is done----------------------------------
listItem.querySelector('.input').addEventListener("click",function(){
    listItem.classList.toggle("done");
});

// to delete the work after clicking on cross button------------
listItem.querySelector("i").addEventListener("click",function(){
listItem.remove();

// to know the count value of task after deletion---------------
const childs = document.getElementsByTagName("li").length;
totalCount.innerHTML = childs;
});
toDoBox.appendChild(listItem);
}

