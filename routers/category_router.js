const Category = require('../models/category_model')

const CategoryRouter = require('express').Router()

CategoryRouter.get('/', async (req, res) => {
    try {
        const categories = await Category.find()
        if (!categories) {
            return res.status(200).json({
                success: true,
                data: [],
                message: 'Category not found',
            })
        }
        return res.status(200).json({ success: true, data: categories })
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
})

CategoryRouter.post('/', async (req, res) => {
    try {
        const category = Category(req.body)
        const savedCategory = await category.save()
        return res.json({
            success: true,
            data: savedCategory,
            message: 'category post',
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error,
        })
    }

})

CategoryRouter.delete("/:id",async (req,res)=>{
  try {
    const id=req.params.id;
    const category=  await Category.findByIdAndDelete(id);
    res.json({success:true,data:category,message:"deleted"});
  } catch (error) {
    
  }

});

module.exports = CategoryRouter
