const container = document.querySelector(".container")
const card = document.querySelector(".index")
const input = document.querySelector("#input-box")
const button = document.querySelector("#button")
const task = document.querySelector(".task-list")

button.addEventListener("click", () => {
    const li = document.createElement("li")
    li.className = "li-task"
    li.innerHTML = input.value;
    task.appendChild(li)
    input.value = ""

})