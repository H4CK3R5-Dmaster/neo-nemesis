import inquirer from "inquirer";
import fs from 'fs'
import mysql from 'mysql2/promise';

function init_shell() {
  console.clear();
  console.log(
    "*******************************",
    "*******************************",
    "*******************************\n\n"
  );
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
  console.log(
    "\t███    ██ ███████ ███████         ███    ██ ███████ ███    ███ ███████ ███████ ██ ███████ "
  );
  console.log(
    "\t████   ██ ██      ██   ██         ████   ██ ██      ████  ████ ██      ██      ██ ██      "
  );
  console.log(
    "\t██ ██  ██ █████   ██   ██ ███████ ██ ██  ██ █████   ██ ████ ██ █████   ███████ ██ ███████ "
  );
  console.log(
    "\t██  ██ ██ ██      ██   ██         ██  ██ ██ ██      ██  ██  ██ ██           ██ ██      ██ "
  );
  console.log(
    "\t██   ████ ███████ ███████         ██   ████ ███████ ██      ██ ███████ ███████ ██ ███████ "
  );
  console.log("\n");
  console.log("\t\t\t\t-HOW ABOUT CHECKING FILE PROPERTIES ?-");
  console.log("\t\t\t\t-v1.2 Nemesis Group-");
  console.log("\n");
  console.log(
    "*******************************",
    "*******************************",
    "*******************************\n\n"
  );
  console.log("\t\t\t\t - Monitoring installer -\n\n");
}

async function show_menu() {
    console.log("Creation user for database :\n")
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

    },
    {
        type: "input",
        name: "userdbmysql",
        message: "Write the username mysql (root recommanded) : "
    },
    {
        type: "password",
        name: "passworddbmysql",
        message: "Write the password mysql (root recommanded) : "
    },
    
  ]);

  write_config(question.name, question.password, question.userdbmysql, question.passwordrootmysql)
  
}
function write_config(userdb: string, passdb: string, userrootmysql: string, passwordrootmysql: string) {
    const data = {
        name: userdb,
        password: passdb
    }
    const jsonData = JSON.stringify(data, null, 2)
    fs.writeFile('configs.json', jsonData, (err) => {
        if(err) {
            console.error('An error occurred while writing to the file : ', err)
        } else {
            create_user_db(userdb, passdb, userrootmysql, passwordrootmysql)
            console.log('\nData successfully written to configs.json\n')
        }
    })
}

async function connectionDB(userrootmysql: string, passwordrootmysql: string) {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: userrootmysql, 
            password: passwordrootmysql 
        });

        console.log('Connected to the MySQL server.\n');
        return connection;
    } catch (err) {
        console.error('Error connecting to the database:', err);
        throw err;
    }
}
async function create_user_db(username: string, passwd: string, userrootmysql: string, passwordrootmysql: string) {
    const connection = await connectionDB(userrootmysql, passwordrootmysql);
    try {
        const query = `CREATE USER '${username}'@'localhost' IDENTIFIED BY '${passwd}'`;
        await connection.execute(query, [username, passwd]);
        console.log('MySQL user created successfully.\n');
        const grantPrivilegesQuery = `GRANT ALL PRIVILEGES ON nemesisbdd.* TO '${username}'@'localhost'`;
        await connection.execute(grantPrivilegesQuery, [username]);
        console.log(`Granted all privileges on nemesisbdd to ${username}.`);
        const flushPrivilegesQuery = `FLUSH PRIVILEGES`;
        await connection.execute(flushPrivilegesQuery);
        console.log('Privileges flushed.');
    } catch (err) {
        console.error('An error occurred while creating the MySQL user:', err);
    } finally {
        await connection.end();
    }
}

function princip_menu() {
  init_shell();
  show_menu();
}

princip_menu();
