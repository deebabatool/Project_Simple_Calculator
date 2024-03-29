#! /usr/bin/env node
import inquirer from "inquirer";
let calculator = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Please enter your first number",
    },
    {
        name: "num2",
        type: "number",
        message: "Please enter your second number",
    },
    {
        name: "num3",
        type: "list",
        message: "Select one operator",
        choices: ["Add", "Subtract", "Multiple", "Divide"],
    },
]);
if (calculator.num3 == "Add") {
    console.log("Addition : ", calculator.num1 + calculator.num2);
}
else if (calculator.num3 == "Subtract") {
    console.log("Subtraction : ", calculator.num1 - calculator.num2);
}
else if (calculator.num3 == "Multiple") {
    console.log("Multiplication: ", calculator.num1 * calculator.num2);
}
else if (calculator.num3 == "Divide") {
    console.log("Division: ", calculator.num1 / calculator.num2);
}
else {
    console.log("enter a valid number!");
}
