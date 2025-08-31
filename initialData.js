document.addEventListener("DOMContentLoaded", () => {
  const tasks = [
    {
      id: 1,
      title: "Launch Epic Career 🚀",
      description: "Create a killer Resume",
      status: "todo",
    },
    {
      id: 2,
      title: "Master JavaScript 💛",
      description: "Get comfortable with the fundamentals",
      status: "doing",
    },
    {
      id: 3,
      title: "Keep on Going 🏆",
      description: "You're almost there",
      status: "doing",
    },
    {
      id: 11,
      title: "Learn Data Structures 📚",
      description: "Practice coding problems",
      status: "todo",
    },
    {
      id: 12,
      title: "Contribute to Open Source 🌐",
      description: "Collaborate and learn with others",
      status: "done",
    },
    {
      id: 13,
      title: "Build Portfolio Projects 🛠️",
      description: "Show off your skills!",
      status: "done",
    },
  ];

  const statuses = ["todo", "doing", "done"];
  const labels = { todo: "TODO", doing: "DOING", done: "DONE" };

  let currentTaskId = null;

  function makeTaskBox(task) {
    const box = document.createElement("div");
    box.className = "task-div";
    box.textContent = task.title;

    box.addEventListener("click", () => {
      openTaskModal(task.id);
    });

    return box;
  }

  function showTasks() {
    statuses.forEach((status) => {
      const column = document.querySelector(
        `.column-div[data-status="${status}"]`
      );
      if (!column) return;

      const container = column.querySelector(".tasks-container");
      container.innerHTML = ""; // clear old tasks

      const filteredTasks = tasks.filter((t) => t.status === status);

      // Add each task to the column
      filteredTasks.forEach((task) => {
        container.appendChild(makeTaskBox(task));
      });

      const header = column.querySelector(".columnHeader");
      header.textContent = `${labels[status]} (${filteredTasks.length})`;
    });
  }

  function createModalIfNeeded() {
    let modal = document.getElementById("task-modal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.id = "task-modal";
    modal.style.position = "fixed";
    modal.style.inset = "0";
    modal.style.display = "none";
    modal.style.placeItems = "center";
    modal.style.background = "rgba(0,0,0,0.5)";

    modal.innerHTML = `
      <div style="background:white;padding:16px;border-radius:8px;width:300px">
        <h3>Task Details</h3>
        <p><b>Title:</b> <span id="modal-title"></span></p>
        <p><b>Description:</b><br><span id="modal-description"></span></p>
        <p><b>Status:</b> <span id="modal-status"></span></p>
        <button id="close-modal">Close</button>
      </div>
    `;

    document.body.appendChild(modal);

    modal
      .querySelector("#close-modal")
      .addEventListener("click", closeTaskModal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeTaskModal();
    });

    return modal;
  }

  function openTaskModal(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    currentTaskId = taskId;
    const modal = createModalIfNeeded();

    modal.querySelector("#modal-title").textContent = task.title;
    modal.querySelector("#modal-description").textContent = task.description;
    modal.querySelector("#modal-status").textContent =
      task.status.toUpperCase();

    modal.style.display = "grid";
  }

  function closeTaskModal() {
    const modal = document.getElementById("task-modal");
    if (modal) modal.style.display = "none";
    currentTaskId = null;
  }

  showTasks();
});
