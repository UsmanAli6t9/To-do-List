
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// this function is used for add task in list
function addTask() {
    if (inputBox.value==='') {
        alert("you must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
// this function is used for remove all task from list
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.style.display = "none";
        saveData();
    }
}, false);
// this function is used for save data in local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
// this function is used for show data anytime when page is refreshed
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();