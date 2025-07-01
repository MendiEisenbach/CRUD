import { readFile, writeFile } from "./fileHelpers.js";

const dbPath = "db/db.txt";

function createStudent(rl)
 {
  rl.question("Enter student JSON: ", (input) => {
    const newStudent = JSON.parse(input);

    readFile(dbPath).then((students) => {
      students.push(newStudent);

      writeFile(dbPath, students).then(() => {
        console.log("Student added successfully.");
        rl.close();
  });
   });
});
}

export default createStudent;
