const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const printMsg = require('./msg');

let msg = printMsg();

console.log(msg);

const myEmail = 'intergo878@gmail.com'

console.log(validator.isEmail(myEmail));

console.log(chalk.bgRedBright.bold('LACASA DE PAPEL'));

console.log(yargs.argv.username)

yargs.command({
    command: 'delete',
    describe: 'Delete record...',
    builder: {
        title: {
            describe: 'title to delete',
            alias: 't',
            demandOption: false,
            type: 'string',
        },
        username: {
            describe: 'username to log',
            alias: 'un',
            demandOption: true,
            type: 'string',
            default: 'Zia khan'
        },
    },
    handler: (argv) => {
        console.log('Deleting Record by', argv.username)
    }
});

yargs.parse();