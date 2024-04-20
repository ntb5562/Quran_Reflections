import mongoose, {Schema} from "mongoose";

const QuoteSchema = new Schema({
  surah: String,
  verse: Number,
  quote: String,
  themes: [String] 
});

const Quote = mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);

export default Quote;