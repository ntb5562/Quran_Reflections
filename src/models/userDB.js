import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
  ip: String,
  quotes: [{ type: Schema.Types.ObjectId, ref: 'Quote'}]
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;