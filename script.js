const form = document.querySelector("#todo-form");
const textInput = document.querySelector("#input");
const tasksList = document.querySelector("#task-list");

// Add Task
const addTask = () => {
  const value = textInput.value.trim();
  if (!value) return;

  // DOM Manipulation*
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = value;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "complete-checkbox";

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  li.append(span, checkbox, deleteBtn);
  tasksList.append(li);

  textInput.value = "";
  textInput.focus();
};

// Handle form submit (Keyboard events (Enter key for adding))
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

// Event delegation for handling list item actions
tasksList.addEventListener("click", ({ target }) => {
  // Mark Task as Complete
  if (target.matches("input.complete-checkbox")) {
    target.closest("li").classList.toggle("completed", target.checked);
  }
  // Delete Task
  else if (target.matches("button.delete-btn")) {
    target.closest("li").remove();
  }
});
