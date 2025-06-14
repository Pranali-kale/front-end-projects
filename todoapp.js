 const inputBox =document.getElementById("input");
 const listContainer =document.getElementById("list_container");
 
 function addTask(){
    if(inputBox.value===''){
        alert("you must write something");
    }
 else{
    let li=document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span=document.createElement("span");

    span.innerHTML="\u00d7";
    li.appendChild(span);

 }
 inputBox.value='';
 savedata();

}
listContainer.addEventListener("click",function(ee){
if(ee.target.tagName==="LI")
{
    ee.target.classList.toggle("checked");    
    savedata()
}
else if(ee.target.tagName==="SPAN"){
    ee.target.parentElement.remove();
    savedata();
}

},false)

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showtask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showtask();