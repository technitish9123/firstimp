const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
    text: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000,
    text: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    maxlength: 32,
  },
  gst:{
    type:String,
    required:true,
  },
  category: {
    type: ObjectId,
    ref: "Category",
  },
  subs: [
    {
      type: ObjectId,
      ref: "Sub",
    },
  ],
  quantity: {
    type: Number,
  },
  sold: {
    type: Number,
    default: 0,
  },
  images: {
    type: Array,
  },
  shipping: {
    type: String,
    enum: ["Yes", "No"],
  },
  color: {
    type: String,
    enum: ["Black", "Brown", "Silver", "White", "Blue"],
  },
  brand:{
      type: String,
     
  },
  material:{
    type:String,
  },
  property:{
    type:String,
  },
  design:{
    type:String,
  },
  style:{
    type:String,
  },
  application:{
    type:String,
  },
  instruction:{

  },
  width:{
    type:Number,
  },
  length:{
    type:Number,
  },
  weight:{
    type:Number,
  },
  repeatLength:{
    type:Number,
  },
  rollLength:{
    type:Number,
  },
  ratings:[{
        star:Number,
        postedBy: {type: ObjectId, ref: "User"}
}]
}, {timestamps: true} );

module.exports = mongoose.model("Product", productSchema);