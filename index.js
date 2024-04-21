let taskIdCounter = 0; // Counter for generating unique task IDs

const addTask = () => {
    const prev =  document.getElementById("search").value;
    if(prev) 
    {
    const TaskDiv = document.createElement("div");
    TaskDiv.classList.add("item");

    const data = document.getElementById("search").value; // Get the value from the input box
    console.log(data);

    const taskId = `task-${taskIdCounter}`; // Generate unique task ID
    const input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("change", function() {
        if (this.checked) {
            console.log("Checked");
            p.innerHTML = `<s>${data}</s>`;
        } else {
            console.log("Unchecked");
            p.innerHTML = data;
        }
    });
    TaskDiv.appendChild(input);

    const p = document.createElement("p");
    p.textContent = data; // Set the text content of the p tag to the input value
    p.classList.add("task");
    TaskDiv.appendChild(p);

    TaskDiv.id = taskId;

    const trash = document.createElement("i");
    trash.classList.add("fa-solid", "fa-trash");
    trash.title = "Delete this task";
    trash.value = "Delete";
    trash.setAttributeNode.name = "Delete";
    trash.addEventListener("click", removeTask); // Changed "onClick" to "click"
    TaskDiv.appendChild(trash);

    const actualDiv = document.querySelector(".items");
    
    actualDiv.appendChild(TaskDiv);

    taskIdCounter++; // Increment the task ID counter for the next task
    document.getElementById("search").value = "";
}
else
{
    throw new console.error("Task description is required");
}
};

const removeTask = function() {
    const Delete = this.closest(".item");
    // Delete.classList.add(".hide"); // Changed to below line
    Delete.style.display = "none"; // Hide the task instead of adding a class
};


