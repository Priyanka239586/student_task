function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.className = "delete";

    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}