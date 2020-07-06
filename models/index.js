import mongoose from 'mongoose';
import gradesModel from './gradesModel.js';

const db = {
  mongoose: mongoose,
  url: process.env.MONGODB,
};

db.grades = gradesModel(mongoose);

export { db };
