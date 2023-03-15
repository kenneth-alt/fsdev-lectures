import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv .config();

console.log(process.env.MONGO_URL)

const connectionString = process.env.MONGO_URL

async function main() {
  await mongoose.connect(connectionString);
}

main()
.then(() => console.log("connected"))
.catch((err) => console.log(err));