import { Schema } from "mongoose";
import mongoose from "../database/index.database";

const experimentsSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,    
  },
})

mongoose.model('Experiments', experimentsSchema);