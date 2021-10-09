import { model, Schema } from "mongoose";

const DOCUMENT_NAME = "records";

const schema = new Schema({
  key: {
    type: Schema.Types.String,
    required: true,
    trim: true,
  },
  value: {
    type: Schema.Types.String,
  },
  createdAt: {
    type: Schema.Types.Date,
    required: true,
  },
  count: {
    type: Schema.Types.Array,
  },
});

export const RecordModel = model(DOCUMENT_NAME, schema);
