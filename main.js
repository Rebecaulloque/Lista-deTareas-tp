const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = text;
    p.className = "p-pendiente";

    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(addCompleteBtn());
    li.appendChild(addDeleteBtn());

    input.value = "";
    empty.style.display = "none";
  }
});

function addCompleteBtn() {
  const completeBtn = document.createElement("button");

  completeBtn.textContent = "✓";
  completeBtn.className = "btn-complete";

  completeBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    let itemParrafo =
      item.getElementsByClassName("p-pendiente").length == 1
        ? item.getElementsByClassName("p-pendiente")
        : item.getElementsByClassName("p-completada");


    if (itemParrafo[0].className == "p-pendiente") {
      itemParrafo[0].className = "p-completada";
    } else {
      itemParrafo[0].className = "p-pendiente";
    }

  });

  return completeBtn;
}

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;

    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}
