// db.mjs
import mongoose from 'mongoose';

console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI);

//schema
const Quote = new mongoose.Schema({
  surah: String,
  verse: Number,
  ayat: String,
  themes: [String] 
});

const User = new mongoose.Schema({
  username: String,
  // hash: // a password hash,
  reflections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reflections' }], // an array of references to Reflections documents
  quotes: [
    { surah: " ", verse: " ", ayat: "", themes: []},
    { surah: " ", verse: " ", ayat: "", themes: []},
  ], //embeded
});

const Reflections = new mongoose.Schema({
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],// a reference to a User object
  quotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quote' }], // an array of references to Quotes documents
  createdAt: new Date(0)
});

// "register" it so that mongoose knows about it
mongoose.model('Quote', Quote);
mongoose.model('User', User);
mongoose.model('Reflections', Reflections);