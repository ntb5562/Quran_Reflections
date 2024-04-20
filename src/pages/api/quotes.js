// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "@/lib/mongo";
import Quote from "@/models/quotesDB";

export default async function handler(req, res) {
  try{
    await connectDB();
    const result = await Quote.find();
    console.log("quotes found");
    res.status(200).json(result);
  }catch(error){
    console.log("quote find failed");
  }
  
}
