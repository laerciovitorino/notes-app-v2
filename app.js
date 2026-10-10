import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addNote, removeNote, getNotes } from './notes.js';

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
      addNote(argv.title, argv.body)
    }
  })
  .command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler: function (argv) {
      removeNote(argv.title)
    }
  })
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