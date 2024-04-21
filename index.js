let taskIdCounter; // Counter for generating unique task IDs
if(localStorage.length  == 0) 
    {taskIdCounter = 0}
    else {
        taskIdCounter = localStorage.length;
        taskIdCounter++;
    }
const addTask = () => {
    const prev = document.getElementById("search").value.trim();
    if (prev) {
        const TaskDiv = document.createElement("div");
        TaskDiv.classList.add("item");

        const data = prev;
        localStorage.setItem(`${taskIdCounter}`, data);

        const taskId = `${taskIdCounter}`;
        const input = document.createElement("input");
        input.type = "checkbox";
        input.addEventListener("change", function() {
            const p = TaskDiv.querySelector("p.task");
            if (this.checked) {
                console.log("Checked");
                p.innerHTML = `<s>${data}</s>`;
            } else {
                console.log("Unchecked");
                p.textContent = data;
            }
        });
        TaskDiv.appendChild(input);

        const p = document.createElement("p");
        p.textContent = data;
        p.classList.add("task");
        TaskDiv.appendChild(p);

        TaskDiv.id = taskId;

        const trash = document.createElement("i");
        trash.classList.add("fa-solid", "fa-trash");
        trash.title = "Delete this task";
        trash.addEventListener("click", removeTask);
        TaskDiv.appendChild(trash);

        const actualDiv = document.querySelector(".items");
        actualDiv.appendChild(TaskDiv);

        taskIdCounter++;
        document.getElementById("search").value = "";
    } else {
        return;
    }
};

const removeTask = function() {
    const Delete = this.closest(".item");
    Delete.remove();
    // Also remove from localStorage
    localStorage.removeItem(Delete.id);
};

const loadFromLocalStorage = function() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const data = localStorage.getItem(key);
        const TaskDiv = document.createElement("div");
        TaskDiv.classList.add("item");

        const input = document.createElement("input");
        input.type = "checkbox";
        input.addEventListener("change", function() {
            const p = TaskDiv.querySelector("p.task");
            if (this.checked) {
                console.log("Checked");
                p.innerHTML = `<s>${data}</s>`;
            } else {
                console.log("Unchecked");
                p.textContent = data;
            }
        });
        TaskDiv.appendChild(input);

        const p = document.createElement("p");
        p.textContent = data;
        p.classList.add("task");
        TaskDiv.appendChild(p);

        TaskDiv.id = key;

        const trash = document.createElement("i");
        trash.classList.add("fa-solid", "fa-trash");
        trash.title = "Delete this task";
        trash.addEventListener("click", removeTask);
        TaskDiv.appendChild(trash);

        const actualDiv = document.querySelector(".items");
        actualDiv.appendChild(TaskDiv);
    }
};

window.onload = function() {
    loadFromLocalStorage();
};
