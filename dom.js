<script>
function savetolocalstorage(event){
event.preventDefault()
const expense=event.target.expense.value;
const description=event.target.description.value;
const category=event.target.category.value;
//localStorage.setItem("expense",expense)
//localStorage.setItem("description",description)
//localStorage.setItem("category",category)
const obj={
    expenseAmount:expense,
    description:description,
    category:category
}
localStorage.setItem(obj.description,JSON.stringify(obj))
showExpenseDetails(obj)
}

function showExpenseDetails(expense){
    const parentNode=document.getElementById('expenselist')
    const childHTML=`<li id='${expense.description}' > ${expense.expenseAmount}-${expense.description}
        <button onclick=deleteuser('${expense.description}') > Delete </button> 
            </li>`
        parentNode.innerHTML=parentNode.innerHTML+childHTML;

}
function deleteuser(description){
    localStorage.removeItem(description)
    removeUserFromScreen(description)

}
function removeUserFromScreen(description){
    const parentNode=document.getElementById('expenselist')
    const childNodetobeDeleted=document.getElementById(description)
    parentNode.removeChild(childNodetobeDeleted)
}
</script>



window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showExpenseDetails(userDetailsObj)
    }
})