import { readFile, writeFile } from "./fileHelpers.js";

const dbPath = "db/db.txt";

function updateStudent(rl) {
  rl.question("Enter student id to update: ", (idInput) => {
    const id = Number(idInput);

    rl.question("Enter fields to update: ", (fieldsInput) => {
      const fieldsToUpdate = JSON.parse(fieldsInput);

      readFile(dbPath).then(students => {
        for (let i = 0; i < students.length; i++) {
          if (students[i].id === id) {
            for (const key in fieldsToUpdate) {
              students[i][key] = fieldsToUpdate[key];
            }
            break;
          }
        }

        return writeFile(dbPath, students);
      }).then(() => {
        console.log("Student updated successfully.");
        rl.close();
      });
    });
  });
}

export default updateStudent;
