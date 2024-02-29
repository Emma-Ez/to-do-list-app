const textBox = document.getElementById("text-box");
const listContainer = document.getElementById("list-container");
addUpdateClick = document.getElementById("AddUpdateClick")

textBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addUpdateClick.click()
    }
});

function addTask() {
    if(textBox.value === ""){
        alert("Task field cannot be empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = textBox.value;
        listContainer.appendChild(li);

    }
    textBox.value = "";

}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
}, false);