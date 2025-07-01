import { readFile } from "./fileHelpers.js";

const dbPath = "db/db.txt";

function readStudents(rl) {
  readFile(dbPath).then((students) => {
    console.log("Students list:");
    console.log(students);
    rl.close();
  });
}

export default readStudents;
