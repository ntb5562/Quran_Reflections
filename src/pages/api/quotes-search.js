import {Quote} from "@/models/quotesDB";
import connectDB from "@/lib/mongo";

//getting all the quotes that match
export default async function handler(req, res) {
  const {quote} = req.body;
 
  try{
   
    await connectDB();

    const entries = await Quote.findOne({quote:quote}).exec();

    console.log("quotes search found");
    res.status(200).json(entries);
  }catch(error){
    console.log(error)
    console.log("quote search failed");
  }
  
}