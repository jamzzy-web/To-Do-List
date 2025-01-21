const addButton = document.getElementById('addBtn');
const inputField = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', function() {
    const task = inputField.value;
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        todoList.appendChild(li);
        inputField.value = '';
    }
});
