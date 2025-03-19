const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter your name!"],
      },
      email:{
        type: String,
        required: [true, "Please enter your email!"],
      },
      password:{
        type: String,
        required: [true, "Please enter your password"],
        minLength: [4, "Password should be greater than 4 characters"]
        
      },
      profilePhoto: {
        type: String, 
        default: "",
    },
      cart: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          name: String,
          price: Number,
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
      phoneNumber:{
        type: Number,
      },
      role:{
        type: String,
        enum: ["user", "seller", "admin"],
        default: "user",
      },
      addresses:[
        {
          country: {
            type: String,
          },
          city:{
            type: String,
          },
          address1:{
            type: String,
          },
          address2:{
            type: String,
          },
          zipCode:{
            type: Number,
          },
          addressType:{
            type: String,
          },
        }
      ],
      role:{
        type: String,
        default: "user",
      },
      avatar:{
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
     },
     createdAt:{
      type: Date,
      default: Date.now(),
     },
     resetPasswordToken: String,
     resetPasswordTime: Date,

});

const userModel= mongoose.model('User',userSchema);

module.exports = userModel;