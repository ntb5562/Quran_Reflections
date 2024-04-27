// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "@/lib/mongo";
import User from "@/models/userDB";

//getting all the quotes of a user
export default async function handler(req, res) {
  try{
    await connectDB();
    const user = await User.findOne({ip: req?.connection?.remoteAddress}).populate('quotes').exec();
    console.log("quotes found");
    res.status(200).json({results: user?.quotes });

  }catch(error){
    console.log(error)
    res.status(500).json({ message: "No quotes"})
  }
  
}
