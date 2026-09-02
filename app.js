import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getNotes } from './notes.js';

yargs()
  .command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'
      }
    },
    handler: function (argv) {
      console.log('Title: ', argv.title);
      console.log('Boddy: ', argv.body);
    }
  })
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