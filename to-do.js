const textBox = document.getElementById("text-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(textBox.value === ""){
        alert("Task field cannot be empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = textBox.value;
        listContainer.appendChild(li);
    }
    textBox.value = ""

}