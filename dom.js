var itemlist=document.querySelector("#items")
itemlist.parentElement.style.backgroundColor="#f4f4f4"
itemlist.lastElementChild.style.backgroundColor="red"
itemlist.lastChild.textContent="avv"
itemlist.firstChild.textContent="avv"
itemlist.firstElementChild.textContent="avv"
console.log(itemlist.nextSibling)
console.log(itemlist.nextElementSibling)
itemlist.previousElementSibling.style.color="green"
console.log(itemlist.previoussibling)
var newdiv=document.createElement("div")
newdiv.classname="hello"
newdiv.id="hello1"
newdiv.setAttribute("title","hello div")
var newdivtext=document.createTextNode("hello world")
newdiv.appendChild(newdivtext)
var container=document.querySelector("header .container")
var h1=document.querySelector("header h1")
container.insertBefore(newdiv,h1)
var parentnode=document.getElementById("items")
parentnode.innerHTML='<li>hello world</li>'+parentnode.innerHTML