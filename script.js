function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    
    if (taskText === "") return; 

    let li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = function () {
        this.classList.toggle("completed");
    };

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
    
    input.value = ""; 
}
