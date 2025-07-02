import fs from "fs";

const dbPath = "db/db.txt";

function readStudents(rl) {
  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error:", err);
      rl.close();
      return;
    }

    const students = JSON.parse(data);
    console.log("Students list:");
    console.log(students);
    rl.close();
  });
}

export default readStudents;
