import React from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Component } from 'react';
import axios from 'axios'
class TrangDatHang extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: JSON.parse(localStorage.getItem("USER")) ? JSON.parse(localStorage.getItem("USER")) : [],
			order: {
				User: "",
				DanhSachSanPham: [],
				NgayBan: "",
				DiaChi: "",
				TrangThai: 0
			},
			DiaChi: {
				Tinh: "",
				Quan: "",
				Phuong: "",
				Duong: ""
			}
		}
	}

	componentDidMount() {
		var { user } = this.state
		var { cart } = this.props
		var address = user?.Address?.split(',')

		this.setState(pre => (
			{
				DiaChi: {
					Tinh: address[3],
					Quan: address[2],
					Phuong: address[1],
					Duong: address[0]
				},
				order: {
					...pre.order,
					User: user._id,
					DanhSachSanPham: cart
				}
			}
		))
	}

	showProducts(cart) {
		var result = null;
		if (cart.length > 0) {
			result = cart.map((product, index) => {
				return (
					<Row style={{ border: '0.01rem solid black', padding: '1rem' }}>
						<Col sm={7}>{product.product.TenSP}</Col>
						<Col sm={5} style={{ fontWeight: 'bold' }}>{this.moneyProduct(product.quantity, product.product.DonGia)}</Col>
					</Row>
				)
			});
		}
		return result;
	};

	moneyProduct = (quantity, money) => {
		return parseInt(quantity) * parseInt(money)
	}

	showTotalAmount = (cart) => {
		var total = 0;
		if (cart.length > 0) {
			for (var i = 0; i < cart.length; i++) {
				total += cart[i].product.DonGia * cart[i].quantity;
			}
		}
		return total;
	}

	onClick = () => {
		var { order, DiaChi } = this.state
		let newDate = new Date()
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();
		let hour = newDate.getHours();
		let min = newDate.getMinutes();
		const dssp = order.DanhSachSanPham.map(({
			product: SanPham,
			quantity: SoLuong,
			...rest
		}) => ({
			SanPham,
			SoLuong,
			...rest
		}));
		var data = {
			User: order.User,
			DanhSachSanPham: dssp,
			NgayBan: date + "-" + month + "-" + year + " " + hour + ":" + min,
			DiaChi: DiaChi.Duong + "," + DiaChi.Phuong + "," + DiaChi.Quan + "," + DiaChi.Tinh,
			TrangThai: 0
		}

		axios({
			method: 'POST',
			url: 'http://localhost:5000/api/orders/add',
			data: data
		}).then(res => {
			localStorage.setItem("ORDERSUCCESS", JSON.stringify(data))
			localStorage.removeItem("CART");
		}).catch(err => {
			console.log(err);
		})
	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState(pre => ({
			DiaChi: {
				...pre.DiaChi,
				[name]: value
			}
		}))
	}

	render() {
		var { cart } = this.props;
		var { user, DiaChi } = this.state;
		return (
			<div>
				<Container style={{ marginTop: '2rem' }}>
					<h5 style={{ marginBottom: '1rem' }}>Đặt hàng</h5>
					<Row>
						<Col sm={8} style={{ border: '1px solid black', padding: '3rem' }}>
							<Row>
								<h6>Thông tin người nhận</h6>
							</Row>
							<Row style={{ marginTop: '1rem' }}>
								<Col>
									<Form.Control placeholder="name" value={user.HoTen} />
								</Col>
							</Row>

							<Row style={{ marginTop: '1rem' }}>
								<h6>Địa chỉ</h6>
							</Row>
							<Row style={{ marginTop: '1rem' }}>
								<Col>
									<Form.Control value={!DiaChi.Tinh ? "" : DiaChi.Tinh} onChange={this.onChange} placeholder="Tỉnh/Thành Phố" name="Tinh" />
								</Col>
								<Col>
									<Form.Control value={!DiaChi.Quan ? "" : DiaChi.Quan} onChange={this.onChange} placeholder="Quận huyện" name="Quan" />
								</Col>
								<Col>
									<Form.Control value={!DiaChi.Phuong ? "" : DiaChi.Phuong} onChange={this.onChange} placeholder="Phường/Xã" name="Phuong" />
								</Col>
							</Row>

							<Row style={{ marginTop: '1rem' }}>
								<Col>
									<Form.Control value={!DiaChi.Duong ? "" : DiaChi.Duong} onChange={this.onChange} placeholder="Số nhà, tên đường" name="Duong" />
								</Col>
							</Row>

						</Col>
						<Col sm={4} style={{ flexDirection: 'column' }}>
							<Row style={{ border: '0.01rem solid black', padding: '0.5rem' }}>
								<Col sm={7}>Đơn hàng x{cart.length}</Col>
								<Col sm={5}><Link to="/cart">Sửa </Link></Col>
							</Row>
							{this.showProducts(cart)}
							<Row style={{ border: '0.01rem solid black', padding: '0.5rem' }}>
								<Col sm={7}>Thành tiền</Col>
								<Col sm={5} style={{ fontWeight: 'bold' }}>{this.showTotalAmount(cart)}</Col>
							</Row>
						</Col>
					</Row>
					<Link to="order-success">
						<Button disabled={cart.length > 0 ? false : true} onClick={this.onClick} style={{ marginTop: '2rem' }}>{cart.length > 0 ? "Hoàn tất đặt hàng" : "Vui lòng đặt hàng"}</Button>
					</Link>
				</Container>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps, null)(TrangDatHang);