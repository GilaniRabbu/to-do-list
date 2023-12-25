const input = document.getElementById('input-box');
const TodoList = document.getElementById('todo-list');

function addTask() {
    if (input.value === "") {
        alert('Please Enter Task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        TodoList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

TodoList.addEventListener("click", (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', TodoList.innerHTML);
}

function showTask() {
    TodoList.innerHTML = localStorage.getItem('data');
}
showTask();