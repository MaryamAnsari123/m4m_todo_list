#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

//array
//function
//operators

//1) array

 let todos : string[] = [];

//2)function

async function buildTodo(todos:string[]) {
    do{
        let answer = await inquirer.prompt({
            type : "list",
            name : "select",
            message: chalk.blue.bold("select an option:"),
            choices: ["Add" , "Update" , "View" , "Delete"]
        })
        
        if (answer.select == "Add") {
                let addTodo = await inquirer.prompt({
                    type : "input",
                    name : "todo",
                    message:chalk.green.italic.bold("Kindly Add items in the list:")
                });
        
                todos.push(addTodo.todo);
                todos.forEach(todo => console.log(todo))
        }
        
        if (answer.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "update items in the List",
                choices: todos.map(item => item)
            });
        
            let addTodo = await inquirer.prompt({
                type : "input",
                name : "todo",
                message:chalk.green.italic.bold("Kindly Add items in the list:")
            });
        let newTodo = todos.filter(value => value !== updateTodo.todo);
        todos = [...newTodo,addTodo.todo];
        todos.forEach(todo => console.log(todo))
        }
        
        if (answer.select == "View") {
            console.log(chalk.red.bold("****TO DO LIST****"))
            todos.forEach(todo => console.log(todo))
            console.log(chalk.red.bold("****LIST END****"))
        }
        
        if (answer.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Delete items in the List",
                choices: todos.map(item => item)
            });
        
            let newTodo = todos.filter(value => value !== deleteTodo.todo);
                todos = [...newTodo];
                todos.forEach(todo => console.log(todo))
        } 
            
    } while(true)

}

buildTodo(todos);

