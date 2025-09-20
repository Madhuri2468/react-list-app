export default function App() {
  // Array of student names
  const students = [
    { id: 1, name: "Manu" },
    { id: 2, name: "Madhuri" },
    { id: 3, name: "Koti" },
    { id: 4, name: "Giridhar" },
    { id: 5, name: "Hello" }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Student List</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((student) => (
          <li
            key={student.id} // unique key prop
            style={{
              margin: "0.5rem",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          >
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
