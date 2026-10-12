import fs from 'fs';
import chalk from 'chalk';

export const getNotes = () => {
  return "Your notes..."
}

export const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });

    saveNotes(notes);
    console.log(chalk.bgGreen("New note added!"));
  } else {
    console.log(chalk.bgRed("Note title taken!"));
  }
}

export const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  
  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed("No note found!"));
  }
}

export const listNotes = () => {
  const notes = loadNotes();
  
  console.log(chalk.greenBright("Your notes"));
  notes.forEach((note) => console.log(note.title));
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

