#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let pin = 12345;
let pinAnswer = await inquirer.prompt([{
        name: "q1",
        type: "number",
        message: "enter your pin code"
    }]);
if (pinAnswer.q1 === pin) {
    console.log("your pin code is correct");
    let opr = await inquirer.prompt([{
            name: "operators",
            type: "list",
            message: "select one option : ",
            choices: ["withdraw", "check balance"]
        }]);
    if (opr.operators === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "enter the amount you want to withdraw"
            }]);
        if (amountAns.amount < balance) {
            balance -= amountAns.amount;
            console.log("now your balance is " + balance);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (opr.operators === "check balance") {
        console.log("your current balance is " + balance);
    }
}
else {
    console.log("invalid pin code");
}
