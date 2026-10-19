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

  const table = document.createElement("table");
  const header = table.insertRow();
  ["Course", "Assignment", "Due", "Done"].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    header.appendChild(th);
  });

  assignments.forEach((a) => {
    const row = table.insertRow();
    row.insertCell().textContent = a.course;
    row.insertCell().textContent = a.title;
    row.insertCell().textContent = a.due;
    row.insertCell().textContent = a.completed ? "Yes" : "No";
  });

  container.appendChild(table);
}

render();
