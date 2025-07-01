import fs from "fs";

// כאן יכתבו פונקציות כלליות


export const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(JSON.parse(data));
    });
  });

}



export const writeFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data), (err) => {
      if (err) reject(err);
      else resolve();
    })}
)
};

