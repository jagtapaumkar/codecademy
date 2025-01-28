# To-Do Web App Fix Project

This project involves completing a **to-do web app** by fixing missing Flexbox properties in the CSS. The structure is provided with an intact `HTML` and partially completed `CSS`. Your task is to analyze and apply Flexbox properties to align, center, and style the layout as per design expectations.

---

## Table of Contents
- [Overview](#overview)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Fixing the App](#fixing-the-app)
- [Sample Output](#sample-output)
- [Learnings](#learnings)
- [Future Enhancements](#future-enhancements)

---

## Overview
This project focuses on:
1. Learning and applying Flexbox to style web apps.
2. Understanding Flexbox properties such as `display: flex`, `justify-content`, `align-items`, and more.
3. Completing the styling for a functional to-do web app where users can view and interact with tasks.

---

## How It Works
1. The HTML file defines the structure of the app, including a header, a task input form, and a list of tasks.
2. The CSS file uses Flexbox to style the layout and ensure proper alignment.
3. The goal is to fix missing CSS Flexbox properties so the app renders correctly and looks visually appealing.

---

## Technologies Used
- **HTML**: For the structure of the to-do app.
- **CSS (Flexbox)**: For layout and design.
- **JavaScript** (optional): For additional interactivity like adding or removing tasks.

---

## Getting Started
1. Clone or download the repository containing the `index.html` and `style.css` files.
2. Open the project in your preferred code editor.
3. Open the `index.html` file in your browser to see the current state of the app.

---

## Fixing the App

Here are common Flexbox fixes you may need to apply in the `style.css` file:

### 1. Center Aligning the App
```css
/* Center the entire app vertically and horizontally */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
}
```

### 2. Aligning the Header and Task Form
```css
/* Make the header and task form stack neatly */
.header, .task-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
```

### 3. Styling the Task List
```css
/* Make tasks stack vertically with some spacing */
.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
}
```

### 4. Styling Individual Task Items
```css
/* Align task text and buttons */
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
```

### 5. Fixing Button Placement
```css
/* Ensure buttons align properly */
button {
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #3700b3;
}
```

---

## Sample Output
Once fixed, the to-do app should:
- Be centered on the screen.
- Have a header aligned properly with the form input and buttons.
- Display tasks stacked vertically with space between them.
- Show buttons aligned neatly to the right of each task.

---

## Learnings
- **Flexbox Properties**: 
  - `justify-content`: Aligns items horizontally (e.g., center, space-between).
  - `align-items`: Aligns items vertically (e.g., center, stretch).
  - `flex-direction`: Defines the layout direction (row or column).
  - `gap`: Adds spacing between Flexbox items.
- **CSS Styling**: Enhancing the look of tasks and buttons.
- **Responsive Design**: Ensuring the app is well-aligned on all screen sizes.

---

## Future Enhancements
- **JavaScript Functionality**:
  - Add interactivity (e.g., add, delete, or mark tasks as completed).
- **Mobile Responsiveness**:
  - Improve styling for smaller screens using media queries.
- **Dark Mode**:
  - Provide a toggle for light and dark mode themes.

---

## License
This project is open-source under the [MIT License](LICENSE).

---

Enjoy fixing and enhancing your to-do app!
