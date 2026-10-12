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
    handler(argv) {
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
    handler(argv) {
      removeNote(argv.title)
    }
  })
  .command({
    command: 'list',
    describe: 'List your notes',
    handler(argv) {
      console.log('Listing out all notes');
    }
  })
  .command({
    command: 'read',
    describe: 'Read a note',
    handler(argv) {
      console.log('Reading a note');
    }
  })
  .parse(hideBin(process.argv));