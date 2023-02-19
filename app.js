let balance = document.getElementById('totalBalance');
let income = document.getElementById('income');
let expenses = document.getElementById('expenses');
const btn = document.getElementById('button');
const addBtn = document.getElementById('addBtn');


var a = parseInt(income.innerHTML);
var b = parseInt(expenses.innerHTML);

function addToBalance() {
    var accBalance = a - b;
    balance.innerHTML = accBalance;   
} 
addToBalance();

function addToBudget() {
    let addBudget = document.getElementById('addBudget').value;    
    x = parseInt(addBudget);    
    console.log(x);
    
    console.log(a);
    a = x;    
    income.innerHTML = a; 
    return addToBalance();
}
btn.addEventListener("click", addToBudget);

function addToExpenses() {  
    let addExpense = document.getElementById('addExpenses').value;
    let description = document.getElementById('description').value;
    let expensesList = document.getElementById('expensesList');
    exp = parseInt(addExpense);
    console.log(exp);
    
    console.log(b)
    b += exp;
    expenses.innerHTML = b;
    
    console.log(description); 
    
    /*let list = `<li class="p-4 d-flex justify-content-between" style="list-style: none; background: rgba(2, 64, 252, 0.5);
    border-radius: 5px; color: #fff"><span>${description}</span> - <span>${b}</span></li>`;
      */    
    let expenseArr = [];
    expenseArr.push(description);

    expenseArr.forEach(function(item) {
        let li = document.createElement("li");    
        li.innerHTML = `<span>${item}</span><span>${exp}</span>`;
        li.classList.add("elist-item");
        expensesList.appendChild(li);    
    })       
    return addToBalance();
}
addBtn.addEventListener("click", addToExpenses);
