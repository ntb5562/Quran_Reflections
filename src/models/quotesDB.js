import mongoose, {Schema} from "mongoose";

const ReflectionSchema = new Schema(
  {text: String,},
  {timestamps:true}
);

export const Reflection = mongoose.models.Reflection || mongoose.model("Reflection", ReflectionSchema);

const QuoteSchema = new Schema({
  surah: String,
  verse: Number,
  quote: String,
  themes: [String] ,
  reflections: ReflectionSchema,
});

export const Quote = mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);

