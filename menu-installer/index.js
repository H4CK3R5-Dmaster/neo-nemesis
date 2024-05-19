import inquirer from "inquirer";
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
    console.log('\n');
    console.log("\t███    ██ ███████ ███████         ███    ██ ███████ ███    ███ ███████ ███████ ██ ███████ ");
    console.log("\t████   ██ ██      ██   ██         ████   ██ ██      ████  ████ ██      ██      ██ ██      ");
    console.log("\t██ ██  ██ █████   ██   ██ ███████ ██ ██  ██ █████   ██ ████ ██ █████   ███████ ██ ███████ ");
    console.log("\t██  ██ ██ ██      ██   ██         ██  ██ ██ ██      ██  ██  ██ ██           ██ ██      ██ ");
    console.log("\t██   ████ ███████ ███████         ██   ████ ███████ ██      ██ ███████ ███████ ██ ███████ ");
    console.log('\n');
    console.log("\t\t\t\t-HOW ABOUT CHECKING FILE PROPERTIES ?-");
    console.log("\t\t\t\t-v1.2 Nemesis Group-");
    console.log('\n');
    console.log("*******************************", "*******************************", "*******************************\n\n");
    console.log("\t\t\t\t - Monitoring installer -\n\n");
}
async function show_menu() {
    const question = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Hello who am i ?"
        },
        {
            type: "list",
            name: "listchoice",
            message: "Select",
            choices: ["mysql", "postgresql", "mongodb"]
        }
    ]);
    console.log(question.name);
    console.log(question.listchoice);
}
function princip_menu() {
    init_shell();
    show_menu();
}
princip_menu();
