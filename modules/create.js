
import fs from "fs";

const dbPath = "db/db.txt";

function createStudent(rl) {
  rl.question("Enter student JSON: ", (input) => {
    const newStudent = JSON.parse(input);

    fs.readFile(dbPath, "utf8", (err, data) => {
      const students = JSON.parse(data);
      students.push(newStudent);

      fs.writeFile(dbPath, JSON.stringify(students), () => {
        console.log("Student added successfully.");
        rl.close();
      });
    });
  });
}


export default createStudent;