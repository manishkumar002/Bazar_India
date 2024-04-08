
const mongoose = require('mongoose');
const PermissionSchema = new mongoose.Schema({
 
  title:{
    type:String,
    required:true
  },
  money:{
    type:Number,
    required:true
  },
  discountmoney:{
    type:Number,
    required:true
  },
  img:{
    type:String,
    required:true
  } 
});

module.exports =mongoose.model('cart',PermissionSchema);