#! /usr/bin/env node

import { log } from "console";
import inquirer from "inquirer"

const answer: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: ",

    }
])

// split answer ko array bna kr string me print kre ga or double quot me space remove krne se hr word ko count kre ga 
const words = answer.sentence.trim().split(" ")

// print the array of words to the console
console.log(words);

// print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);