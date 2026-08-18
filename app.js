import chalk from 'chalk';
import { getNotes } from './notes.js';

const msg = getNotes();
console.log(msg);

const successMsg = chalk.green.bold('Success!');
console.log(successMsg);
