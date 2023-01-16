import mongoose from 'mongoose'
import 'dotenv/config'

mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false)

/**
 * Mongoose BaseURL
 */

const URI = process.env.MONGO_URI;

/**
 * Mongoose Connect Option
 */

const option: {[key: string]: boolean} = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}

/**
 * Connect database
 */

function connectDB(): void {
  mongoose.connect(
    URI,
    option
  );
  
  const db: mongoose.Connection = mongoose.connection;

  db.once("open", () => {
    console.log("Database connected successfully.");
  });

  db.on("error", console.error.bind(console, "Failed to connect database"));
}

export default connectDB;