import { useState } from "react";

import Container from "react-bootstrap/Container";
import { ssrImportKey } from "vite/runtime";

export default function Padawans() {
  const instructor = "Brandt";

  const students = ["Cali", "Robin", "Des", "Sai"];

  const [studentSelected, setStudentSelected] = useState("?");
  console.log(studentsSelected);

  function getRandomStudent() {
    return students[Math.floor(Math.random() * students.length)];
  }

  return (
    <Container>
      <p>Instructor {instructor}</p>
      <div>
        <p>Today's WhiteBoard: {studentsSelected}</p>
        <button
          onClick={() => {
            setStudentSelected(getRandomStudent());
          }}>
          Student Picker
        </button>
      </div>
    </Container>
  );
}
