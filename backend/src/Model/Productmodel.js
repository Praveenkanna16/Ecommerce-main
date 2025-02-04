const {model,Schema}=require("mongoose");

const productSchema=new Schema({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      tags: {
          type:[String],
          required: true,
      },
      stock: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    {
        timestamps: true,
    })
    const productmodel = model("product",productSchema);
    module.exports=productmodel
