import * as fsPromises from "node:fs/promises";

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "names.json");

export async function getNamesJSON() {
  let data;
  let err: Error | undefined;

  try {
    const interimData = await fsPromises.readFile(filePath, {
      encoding: "utf8",
    });
    data = JSON.parse(interimData);
  } catch (err) {
    err = err;
  }

  return [data, err] as const;
}

export function saveNamesJSON(fileObject: any) {
  let data;
  let err: Error | undefined;

  try {
    fsPromises.writeFile(filePath, JSON.stringify(fileObject, null, 2), {
      encoding: "utf8",
    });
    data = { msg: "Names file updated successfully." };
  } catch (err) {
    err = err;
  }

  return [data, err] as const;
}

// export function saveNamesJSON(fileObject: any) {
//   fs.writeFileSync(filePath, JSON.stringify(fileObject, null, 2), "utf8");
// }
