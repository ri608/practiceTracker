//logic blahblah
const assignments = [
  { course: "CSE 100", title: "assignment 1", due: "2026-10-24", completed: false },
  { course: "MAT 100", title: "assignment 2", due: "2026-10-21", completed: false },
  { course: "ENG 100", title: "assignment 4", due: "2026-10-31", completed: false },
  { course: "PHY 100", title: "assignment 3", due: "2026-10-28", completed: true },
];

function render() {
  const container = document.getElementById("assignment-list");
  container.innerHTML = "";
  const today = new Date().toISOString().slice(0, 10);

  const table = document.createElement("table");
  const header = table.insertRow();
  ["Done", "Course", "Assignment", "Due"].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    header.appendChild(th);
  });

  assignments.forEach((a) => {
    const row = table.insertRow();
    if (!a.completed && a.due < today) row.classList.add("overdue");

    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = a.completed;
    box.addEventListener("change", () => {
      a.completed = box.checked;
      render();
    });
    row.insertCell().appendChild(box);

    row.insertCell().textContent = a.course;
    row.insertCell().textContent = a.title;
    row.insertCell().textContent = a.due;
  });

  container.appendChild(table);
}

document.getElementById("add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  assignments.push({
    course: document.getElementById("course").value.trim(),
    title: document.getElementById("title").value.trim(),
    due: document.getElementById("due").value,
    completed: false,
  });
  e.target.reset();
  render();
});

render();
