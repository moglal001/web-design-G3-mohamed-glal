let users = [];
function addUser() {
    let id = Number(prompt("Enter Your ID"));
    let name = prompt("Enter Your Name");
    let balance = Number(prompt("Enter Your Balance"));
    users.push({
        id: id,
        name: name,
        balance: balance
    })
}
function editUserBalanceById(id ,newBalance) {
    let index = users.findIndex(item => item.id === id);
    if (index !== -1) {
        users[index].balance = newBalance;
    }
    else {
        console.log("User not found");
    }
}
function transferBalanceById(fromID ,toID ,amount)
{
    let indexFromID = users.findIndex(item => item.id === fromID);
    let indexToID = users.findIndex(item => item.id === toID);
    
    if (indexFromID !== -1 && indexToID !== -1 ) {
        users[indexFromID].balance -= amount;
        users[indexToID].balance += amount;
    }
    else {
        console.log("User not found");
    }
}
function deleteUser(id) {
    let index = users.findIndex(item => item.id === id);
    users.splice(index,1);

}


addUser();
addUser();
addUser();
editUserBalanceById(1,9999);
transferBalanceById(2,3,6000);
console.log(users);
