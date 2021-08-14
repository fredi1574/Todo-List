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
  let deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    newTask.remove();
  });

  deleteButton.innerHTML = "X";
  newTask.innerHTML = textBox.value;

  newTask.appendChild(deleteButton);
  container.appendChild(newTask);

  textBox.value = "";
});
