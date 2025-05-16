const txttask=document.getElementById("txttask");
const sub=document.getElementById("sub");
const resuls=document.getElementById("resuls");

sub.addEventListener("click",function(e){
    e.preventDefault(); 
        if(txttask.value.length>0)
    {
    const listItem=document.createElement("li");
    const addItem=document.createElement("span");
    const deleteButton=document.createElement("button");
    const doneButton=document.createElement("button");

    addItem.classList.add("item");
    addItem.innerText=txttask.value;

    deleteButton.classList.add("del");
    deleteButton.innerText="Del";

    doneButton.classList.add("done");
    doneButton.innerText="Done";

    listItem.appendChild(addItem);
    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);
    resuls.appendChild(listItem);

    deleteButton.addEventListener("click",function(){
       resuls.removeChild(listItem);
    })
    doneButton.addEventListener("click",function(){
       const span=listItem.querySelector(".item")
       span.style.color="#ADFF2F";
        span.style.textDecoration="line through";
    })
    txttask.value="";
    txttask.focus();
}
else{
    e.preventDefault();
}
})
