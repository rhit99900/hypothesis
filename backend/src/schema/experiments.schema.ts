import { Schema } from "mongoose";
import mongoose from "../database/index.database";
import type { Experiments } from "../types/repository/experiment.types";

const experimentsSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,    
  },
  description: {
    type: Schema.Types.String,
    required: false,
    default: null,
  }, 
  status: {
    type: Schema.Types.String,
    required: true,
    default: 'created'
  },
  start_date: {
    type: Schema.Types.Date,    
    default: null
  },
  end_date: {
    type: Schema.Types.Date,    
    default: null
  },
  goal: {
    type: Schema.Types.String,
    default: null  
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  toObject: {
    virtuals: true
  }, 
  toJSON: {
    virtuals: true
  },
  strict: true
})

const Experiment = mongoose.model<Experiments>('Experiments', experimentsSchema);
export default Experiment;