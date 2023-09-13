
const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8");
text =text.replace("Arvind" ,"Rahul");

console.log("the content of the file is ");
console.log(text);
console.log("creating a new file .......")
fs.writeFileSync("rahul.txt",text)