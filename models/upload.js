const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema(
  {
    envelopeId: { type: Number, required: true, unique: true },
    originalName: { type: String, required: true },
    mimeType: { type: String, required: true },
    size: { type: Number, required: true },
    fileId: { type: String, required: true },
    url: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Upload', uploadSchema);
