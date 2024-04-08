const Permission = require('../../models/permissionModels');

const addCart=async(req,resp)=>{
try{
    const { title,money,discountmoney}=req.body
    const img=req.file.filename  
    const PermissinData = await Permission.findOne({title:title})
    // console.log(PermissinData)
    if (PermissinData) {
        resp.status(404).json({
          code: 404,
          message: "Permission aleready exist....  ",
          error: false,
          status: false,
        });
      }
      else{
        let data = new Permission({ title,money,discountmoney,img}); 
        await data.save(); 
          return resp.status(200).json({
          code: 200,
          message: " Permission successfully",
          data:data,
          error: false,
          status: true,
        });
      } 
}catch (err) {
    console.log(err);
  }
}

const getCart = async(req,resp)=>{
try{
 const getCart = await Permission.find({});
 return resp.status(200).json({
  code: 200,
  message: " Permission Fetched successfully",
  data:getCart,
  error: false,
  status: true,
});
}catch (err) {
  console.log(err);
}
}


const deletePermission = async (req, resp) => {
  try {
    console.log(req.params);
    let deletePermissions = await Permission.deleteOne({_id:req.params._id});
    return resp.status(200).json({
      code: 200,
      message: " deletePermissions successfully",
      data:deletePermissions,
      error: false,
      status: true,
    });
  } catch (err) {
    console.log(err);
  }
}


const updatePermission = async (req, resp) => {
  try {
    let {post_title,post_descriptions}=req.body 
    const img=req.file.filename  
     let updatePermissions = await Permission.updateOne({_id: req.params._id},{ $set:{post_title,post_descriptions,img}});
    return resp.status(200).json({
      code: 200,
      message: " updatePermissions successfully",
      updatePermissions,
      error: false,
      status: true,
    });
  } catch (err) {
    console.log(err);
  }
}



module.exports ={
  addCart,
  getCart,
    deletePermission,
    updatePermission
}