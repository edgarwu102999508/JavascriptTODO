const taskInput = document.querySelector(".taskInput");
const addBtn = document.querySelector(".addBtn");
const clearBtn = document.querySelector(".clearBtn");
const selection = document.querySelector("#selection");
const categoryA = document.querySelector(".toDoList-1");
const categoryB = document.querySelector(".toDoList-2");
const categoryC = document.querySelector(".toDoList-3");
// const checkBox = document.querySelector(".taskList");

// Load all event listeners
loadEventListener();

// Load all event listeners
function loadEventListener() {
  // Add task event
  addBtn.addEventListener("click", addTask);

  // Add clear task event
  clearBtn.addEventListener("click", clearTask);

  // Category selection event
  selection.addEventListener("change", selectCategory);

  // Add task list event
  categoryA.addEventListener("click", removeTask);
  categoryB.addEventListener("click", removeTask);
  categoryC.addEventListener("click", removeTask);

  // checkBox.addEventListener("change", checkTask);
}

function selectCategory(e) {
  if (selection.selectedIndex === 0) {
    addTask(e);
  } else if (selection.selectedIndex === 1) {
    addTask(e);
  } else {
    addTask(e);
  }
  e.preventDefault();
}

function addTask(e) {
  if (taskInput.value === "") {
    return;
  }
  // Create li element
  const li = document.createElement("li");
  li.id = "listItem";

  // Create cheakbox
  li.innerHTML = '<input class="check" type="checkbox" />';

  // Create del button
  const a = document.createElement("a");
  a.className = "removeTask";
  a.href = "#";
  a.innerHTML = '<i class="fa fa-times text-danger"></i>';

  // Append element to li
  li.appendChild(document.createTextNode(taskInput.value));
  li.appendChild(a);

  // Append li to ul
  if (selection.selectedIndex === 0) {
    categoryA.appendChild(li);
  } else if (selection.selectedIndex === 1) {
    categoryB.appendChild(li);
  } else {
    categoryC.appendChild(li);
  }

  // Clear input
  taskInput.value = "";
  e.preventDefault();
}

function clearTask(e) {
  if (confirm("Do you really want to clear todo list?")) {
    categoryA.innerHTML = "";
    categoryB.innerHTML = "";
    categoryC.innerHTML = "";
    e.preventDefault();
  }
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("removeTask")) {
    if (confirm("Are you Sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// function checkTask(e) {
//   if (e.target.classList.contains("check")) {
//     if (checkTask.checked == true) {
//       console.log("good");
//     } else {
//       e.target.sytle.color = "black";
//     }
//   }
// }
