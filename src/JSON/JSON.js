// JSON
// é um formato leve de trocar de dado

import {  writeFileSync, readFileSync  } from "node:fs"


const person = {
    name: "Carlos",
    age: 16
}

const stringJson = readFileSync("./newperson.json", "utf-8");
console.log(stringJson);

const json = JSON.parse(stringJson)
console.log(json)