import mongoose from 'mongoose';

var productSchema = new mongoose.Schema({
    TenSP: String,
    CPU: String,
    ManHinh: String,
    DoPhuMau: String,
    RAM: String,
    VGA: String,
    BoNhoLuuTru: String,
    Pin: String,
    CongKetNoi: String,
    CanNang: String,
    HeDieuHanh: String,
    MauSac: String,
    DonGia: String,
    ThuongHieu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trademark"
    },
    SoLuong: String,
    HinhAnh: String
},{
    versionKey: false
})

const Product = mongoose.model("Product", productSchema)

export default Product