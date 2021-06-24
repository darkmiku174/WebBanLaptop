import React from 'react';
import { Form, Col, Row, Button, Table, Card } from 'react-bootstrap';
import { FaTrash, FaPen } from 'react-icons/fa';
import { Pagination } from '@material-ui/lab';
import { Component } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom'
class SPTatCaSanPham extends Component {

	constructor(props) {
		super(props);
		this.state = {
			trademarks: [],
			products: []
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/trademarks',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				trademarks: res.data
			});
		}).catch(err => {
			console.log(err);
		})
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/products',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				products: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	showTrademarks(trademarks) {
		var result = null;
		if (trademarks.length > 0) {
			result = trademarks.map((trademark, index) => {
				return <option key={index} value={index + 1}>{trademark.TenTH}</option>
			});
		}
		return result;
	}

	onClick = (product) => {
		axios({
			method: 'DELETE',
			url: 'http://localhost:5000/api/products/delete/'+product._id,
			data: null
		}).then(res => {
			window.location.reload();
		}).catch(err => {
			console.log(err);
		})
	}

	showProducts(products) {
		var result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<tr>
						<td>
							<Row style={{ marginLeft: '1%' }}>
								<Col md={4}>
									<img src={product.HinhAnh} width="200px" height="200px" />
								</Col>
								<Col md={8}>
									<p>{product.TenSP}</p>
								</Col>
							</Row>
						</td>
						<td><p>1</p></td>
						<td>{product.DonGia}</td>
						<td>2</td>
						<td>0</td>
						<td style={{ display: 'flex', border: '0px', padding: '2rem', justifyContent: 'space-around' }}>
							<button onClick={() => this.onClick(product)} key={index}><FaTrash /></button>
						</td>
					</tr>
				)
			});
		}
		return result;
	}

	render() {
		var { trademarks, products } = this.state
		return (
			<div style={{ backgroundColor: 'white' }}>

				<Row >
					<Card style={{ width: '100%', padding: '2rem', boxShadow: '0px 0px 0px black', borderRadius: '0px' }}>
						{/*Row 1*/}
						<Row>
							{/*Col 1 of 1*/}
							<Col md={6}>
								<Form inline>
									<Form.Control as="select" style={{ width: '9rem', fontSize: '12px' }}>
										<option value="0">Tên sản phẩm</option>
									</Form.Control>
									<Form.Control placeholder="Nhập vào" type="text" style={{ width: '20.2rem', fontSize: '12px' }}>
									</Form.Control>
								</Form>
							</Col>

							{/*Col 1 of 2*/}
							<Col md={6}>
								<Form inline>

									<Form.Control as="select" style={{ width: '29rem', fontSize: '12px' }}>
										<option value="0">Thương hiệu</option>
										{this.showTrademarks(trademarks)}
									</Form.Control>
								</Form>
							</Col>
						</Row>


						{/*Row 3*/}
						<Row style={{ marginTop: '2rem' }}>
							<Col md={1} style={{ display: 'flex' }}>
								<Link to="/admin-products-add">
									<Button className="btn" style={{ fontSize: '12px', width: '5rem', backgroundColor: '#3ac9c9' }}>Thêm</Button>
								</Link>

							</Col>
							<Col md={9}>

							</Col>

						</Row>
					</Card>
				</Row>
				<Row>
					<Table bordered hover style={{ backgroundColor: 'white', fontSize: '12px' }}>
						<thead>
							<tr>
								<th style={{ fontSize: '13px' }}>Tên sản phẩm</th>

								<th style={{ fontSize: '13px' }}>Phân loại hàng</th>
								<th style={{ fontSize: '13px' }}>Giá</th>
								<th style={{ fontSize: '13px' }}>Kho hàng</th>
								<th style={{ fontSize: '13px' }}>Đã bán</th>
								<th>Xoá</th>
							</tr>
						</thead>
						<tbody>
							{this.showProducts(products)}

						</tbody>
					</Table>
				</Row>
				<Row style={{ marginTop: '1rem', float: 'right' }}>
					<Pagination count={10} />
				</Row>
			</div>
		)
	}
}
export default SPTatCaSanPham;