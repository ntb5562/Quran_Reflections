import mongoose from 'mongoose';
mongoose.connect(process.env.DSN);

const UserSchema = new mongoose.Schema({
  username: String,
  //hash: // a password hash,
  reflections: [{type: mongoose.Types.ObjectId, ref: 'Reflection'}], // an array of references to Reflections documents
  quotes: {
    surah: String,
    verseNo: String,
    catagories: [],
  }, //embeded
});
const User = mongoose.model('User', UserSchema);

const QuoteSchema = new mongoose.Schema({
  surah: String,
  verseNo: String,
  catagories: [],
});
const Quote = mongoose.model('Quote', QuoteSchema);

const ReflectionSchema = new mongoose.Schema({
  quotes: [{type: mongoose.Types.ObjectId, ref: 'Quote'}],// an array of references to Quotes documents
  createdAt: Date // timestamp
});

const Reflection = mongoose.model('Reflection', ReflectionSchema);

module.exports = {
  User,
  Quote,
  Reflection,
};
