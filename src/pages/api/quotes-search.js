import {Quote} from "@/models/quotesDB";
import connectDB from "@/lib/mongo";

//getting all the quotes that match
export default async function handler(req, res) {
  const {quote} = req.body;
 
  try{
   
    await connectDB();

    const entry = await Quote.findOne({quote:quote}).exec();

    console.log("quotes search found");
    res.status(200).json(entry);
  }catch(error){
    console.log(error)
    res.status(500).json({message:"Could not find the quote"});
  }
  
}