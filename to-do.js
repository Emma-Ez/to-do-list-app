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
        li.textContent = textBox.value;
        listContainer.appendChild(li);
        // let span = document.createElement("span");
        // span.innerHTML = `<div><img class="edit text-controls" src="/images/pencil.png" alt="Edit task" /><img class="delete text-controls" src="/images/delete.png" alt="Delete task" /></div>`;
        // li.appendChild(span);
        let span = document.createElement("span");
        span.textContent = " ";
        const editIcon = document.createElement("img");
        editIcon.classList.add("edit", "text-controls");
        editIcon.src = "/images/pencil.png";
        editIcon.alt = "Edit task";
        span.appendChild(editIcon);

        const deleteIcon = document.createElement("img");
        deleteIcon.classList.add("delete", "text-controls");
        deleteIcon.src = "/images/delete.png";
        deleteIcon.alt = "Delete task";
        span.appendChild(deleteIcon);

        li.appendChild(span);
    }
    textBox.value = "";
    
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
}, false);