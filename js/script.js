// Added a console log for debugging and confirmation
console.log("Student Info Portal script is running successfully.");

// Handle form submission
const form = document.getElementById('studentForm');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const course = document.getElementById('course').value.trim();

    if (!name || !age || !course) {
      document.getElementById('message').textContent = "All fields are required!";
      return;
    }

    // Get existing students from localStorage
    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Add new student
    students.push({ name, age, course });

    // Save back to localStorage
    localStorage.setItem('students', JSON.stringify(students));

    document.getElementById('message').textContent = "Student added successfully!";

    // Clear form
    form.reset();
  });
}

// Display students on students.html
const tableBody = document.getElementById('studentTableBody');
if (tableBody) {
  const students = JSON.parse(localStorage.getItem('students')) || [];
  
  if (students.length === 0) {
    tableBody.innerHTML = "<tr><td colspan='3'>No students found.</td></tr>";
  } else {
    students.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
      `;
      tableBody.appendChild(row);
    });
  }
}
