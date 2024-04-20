import connectDB from "@/lib/mongo";
import Quote from "@/models/quotesDB";

export default async function handler(req, res) {
  const {surah, verse, quote, themes} = req.body;
  const id = {message:"Quote added",surah, verse, quote, themes};
  try {
    await connectDB();
    const savedQuote = new Quote({surah,verse,quote,themes});
    await savedQuote.save();
    res.status(200).json(id);
  }catch (error){
    console.log("error added quote");
  }

}