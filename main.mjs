function add_todo(event) {
    event.preventDefault(); // ENTER reload ko rokta hai

    const input = document.getElementById("todoInput");
    const result = document.querySelector(".result");

    if (input.value.trim() === "") return;

    const div = document.createElement("div");
    div.className = "singleTodo";

    div.innerHTML = `
        <p>${input.value}</p>
        <button onclick="delete_todo(event)">Delete</button>
        <button onclick="edit_todo(event)">Edit</button>
    `;

    result.appendChild(div);

    input.value = ""; // input clear
}

function delete_todo(event) {
    event.target.parentNode.remove();
}

function edit_todo(event) {
    const p = event.target.parentNode.querySelector("p");
    const newText = prompt("Edit todo", p.innerText);

    if (newText !== null && newText.trim() !== "") {
        p.innerText = newText;
    }
}


function toggleTheme() {
    document.body.classList.toggle("dark");

    const btn = document.querySelector(".theme-toggle");
    btn.textContent = document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";
}

