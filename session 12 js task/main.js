let ids = [10 ,40 ,50 ,82 ,33]
let UserInput = Number(prompt("Enter ID"))
let findIndex = ids.findIndex((item)=> item == UserInput);
if(findIndex == -1)
{
    console.log("unfound");
    ids.push(UserInput)
}
else{
    console.log("found");
    }
console.log(ids);

