import { Schema } from "mongoose";
import mongoose from "../database/index.database";
import type { Variants } from "../types/repository/variant.types";

const variantsSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true    
  },
  description: {
    type: Schema.Types.String,
    default: null
  },
  is_control: {
    type: Schema.Types.Boolean,
    required: true,
    default: true
  },
  config: {
    type: Schema.Types.Mixed,
    default: null
  },
  experiment_id: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true    
  },
  weight: {
    type: Schema.Types.Number,
    default: 50
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
});

const Variant = mongoose.model<Variants>("Variants", variantsSchema);
export default Variant;