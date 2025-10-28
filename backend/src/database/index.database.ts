import mongoose from "mongoose";
import config from "../config/config";

try {
  mongoose.connect(config.DATABASE_CONNECTION_STRING).then(() => {
    console.info('Connected to Database');
  });  
} catch(e: any) {
  console.error('Failed to connect to database with error', e?.message);
}

export default mongoose;