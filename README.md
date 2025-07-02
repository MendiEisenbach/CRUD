#  Node.js School CRUD – Terminal App

A simple Node.js project that simulates a **School Student Database** using file storage and terminal-based interaction.

---

##  Project Goal

Simulate a basic student management system using:

-  JSON-based file storage (`db.txt`)
-  Terminal menu via `readline`
-  Full **CRUD** support: Create, Read, Update, Delete

---

##  Folder Structure

```
school-crud/
├── app.js               # Main menu & entry point
├── db/
│   └── db.txt           # Stores all student records (starts as [])
├── modules/
│   ├── create.js        # Add a new student
│   ├── read.js          # Show all students
│   ├── update.js        # Update student fields
│   ├── delete.js        # Delete a student
│   └── fileHelpers.js   # Shared file read/write functions (with Promises)
└── README.md
```

---

##  How to Run

```bash
node app.js
```

You'll see a menu like this:

```
Select operation:
1. Create student
2. Read all students
3. Update student
4. Delete student
Enter choice:
```

---

##  Examples

###  Create a Student

```
Enter choice: 1
Enter student JSON: { "id": 1, "name": "Yossi", "grade": "A" }
```

###  Read All Students

```
Enter choice: 2
Students list:
[
  { "id": 1, "name": "Yossi", "grade": "A" },
  { "id": 2, "name": "Tamar", "grade": "B" }
]
```

###  Update a Student

```
Enter choice: 3
Enter student id to update: 2
Enter fields to update as JSON: { "grade": "A", "name": "David" }
```

###  Delete a Student

```
Enter choice: 4
Enter student id to delete: 1
```

---

##  Technical Notes

-  `create.js` and `read.js`: Use **callback-based** `fs.readFile` and `fs.writeFile`
-   `update.js` and `delete.js`: Use **custom Promise wrappers** (not `fs.promises`)
-  Modular structure: Each operation lives in its own file under `/modules`
-  Clean, readable code with proper separation of concerns
-  Database is just a simple `db.txt` file containing a JSON array: `[]`

---

##  Git Workflow

```bash
git checkout -b feature-name       # Create new branch
git add .                          # Stage changes
git commit -m "Meaningful message" # Commit
git push origin feature-name       # Push to GitHub
```

---

##  Example db.txt

```json
[
  { "id": 1, "name": "Yossi", "grade": "A" },
  { "id": 2, "name": "Tamar", "grade": "B" }
]
```

---

##  Inspired by

- Learning real-world CLI tools
- Practicing Node.js with files, Promises, and modules
- Building solid terminal experiences without external libraries

---

Built by Mendi Eisenbach
