import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';

class AdminTrangChiTietDonHang extends Component {

	constructor(props) {
		super(props);
		this.state = {
			order: {},
		}
	}


	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/orders/' + this.props.match.params.id,
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				order: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	showOrderDetail = (order) => {
		var result = null
		if (order.DanhSachSanPham?.length > 0) {
			result = order.DanhSachSanPham?.map((product, index) => {
				return (
					<tr className="tr-edit">
						<td>{index+1}</td>
						<td>{product.SanPham.TenSP}</td>
						<td>{product.SoLuong}</td>
						<td>{product.SanPham.DonGia}</td>
					</tr>
				)
			})
		}
		return result
	}

	render() {
		var { order } = this.state
		console.log(order.DanhSachSanPham?.length)
		return (
			<Container className="order-details-container" style={{ textAlign: 'left' }}>
				<h5>Chi tiết đơn hàng</h5>
				<Row style={{ border: '2px solid #3ac9c9', marginTop: '1rem', borderRadius: '1rem' }} fluid>
					{/*parent Col 1*/}
					<Col md={6} style={{ padding: '1rem' }}>
						{/*Row 1*/}
						<Row style={{ marginTop: '1rem' }}>
							<Col md={4}>
								<p style={{ fontWeight: 'bold' }}>Tên người mua:</p>
							</Col>
							<Col md={8}>
								<p>{order.User?.HoTen}</p>
							</Col>
						</Row>
						{/*Row 2*/}
						<Row style={{ marginTop: '1rem' }}>
							<Col md={4}>
								<p style={{ fontWeight: 'bold' }}>Địa chỉ:</p>
							</Col>
							<Col md={8}>
								<p>{order.DiaChi}</p>
							</Col>
						</Row>
						{/*Row 3*/}
						<Row style={{ marginTop: '1rem' }}>
							<Col md={4}>
								<p style={{ fontWeight: 'bold' }}>Ngày mua:</p>
							</Col>
							<Col md={4}>
								<p>{order.NgayBan}</p>
							</Col>
						</Row>
					</Col>

					{/*parent Col 2*/}
					<Col md={6} style={{ padding: '1rem' }}>
						<div className="order-details-table">
							<Table striped bordered style={{ width: '30rem', border: '2px solid #3ac9c9' }}>
								<thead>
									<tr style={{ textAlign: 'center' }}>
										<th>STT</th>
										<th>Tên sản phẩm</th>
										<th>Số lượng</th>
										<th>Đơn giá</th>

									</tr>
								</thead>
								<tbody>
									{this.showOrderDetail(order)}
								</tbody>
							</Table>
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
}
export default AdminTrangChiTietDonHang;