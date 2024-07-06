import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
  documentId: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: { 
    type: String,
    required: true 
  },
  lastName: { 
    type: String, 
    required: true 
  },
  age:{
    type: Number,
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  phone: { 
    type: String, 
    required: true
  },
  birthDate: { 
    type: Date, 
    required: true 
  },
  gender: { 
    type: String,
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  maritalStatus: { 
    type: String, 
    required: true 
  },
  startYearChurch: { 
    type: Date, 
    required: true 
  },
  isBaptized: { 
    type: String, 
    required: true 
  },
  baptismDate: { 
    type: Date 
  },
  isServer: { 
    type: String, 
    required: true 
  },
  ministry: { 
    type: String, 
    required: true 
  },
  serviceArea: { 
    type: Array,
    required: true
  },
}, {
  timestamps: true
});

export default mongoose.model('Member', memberSchema)