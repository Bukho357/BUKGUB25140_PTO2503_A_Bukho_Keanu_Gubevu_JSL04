# JSL04 Project Brief: Dynamic Task Display & Modal View

## Overview

This project is a dynamic Kanban-style task board built with HTML, CSS, and JavaScript. It dynamically displays tasks from an initial dataset, categorizes them into columns based on status (To Do, In Progress, Done), and allows users to open a modal view to inspect and edit task details.

The project emphasizes DOM manipulation, modular code structure, event handling, and responsive UI design.

## Figma Design Link

Check the updated Figma Design: [Figma Link](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=0-1&p=f&t=Ki0CZk0RAjrk9Fhs-0)

## Features

✅ Dynamic Task Rendering – tasks are generated from initial data and placed in the correct column.

✅ Kanban Columns – tasks are sorted into TODO, DOING, and DONE.

✅ Interactive Task Cards – clicking a task opens a modal.

✅ Modal View with:

Task title & description display.

Status indicator (TODO, DOING, DONE).

Close button and backdrop click-to-close.

✅ Responsive Layout – works on both desktop and mobile.

✅ Maintainable Code – modular functions, meaningful variable names, JSDoc comments.

## 🛠️ Technologies Used

HTML5 – structure

CSS3 – styling and responsive design

Vanilla JavaScript (ES6) – DOM manipulation, event handling, modular code

## 📂 Project Structure

├── index.html # Main HTML file  
├── style.css # Stylesheet for layout and modal design  
├── script.js # JavaScript logic for tasks & modal  
├── README.md # Project documentation

## 🎮 Usage

Open the page in a browser.

The task board will display tasks sorted into their correct columns.

Click any task card → a modal will appear showing its details.

Close the modal using:

The Close button, or

Clicking outside the modal (on the backdrop).

## 📖 Example

Initial data includes tasks like:

🚀 Launch Epic Career → under TODO

💛 Master JavaScript → under DOING

🌐 Contribute to Open Source → under DONE

## Expected Outcome

A modal system that allows interaction with task details.

Clean, modular, and maintainable code following best practices.
