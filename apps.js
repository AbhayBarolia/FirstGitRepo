var form=document.getElementById("addForm");
var itemList=document.getElementById("items");

form.addEventListener("submit", addItem);

itemList.addEventListener("click",removeItem);

function addItem(e){
    e.preventDefault();
    let nItem= document.getElementById("item").value;
    let li=document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(nItem));
   
   let btn= document.createElement("delbtn");
   btn.className="btn btn-danger btn-sm float-right delete";
   btn.appendChild(document.createTextNode("X"));
   li.appendChild(btn); 
    itemList.appendChild(li);
}

function removeItem(e)
{
    e.preventDefault();
    if(e.target.classList.contains("delete"))
    {
        if(confirm("Do you want to delete the item"))
        {
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}


