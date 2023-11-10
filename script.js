function addTask() {
	let taskText = document.getElementById("taskInput").value;
	if (taskText === "") return;

	let li = document.createElement("li");
	li.textContent = taskText;
	li.addEventListener("click", markCompleted);

	document.getElementById("taskList").appendChild(li);
	document.getElementById("taskInput").value = "";
}

function markCompleted(event) {
	event.target.classList.toggle("completed");
}

function filterTasks(filter) {
	let tasks = document.getElementById("taskList").children;
	for (let i = 0; i < tasks.length; i++) {
		switch (filter) {
			case "all": tasks[i].style.display = ""; // Corrected this line
				break;
			case "completed":
				tasks[i].classList.contains("completed")
					? (tasks[i].style.display = "")
					: (tasks[i].style.display = "none");
				break;
			case "incomplete":
				!tasks[i].classList.contains("completed")
					? (tasks[i].style.display = "")
					: (tasks[i].style.display = "none");
				break;
		}
	}
}