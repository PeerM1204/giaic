import inquirer from "inquirer";
let answers = await inquirer.prompt({
    name: "age",
    type:"number",
    message:"Enter Your age"
});
console.log("Insha Allah, in " + (60 - answers.age) + " Years, You will be 60 Years old.");