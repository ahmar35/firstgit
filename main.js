var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter=document.getElementById("filter")
form.addEventListener("submit", addItem)
//del event
itemList.addEventListener("click",removeitem)
filter.addEventListener("keyup",filteritems)
function addItem(e){
    e.preventDefault()


var newitem=document.getElementById("item").value;
var li=document.createElement('li')
li.className="list-group-item"
li.appendChild(document.createTextNode(newitem));
var deleteBtn=document.createElement("button")
deleteBtn.className="btn btn-danger btn-sm float-right delete"
deleteBtn.appendChild(document.createTextNode("X"))
li.appendChild(deleteBtn)
itemList.appendChild(li)

}
function removeitem(e){
    if(e.target.classList.contains("delete")){
        if (confirm("Are you sure")){
            var li=e.target.parentElement
            itemList.removeChild(li)
        }
    }
}
function filteritems(e){
    //convert to lowercase
    var text=e.target.value.toLowerCase()
    var items=itemList.getElementsByTagName("li")
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent
        if(itemname.toLowerCase().indexOf(text)!=-1){
            item.style.display="block"
        } else{
            item.style.display="none"
        }

    })
}
