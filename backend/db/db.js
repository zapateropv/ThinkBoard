import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
{
    title: String,
    description: String,
    
},
{
    timestamps: true
})

export const Notes = mongoose.model('Users', notesSchema, 'thinkboard')