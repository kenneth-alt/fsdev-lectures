import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv .config();

console.log(process.env.MONGO_URL)

async function main() {
  await mongoose.connect();
}

// main().catch((err) => console.log(err));