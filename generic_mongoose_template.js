import mongoose from "mongoose";

// this is to create a schema of your model (necessary)
const todoSchema = new mongoose.Schema({

}, { timestamps: true });


// it is necessary to export the model 
export const todo = mongoose.model("todo", todoSchema); // when it will be exportted to the data base then the name of the model will be "todos" not Todo
