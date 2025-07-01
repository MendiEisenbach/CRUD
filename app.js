import readline from "readline";
import createStudent from "./modules/create.js";
import readStudents from "./modules/read.js";
import updateStudent from "./modules/update.js";
import deleteStudent from "./modules/delete.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("Select operation:");
console.log("1. Create student");
console.log("2. Read all students");
console.log("3. Update student");
console.log("4. Delete student");

rl.question("Enter choice: ", (choice) => {
  switch (choice) {
    case "1":
      createStudent(rl);
      break;
    case "2":
      readStudents(rl);
      break;
    case "3":
      updateStudent(rl);
      break;
    case "4":
      deleteStudent(rl);
      break;
    default:
      console.log("Invalid choice.");
      rl.close();
  }
});