


const express = require('express');
const router = express(); 
const img_upload=require('../multer/fileUpload')
const {veryfyToken} =require('../middlewares/authMiddlewares')
const permissionController = require('../controllers/admin/permissionController');

router.post('/add-cart',veryfyToken,img_upload.single('img'),permissionController.addCart);
router.get('/get-cart',veryfyToken, permissionController.getCart);

router.delete('/delete-permission/:_id',veryfyToken, permissionController.deletePermission);
router.put('/update-permission/:_id',veryfyToken,img_upload.single('img'), permissionController.updatePermission);



module.exports = router; 