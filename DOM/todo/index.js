const tasks = [
  {
    id: 1,
    description: "make bed",
    isComplete: false,
  },
  {
    id: 2,
    description: "make dinner",
    isComplete: false,
  },
];
function renderTasks() {
  tasks.map((t) => {
    console.log(t);
    el = document.createElement("li");
    el.innerHTML = t.description;
    console.log(document.getElementById("task-list"));
    document.getElementById("task-list").appendChild(el);
  });
}

console.log("tasks:", tasks);
renderTasks();
function main() {}