let fs = require("fs")

let g = fs.readFileSync("tareas.json","utf-8");

let t = JSON.parse(g)

let a = process.argv[1]

console.log(t)

