

const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const nodemailer = require("nodemailer")
const registerUser=async(req,resp)=>{
    try { 
        const { name,email,password}=req.body
       const usermail = await User.findOne({ email: email });
       console.log(usermail);
       if (usermail) {
         resp.status(404).json({
           code: 404,
           message: "user aleready exist....  ",
           error: false,
           status: false,
         });
       } 
    
       else {
        const haspassword = await bcrypt.hash(password,10)
         let data = new User({ name,email,password:haspassword}); 
         await data.save(); 
           return resp.status(200).json({
           code: 200,
           message: "user  Register successfully",
           data:data,
           error: false,
           status: true,
         });
       }
     } catch (err) {
       console.log(err);
     }
  }
 
const loginUser = async(req,res)=>{

  try{
   
    const email = req.body.email;
    const password = req.body.password;
    const userData = await User.findOne({ email: email});

    if(!userData){
      return res.status(404).json({
        status:false,
        massage:'email & password is incorrect !'
      });
    }
    const isPasswordMatch =await bcrypt.compare(password,userData.password);
  
    if(isPasswordMatch){
      let token=await jwt.sign({userId: userData._id},process.env.JWT_SECRET,{expiresIn:'1d'})
     
      return res.status(200).json({
        status:true,
        error: false,
        code: 200,
        data: {
          _id: userData._id,
          name: userData.name,
          email: userData.email,
          password:userData.password,
          
        },
        token: token,
        massage:'Login successfully !'
        
      }); 
    }
  
  } catch (err) {
          console.log(err);
        }
 

}



// login send the massage successfully


// const loginUser = async (req, res) => {
//   try {
//     const email = req.body.email;
//     const password = req.body.password;
//     const userData = await User.findOne({
//       email: email,
//     });

//     if (!userData) {
//       return res.status(404).json({
//         status: false,
//         massage: 'email & password is incorrect !'
//       });
//     }

//     const isPasswordMatch = await bcrypt.compare(password, userData.password);

//     if (isPasswordMatch) {
//       let token = await jwt.sign({ userId: userData._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

//       // Send email notification
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//          port: 587,
//          auth: {
//              user: 'xteammanish12@gmail.com',
//              pass: 'rryk fwos xxry oivz'
//          }
//         });

//       const mailOptions = {
//         from: "xteammanish12@gmail.com",
//         to: email,
//         subject: "Login Successful",
//         text: "🤎👌 You have successfully logged in. 👌👌.",
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error(error);
//         } else {
//           console.log("Email sent: " + info.response);
//         }
//       });

//       return res.status(200).json({
//         status: true,
//         error: false,
//         code: 200,
//         data: {
//           _id: userData._id,
//           name: userData.name,
//           email: userData.email,
//           password: userData.password,
//         },
//         token: token,
//         massage: 'Login successfully !'
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }



const getprofile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });
    return res.status(200).send({
      success: true,
      message: "User Fetched Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "unable to get current user",
      error,
    });
  }
};




//send email Link For reset Password

//send email Link For reset Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
   port: 587,
   auth: {
       user: 'xteammanish12@gmail.com',
       pass: 'rryk fwos xxry oivz'
   }
  });
  const resetpassword=async(req,res)=>{
   //console.log(req.body)
  
   const {email} = req.body;
  
   if(!email){
       res.status(401).json({status:401,message:"Enter Your Email"})
   }
  
   try {
       const userfind = await User.findOne({email:email});
  
       // token generate for reset password
       const token = jwt.sign({_id:userfind._id},process.env.JWT_SECRET,{
           expiresIn:"120s"
       });
       //console.log(token)
       const setusertoken = await User.findByIdAndUpdate({_id:userfind._id},{verifytoken:token},{new:true});
       //console.log("setusertoken", setusertoken);
  
       if(setusertoken){
           const mailOptions = {
               from:"xteammanish12@gmail.com",
               to:email,
               subject:"Sending Email For password Reset",
               text:`This Link Valid For 2 MINUTES http://localhost:3000/reset/${userfind.id}/${setusertoken.verifytoken}`
           }
  
           transporter.sendMail(mailOptions,(error,info)=>{
               if(error){
                   console.log("error",error);
                   res.status(401).json({status:401,message:"email not send"})
               }else{
                   console.log("Email sent",info.response);
                   res.status(201).json({status:201,message:"Email sent Succsfully"})
               }
           })
  
       }
  
   } catch (error) {
       res.status(401).json({status:401,message:"invalid user"})
   }
  
  };



  const fargetpassword=async(req,res)=>{
    const {id,token} = req.params;
   //console.log(id,token)
  
     try {
         const validuser = await User.findOne({_id:id,verifytoken:token});
        //  console.log(validuser)
  
        const verifyToken = jwt.verify(token,process.env.JWT_SECRET);
  
         console.log(verifyToken)
  
        if(validuser && verifyToken._id){
            res.status(201).json({status:201,validuser})
        }else{
            res.status(401).json({status:401,message:"user not exist"})
        }
     }catch(error){
      res.status(401).json({status:401,error})
     }
  };
  
  




// change password
const changepassword=async(req,res)=>{
  const {id,token} = req.params;

  const {password} = req.body;

  try {
      const validuser = await User.findOne({_id:id,verifytoken:token});
      
      const verifyToken = jwt.verify(token,process.env.JWT_SECRET);

      if(validuser && verifyToken._id){
            const newpassword = await bcrypt.hash(password,12);
          //  const newpassword = await password;

          const setnewuserpass = await User.findByIdAndUpdate({_id:id},{password:newpassword});

          setnewuserpass.save();
          res.status(201).json({status:201,setnewuserpass})

      }else{
          res.status(401).json({status:401,message:"user not exist"})
      }
  } catch (error) {
      res.status(401).json({status:401,error})
  }
}












// -------------send massage nodemailer start--------------------

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   port: 587,
//   auth: {
//     user: 'xteammanish12@gmail.com',
//     pass: 'rryk fwos xxry oivz'
//   }
// });

// const resetpassword = async (req, res) => {
//   console.log(req.body)

//   const { email } = req.body;

//   if (!email) {
//     res.status(401).json({ status: 401, message: "Enter Your Email" });
//   }

//   try {
//     const userfind = await InstructorRegisterSchema.findOne({ email: email });

//     if (!userfind) {
//       return res.status(404).json({ status: 404, message: "User not found" });
//     }

//     const mailOptions = {
//       from: "xteammanish12@gmail.com",
//       to: email,
//       subject: "Sending Email For Password Reset",
//       text: `Hello, you have requested to reset your password.`
//     }

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log("error", error);
//         res.status(401).json({ status: 401, message: "Email not sent" });
//       } else {
//         console.log("Email sent", info.response);
//         res.status(201).json({ status: 201, message: "Email sent successfully" });
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ status: 500, message: "Internal server error" });
//   }
// };

// -------------send massage nodemailer end--------------------



  module.exports ={
    registerUser,
    loginUser,
    getprofile,
    resetpassword,
    fargetpassword,
    changepassword
}