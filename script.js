
let taskArray = JSON.parse(localStorage.getItem('tasks')) || [];

renderTask();

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        taskArray.push({
            description: taskText,
            completed: false
        });

        taskInput.value = '';
        // console.log(taskText);
        console.log(taskArray);
        saveToLocalStorage();
        renderTask();
    } else {
        console.log("Nothing");

    }
}
function renderTask() {
    const taskList = document.querySelector('.task-item');

    taskList.innerHTML = '';
    taskArray.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-group-item d-flex justify-content-between align-items-center';
        taskItem.innerHTML = `
            <div>
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleStatus(${index})">
            <span style="${task.completed ? 'text-decoration: line-through' : ''}">${task.description}</span>
            </div>
            <button class='btn btn-danger btn-sm delete-btn' onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function deleteTask(index) {
    taskArray.splice(index, 1);
    saveToLocalStorage();
    renderTask();
}

function toggleStatus(index) {
    taskArray[index].completed = !taskArray[index].completed;
    saveToLocalStorage();
    renderTask();
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(taskArray));
}


