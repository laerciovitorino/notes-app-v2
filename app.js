import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getNotes } from './notes.js';

yargs()
  .command(
    'add',
    'Add a new note',
    function (yargs) {
      console.log('Adding a new note!');
    }
  )
  .command(
    'remove',
    'Remove a note',
    function (yargs) {
      console.log('Removing the note');
    }
  )
  .command(
    'list',
    'List your notes',
    function (yargs) {
      console.log('Listing out all notes');
    }
  )
  .command(
    'read',
    'Read a note',
    function (yargs) {
      console.log('Reading a note');
    }
  )
  .parse(hideBin(process.argv));