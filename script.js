let input = document.getElementById("input");
let form = document.getElementById("form");
let todolist = document.getElementById("todo-list")
const emptyArry = JSON.parse(localStorage.getItem("list")) || [];
const arry = [];

emptyArry.forEach(item => {
    todolist.innerHTML += `<li>${item} <button id = "crossbtn"><img src="cross-23.png" id = "cross" onclick="removetask()"></button></li>`;
});

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const value = event.target.children[0].value;  

    if(value.trim()){

        emptyArry.push(value)

        const addlocal =  localStorage.setItem("list", JSON.stringify(emptyArry))
        // console.log(getlocal)
            todolist.innerHTML += `<li>${value} <button id = "crossbtn"><img src="cross-23.png" id = "cross" onclick="removetask()"></button></li>`
    
            event.target.reset()
        
    }

})


// function removetask(){
//     todolist.innerHTML = "";
// }