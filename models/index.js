import mongoose from 'mongoose';
import gradesModel from './gradesModel.js';

const URL_DB = 'mongodb+srv://valentim:qpal01qpal01@valentim-ww9xz.mongodb.net/bootcamp?retryWrites=true&w=majority';

const db = {
  mongoose: mongoose,
  url: URL_DB,
};

db.grades = gradesModel(mongoose);

export { db };
