# StudentInfoPortal-2

A lightweight client-side web app for adding and viewing student information. The project uses plain HTML, CSS and JavaScript and stores data locally in the browser using localStorage. It's ideal as a learning project or a starter template for small demos.

## Demo
- Add students using the form and view all saved students on the records page. Data persists in your browser (localStorage) until cleared.

## Features
- Simple, responsive UI built with HTML/CSS
- Add student (name, age, course) via a form
- View all student records in a table
- Data persisted in browser `localStorage` (no back-end required)

## Files of interest
- `studentInfoPortal/index.html` — Home page
- `studentInfoPortal/form.html` — Add student form
- `studentInfoPortal/students.html` — Students table/view
- `js/script.js` — All client-side logic (handles form submit and reads/writes `localStorage`)
- `CSS/style.css`, `CSS/index.css`, `CSS/students.css` — Styling for pages

## How it works (quick)
- When you submit the form on `form.html`, the JavaScript in `js/script.js` collects the values and appends a student object to an array stored in `localStorage` under the key `students`.
- The `students.html` page reads that `students` array from `localStorage` and renders each entry into the table.

## How to run
You can open the pages directly in a browser (double-click `studentInfoPortal/index.html`) or serve the folder with a small HTTP server (recommended to avoid browser security restrictions when developing).

On Windows (PowerShell), if you have Python installed:

```powershell
cd 'c:\Users\ASUS\Documents\GitHub\StudentInfoPortal-2'
python -m http.server 8000
# Then open: http://localhost:8000/studentInfoPortal/index.html
```

If you use VS Code, the Live Server extension is a convenient option: right-click `studentInfoPortal/index.html` and choose "Open with Live Server".

## Data persistence and clearing
- Data is stored in the browser's `localStorage` under the key `students`.
- To clear all stored students, open the browser DevTools (F12) → Application (or Storage) → Local Storage → select the site origin and remove the `students` key.

## Notes & limitations
- This is a purely client-side demo. There's no authentication and no back-end; don't use it for sensitive or production data.
- Validation is minimal — the form checks for empty fields but does not sanitize or deeply validate input types.

## Development / Contribution
- To change behavior edit `js/script.js`.
- To change styles edit files under `CSS/`.
- Create issues or pull requests if you want to add features (export/import, edit/delete, search, server persistence).

## Troubleshooting
- If students do not appear after adding them:
	- Make sure JavaScript is enabled in your browser.
	- Check the console (F12 → Console) for errors; `js/script.js` logs a startup message.
	- If you opened pages as `file://` and encounter restrictions, try serving via `python -m http.server` or Live Server.



---


