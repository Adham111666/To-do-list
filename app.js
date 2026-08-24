let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let tasksContainer = document.getElementById("tasksContainer");
let taskCount = document.getElementById("taskCount");

let tasks = [];


// Add Task
addTaskBtn.addEventListener("click", function () {

    let taskText = taskInput.value.trim();


    // Check Empty
    if (taskText === "") {
        alert("Please Enter A Task");
        return;
    }


    // Less than 3 characters
    if (taskText.length < 3) {
        alert("Task cannot be less than 3 characters");
        return;
    }


    // More than 30 characters
    if (taskText.length > 30) {
        alert("Task cannot be more than 30 characters");
        return;
    }


    // Add task to array
    tasks.push(taskText);


    // Display tasks
    displayTasks();


    // Clear input
    taskInput.value = "";
});


// Display Tasks
function displayTasks() {

    tasksContainer.innerHTML = "";


    tasks.forEach(function (task, index) {

        let taskItem = document.createElement("div");

        taskItem.className = "task-item";


        taskItem.innerHTML = `
            <span class="task-text">${task}</span>

            <button 
                class="delete-btn" 
                onclick="deleteTask(${index})">
                Delete
            </button>
        `;


        tasksContainer.appendChild(taskItem);
    });


    // Update tasks counter
    taskCount.innerText = tasks.length;


    // Show empty message
    if (tasks.length === 0) {

        tasksContainer.innerHTML = `
            <div class="empty-message">
                No Tasks Added Yet
            </div>
        `;
    }
}


// Delete Task
function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}