const textBox = document.getElementById("inputBox");
const addButton = document.getElementById("addButton");
const container = document.getElementById("mainContainer");

addButton.addEventListener("click", () => {
  if (textBox.value === "") {
    textBox.classList.add("shake");
    textBox.placeholder = "You need to enter a task!";
    setTimeout(() => {
      textBox.placeholder = "Enter a task...";
      textBox.classList.remove("shake");
    }, 820);
    return;
  }

  let newTask = document.createElement("li");
  /////////////////////////
  newTask.classList.add("tasks");
  newTask.value = textBox.innerText;

  container.appendChild(newTask);
  /////////////////////////
  textBox.value = "";
});
