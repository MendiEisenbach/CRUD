import { readFile, writeFile } from "./fileHelpers.js";

const dbPath = "db/db.txt";

function deleteStudent(rl) {
  rl.question("Enter student id to delete: ", (idInput) => {
    const id = Number(idInput);

    readFile(dbPath)
      .then((students) => {

        const filteredStudents = students.filter(student => student.id !== id);
        return writeFile(dbPath, filteredStudents);
      })
      .then(() => {
        console.log("Student deleted successfully.");
        rl.close();

      })
      .catch((err) => {
        console.error("Error deleting student:", err);
        rl.close();
      });
  });
}

export default deleteStudent;
