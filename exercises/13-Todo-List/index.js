// Your code here
const input = document.getElementById("addToDo");
const list = document.querySelector("ul");

input.addEventListener('keydown', addTask);
list.querySelectorAll(".fa-trash").forEach(deleteEvent);

function addTask(ev) {
    if (ev.key === "Enter") {
        let val = ev.target.value;
        list.appendChild(newLi(val));
    }
}

function deleteTask(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let li = ev.target.closest('li');
    li.parentNode.removeChild(li);
}

function newLi(texto) {
    let li = document.createElement("li")
    li.innerHTML = "<span><i class='fa fa-trash'></i></span> " + texto;
     deleteEvent(li.querySelector(".fa-trash"));
    return li;
}

function deleteEvent(elem) {
    elem.addEventListener('click', deleteTask);
}
