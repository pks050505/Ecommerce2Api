
const ProductRouter= require("express").Router();


const Product= require('../models/product_model');
ProductRouter.post( '/',async (req, res) => {
    
 const product=Product(req.body);
 product.save().then((createdProduct)=>{
  res.status(201).json(createdProduct);
 }).catch((er)=>{
    res.status(500).json({
        success:false,
        error:er
    })
 })
})
ProductRouter.get('/',async (req,res) =>{
 const products=  await Product.find();
 if(!products){
    res.json({success:true,data:[]});
 }
 res.json({success:true,data:products});
})
ProductRouter.get('/category/:id',async (req,res) =>{
    const categoryId=req.params.id;
    const products=  await Product.find({category:categoryId});
    if(!products){
       res.json({success:true,data:[]});
    }
    res.json({success:true,data:products});
   })

module.exports=ProductRouter;