import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv .config();

// console.log(process.env.MONGO_URL)

const connectionString = process.env.MONGO_URL;

const db = await mongoose.connect(connectionString);

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const User = mongoose.model("user", userSchema);

const users = await User.find();

console.log(users);

/* async function main() {
  await mongoose.connect(connectionString);
}

main()
.then(() => console.log("connected"))
.catch((err) => console.log(err)); */