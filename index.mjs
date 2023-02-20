import inquirer from "inquirer";
import fs from "fs";


let response = await inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "What is the description of your project?"
            },
            {
                type: "input",
                name: "installation",
                message: "What are the steps required to install your project?"
                },
                {
                    type: "input",
                    name: "usage",
                    message: "Provide instructions and examples for use."
                    },
                    {
                        type: "list",
                        name: "license",
                        message: "Choose a license for your project.",
                        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]  
                        },
                        {
                            type: "input",
                            name: "contributing",
                            message: "What are the guidelines for contributing to your project?"
                            },
                            {
                                type: "input",
                                name: "tests",
                                message: "What are the tests for your project?" 
                                },
                                {
                                    type: "input",
                                    name: "username",
                                    message: "What is your GitHub username?"
                                    },
                                    {
                                        type: "input",
                                        name: "email",
                                        message: "What is your email address?"
                                        },
                                        
       
])

console.log(response);

        
                                        //.then((answers) => {  
                                            
                                        //     console.log(answers);
                                        
                                        //     fs.writeFile("README.md", generateMarkdown(answers), (err) => {
                                        
                                        //         if (err) {
                                        
                                        //             console.log(err);
                                        
                                        //         } else {
                                        
                                        //             console.log("Successfully wrote to README.md");
                                        
                                        //         }
                                        
                                        //     });
                                        
                                        // });
                                        
                                        //.then((answers) => {  
                                        
                                        //     console.log(answers);
                                        
                                        //     fs.writeFile("README.md", generateMarkdown(answers), (err) => {
                                        
                                        //         if (err) {
                                        
                                        //             console.log(err);
                                        
                                        //         } else {
                                        
                                        //             console.log("Successfully wrote to README.md");
                                        
                                        //         }
                                        
                                        //     });
                                        
                                        // });
                                        
                                        //.then((answers) => {  
                                        
                                        //     console.log(answers);
                                        
                                        //     fs.writeFile("README.md", generateMarkdown(answers), (err) => {
                                        
                                        //         if (err) {
                                        
                                        //             console.log(err);
                                        
                                        //         } else {
                                        
                                        //             console.log("Successfully wrote to README.md");
                                        
                                        //         }
                                        
                                        //     });
                                        
                                        // });
                                        
                                        //.then((answers) => {  
                                        
                                        //     console.log(answers);
                                        
                                        //     fs.writeFile("README.md", generateMarkdown(answers), (err) => {
                                        
                                        //         if (err) {
                                        
                                        //             console.log(err);
                                        
                                        //         } else {
                                        
                                        //             console.log("Successfully wrote to README.md");

