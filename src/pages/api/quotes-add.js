import connectDB from "@/lib/mongo";
import {Quote, Reflection} from "@/models/quotesDB";

import User from "@/models/userDB";

//adding new quotes based on user info
export default async function handler(req, res) {
  const {surah, verse, quote, themes,reflection} = req.body;
  console.log(reflection);
  const id = {message:"Quote added",surah, verse, quote, themes,reflection};
  try {
    await connectDB();
    let user = await User.findOne({ip: req?.socket?.remoteAddress });
    if (!user) {
      user = new User({ ip: req?.socket?.remoteAddress, quotes: []});
    }
    const savedRef = await Reflection.create({text:reflection});
    
    console.log(savedRef.createdAt); //getting undefined

    const savedQuote = new Quote({surah,verse,quote,themes});
    savedQuote.reflections=savedRef;
    await savedQuote.save();
    
    user.quotes.push(savedQuote);
    await user.save();
    res.status(200).json(id);
  }catch (error){
    console.log("error added quote:" + error);
  }
}