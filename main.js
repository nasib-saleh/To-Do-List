const inputEl = document.getElementById("task");
const tasksEl = document.getElementById("tasks");
const btnEl = document.getElementById("add-task");

btnEl.addEventListener("click", ()=> {
	if(inputEl.value === "") {
		alert("Add task");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputEl.value;
		tasksEl.appendChild(li);
		let span = document.createElement("span");
		span.innerText = "\u00d7";
		li.appendChild(span);
	}
	inputEl.value = "";
	saveData();
})

tasksEl.addEventListener("click", (e) => {
	if(e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
		saveData();
	} else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();
		saveData();
	}
})

function saveData() {
	localStorage.setItem("data", tasksEl.innerHTML);
}
function showTask() {
	tasksEl.innerHTML = localStorage.getItem("data");
}
showTask()
