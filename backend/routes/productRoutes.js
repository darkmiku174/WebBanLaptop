import express from 'express'
import { getProduct, getProductList, getProductLike, addProduct, deleteProduct, getProductByTrademark } from '../controllers/productControllers.js'

const router = express.Router()

router.get("/", getProductList)
router.post("/add", addProduct)
router.get("/search", getProductLike)
router.get('/:Id', getProduct)
router.route("/delete/:id").get(getProduct).delete(deleteProduct)
router.get("/trademark/:id", getProductByTrademark)


export default router