import inquirer from "inquirer";
import fs from 'fs';
function init_shell() {
    console.clear();
    console.log("*******************************", "*******************************", "*******************************\n\n");
    console.log("\t\t\t\t⠀⠀⠀⠀⠀⠀⠀⠀  ⢀⣀⣤⣤⣤⣤⣴⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
    console.log("\t\t\t\t⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⠿⠛⠋⠉⠁⠀⠀⠀⠈⠙⠻⢷⣦⡀⠀⠀⠀⠀⠀⠀");
    console.log("\t\t\t\t⠀⠀⠀⠀⠀⣤⣾⡿⠋⠁⠀⣠⣶⣿⡿⢿⣷⣦⡀⠀⠀⠀⠙⠿⣦⣀⠀⠀⠀⠀");
    console.log("\t\t\t\t⠀⠀⢀⣴⣿⡿⠋⠀⠀⢀⣼⣿⣿⣿⣶⣿⣾⣽⣿⡆⠀⠀⠀⠀⢻⣿⣷⣶⣄⠀");
    console.log("\t\t\t\t⠀⣴⣿⣿⠋⠀⠀⠀⠀⠸⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⠀⠀⠀⠐⡄⡌⢻⣿⣿⡷");
    console.log("\t\t\t\t⢸⣿⣿⠃⢂⡋⠄⠀⠀⠀⢿⣿⣿⣿⣿⣿⣯⣿⣿⠏⠀⠀⠀⠀⢦⣷⣿⠿⠛⠁");
    console.log("\t\t\t\t⠀⠙⠿⢾⣤⡈⠙⠂⢤⢀⠀⠙⠿⢿⣿⣿⡿⠟⠁⠀⣀⣀⣤⣶⠟⠋⠁⠀⠀⠀");
    console.log("\t\t\t\t⠀⠀⠀⠀⠈⠙⠿⣾⣠⣆⣅⣀⣠⣄⣤⣴⣶⣾⣽⢿⠿⠟⠋⠀⠀⠀⠀⠀⠀⠀");
    console.log("\t\t\t\t⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠙⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
    console.log("\n");
    console.log("\t███    ██ ███████ ███████         ███    ██ ███████ ███    ███ ███████ ███████ ██ ███████ ");
    console.log("\t████   ██ ██      ██   ██         ████   ██ ██      ████  ████ ██      ██      ██ ██      ");
    console.log("\t██ ██  ██ █████   ██   ██ ███████ ██ ██  ██ █████   ██ ████ ██ █████   ███████ ██ ███████ ");
    console.log("\t██  ██ ██ ██      ██   ██         ██  ██ ██ ██      ██  ██  ██ ██           ██ ██      ██ ");
    console.log("\t██   ████ ███████ ███████         ██   ████ ███████ ██      ██ ███████ ███████ ██ ███████ ");
    console.log("\n");
    console.log("\t\t\t\t-HOW ABOUT CHECKING FILE PROPERTIES ?-");
    console.log("\t\t\t\t-v1.2 Nemesis Group-");
    console.log("\n");
    console.log("*******************************", "*******************************", "*******************************\n\n");
    console.log("\t\t\t\t - Monitoring installer -\n\n");
}
async function show_menu() {
    console.log("Creation user for database :\n");
    const question = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of user mysql do you want ?",
        },
        {
            type: "password",
            name: "password",
            message: "Write his password : "
        }
    ]);
    write_config(question.name, question.password);
}
function write_config(userdb, passdb) {
    const data = {
        name: userdb,
        password: passdb
    };
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('configs.json', jsonData, (err) => {
        if (err) {
            console.error('An error occurred while writing to the file : ', err);
        }
        else {
            console.log('Data successfully written to configs.json');
        }
    });
}
function princip_menu() {
    init_shell();
    show_menu();
}
princip_menu();
