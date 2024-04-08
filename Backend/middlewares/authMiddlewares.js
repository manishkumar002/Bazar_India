const  JWT =require('jsonwebtoken')
 
//Protected Routes token base
  const veryfyToken = async (req, res, next) => {
  try {
     console.log("token is  :"+req.headers.authorization)
    const decode = JWT.verify(
      req.headers.authorization.split(' ')[1],
      process.env.JWT_SECRET
    );
    req.body.userId = decode.userId;
    next();
  } catch (error) {
   res.send("invalid token")
  }
};

module.exports={veryfyToken}

