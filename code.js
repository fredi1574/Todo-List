const textBox = document.getElementById("inputBox");
const addButton = document.getElementById("addButton");
const container = document.getElementById("mainContainer");

addButton.addEventListener("click", () => {
  if (textBox.value === "") {
    // if the textbox is empty
    textBox.classList.add("shake");
    textBox.placeholder = "You need to enter a task!";
    setTimeout(() => {
      textBox.placeholder = "Enter a task...";
      textBox.classList.remove("shake");
    }, 820);
    return;
  }

  let newTask = document.createElement("li");
  let tickButton = document.createElement("button");
  let deleteButton = document.createElement("button");

  newTask.addEventListener("click", () => {
    // newTask.innerHTML = "<input type='Text'/>";
  });

  tickButton.addEventListener("click", () => {
    newTask.classList.toggle("taskDone");
  });

  deleteButton.addEventListener("click", () => {
    newTask.remove();
  });

  tickButton.innerHTML = "<i class='far fa-check-circle'></i>";
  tickButton.classList.add("tickButton");

  deleteButton.innerHTML = "<i class='far fa-trash-alt'></i>";
  deleteButton.classList.add("deleteButton");

  newTask.innerHTML = textBox.value;

  newTask.appendChild(tickButton);
  newTask.appendChild(deleteButton);
  container.appendChild(newTask);

  textBox.value = "";
});
