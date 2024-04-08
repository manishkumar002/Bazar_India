const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  
  tokens: [
    {
        token: {
            type: String,
            required: true,
        }
    }
],
verifytoken:{
    type: String,
}
});

module.exports =mongoose.model('User',userSchema);