import express from 'express'
import { getTrademark, getTrademarkList, createTradeamark, deleteTrademark } from '../controllers/trademarkControllers.js'

const router = express.Router()

router.get("/", getTrademarkList)
router.get('/:Id', getTrademark)
router.post("/add", createTradeamark)
router.route("/delete/:id").get(getTrademark).delete(deleteTrademark)

export default router