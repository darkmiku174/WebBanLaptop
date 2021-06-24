import asyncHandler from "express-async-handler";
import Order from "../models/orderSchema.js";

const getOrderList = asyncHandler(async (req, res) => {
    const orders = await Order.find({})
        .populate({
            path: "User"
        })
        .populate({
            path: "DanhSachSanPham.SanPham"
        })
    res.json(orders);
});

const getOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.Id)
    .populate("User")
    .populate({
        path : "DanhSachSanPham.SanPham"
    })
    res.json(order);
});

const addOrder = asyncHandler(async (req, res) => {
    const order = await Order.create(req.body);
    res.json(order);
});

const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id)
    if (order) {
      res.status(200).json({message: "Delete success"})
    } else {
      res.status(404).json({message: "Order not found"})
    }
  });

export { getOrderList, getOrder, addOrder, deleteOrder };
