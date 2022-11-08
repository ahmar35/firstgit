var items =document.querySelectorAll("li");
console.log(items[1])
items[1].style.backgroundColor="green"
var odd=document.querySelectorAll("li:nth-Child(odd)")
for (let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green"
}
var invisible=document.querySelectorAll('li')
invisible[2].style.visibility="hidden"