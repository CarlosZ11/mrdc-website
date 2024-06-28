import mongoose, { mongo } from "mongoose";

export const conenectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/mrdc");
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
  }
};

