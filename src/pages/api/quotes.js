// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "@/lib/mongo";
import User from "@/models/userDB";

//getting all the quotes of a user
export default async function handler(req, res) {
  try{
    // req.socket.remoteAddress = '100.100.100.100';
    
    await connectDB();

    const user = await User.findOne({ip: req?.socket?.remoteAddress}).populate('quotes').exec();
  
    console.log("quotes found");
    res.status(200).json({results: user?.quotes });

  }catch(error){
    console.log(error)
    res.status(500).json({ message: ' could find a quote'}) // api user
  }
  
}
