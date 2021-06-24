import asyncHandler from "express-async-handler";
import Product from "../models/productSchema.js";

const getProductList = asyncHandler(async (req, res) => {
    const products = await Product.find({})
        .populate({
            path: "ThuongHieu"
        })
    res.json(products);
});

const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.Id);
    res.json(product);
});

const getProductLike = asyncHandler(async (req, res) => {
    const products = await Product.find({ TenSP: { $regex: req.query.name } })
    res.json(products)
});

const addProduct = asyncHandler(async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
});

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    if (product) {
        res.status(200).json({ message: "Delete success" })
    } else {
        res.status(404).json({ message: "Product not found" })
    }
});

const getProductByTrademark = asyncHandler(async (req, res) => {
    const products = await Product.find({ ThuongHieu: req.params.id })
    res.json(products)
});
export { getProductList, getProduct, getProductLike, addProduct, deleteProduct, getProductByTrademark };
