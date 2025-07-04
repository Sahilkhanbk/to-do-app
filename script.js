const input = document.querySelector(".input-box")
const ulTask = document.querySelector(".task")
const btn = document.querySelector(".btn")
// const deleteE = document.querySelector(".delete")

btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.className = "lists"
    li.textContent = input.value;

    ulTask.appendChild(li)

    let span = document.createElement("span");

    let deleteB = document.createElement("button");
    deleteB.className = "delete";
    deleteB.textContent = "";

    let complete = document.createElement("button");
    complete.className = "complete";
    complete.textContent = "";

    li.appendChild(deleteB)
    li.appendChild(complete)

    input.value = "";

    deleteB.addEventListener("click", () => {
        ulTask.removeChild(li)
    })

    complete.addEventListener("click", ()=>{
        li.style.textDecoration = "line-through";
        li.style.color = "green";
    })
})



