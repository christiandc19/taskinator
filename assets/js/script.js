var buttonEL = document.querySelector("#save-task");
var parentList = document.querySelector(".task-list")
console.log(buttonEL);

buttonEL.addEventListener("click", function() {
    alert("button was clicked");
});

var taskItemEl = document.createElement("li");
taskItemEl.textContent = "Hello";

parentList.appendChild(taskItemEl);

