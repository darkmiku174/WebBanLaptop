import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Button, Form, InputGroup, Table } from 'react-bootstrap';
import axios from "axios"
import { Link } from '@material-ui/core';
class SPEditSanPham extends Component {

	constructor(props) {
		super(props);
		this.state = {
			trademarks: [],
			product: {
				TenSP: "",
				CPU: "",
				ManHinh: "",
				RAM: "",
				VGA: "",
				BoNhoLuuTru: "",
				Pin: "",
				CongKetNoi: "",
				CanNang: "",
				HeDieuHanh: "",
				MauSac: "",
				DonGia: "",
				ThuongHieu:"",
				SoLuong: 0,
				HinhAnh: ""
			}
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
	}


	showTrademarks(trademarks) {
		var result = null;
		if (trademarks.length > 0) {
			result = trademarks.map((trademark, index) => {
				return <option key={index} value={trademark._id} onClick={()=>this.onChange()}>{trademark.TenTH}</option>
			});
		}
		return result;
	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState(pre => ({
			product: {
				...pre.product,
				[name]: value
			}
		}))
	}

	onSave = (e) => {
		var { product } = this.state
		axios({
			method: 'POST',
			url: 'http://localhost:5000/api/products/add',
			data: product
		}).then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		})
	}

	render() {
		var { trademarks, product } = this.state
		console.log(product)
		return (
			<>
				<Container>
					<div style={{ backgroundColor: '#3ac9c9', paddingLeft: '2rem', paddingBottom: '1rem' }}>
						<p style={{ color: 'white', fontSize: '23px' }}>Đơn hàng</p>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column'}}>
						<Container style={{ backgroundColor: 'white' }}>
							{/*Parent Row 1*/}
							<Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', backgroundColor: 'white', padding: '1rem',border:'3px solid #3ac9c9',borderRadius:'1rem' }}>
								<h5>Thông tin chung</h5>
								<Container style={{ marginTop: '3rem' }}>
									<Col>
										<div className="parent-row-1-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
											<div className="child-row-container">
												{/*Child Row 1*/}
												<Row style={{ marginTop: '0rem' }}>
													<Col md={4}>
														<p style={{ fontSize: '12px' }}>Hình ảnh sản phẩm</p>
													</Col>
													<Col md={8}>
														<div className="img-container">
															<form>
																<img src={product.HinhAnh} style={{ width: '15rem', height: '15rem' }} />
																<input name="HinhAnh" type="text" placeholder="Nhập đường dẫn hình ảnh" style={{ width: '15rem',border:'1px solid #c0c0c0' }} onChange={this.onChange} />
															</form>
														</div>
													</Col>
												</Row>
												{/*Child Row 2*/}
												<Row style={{ marginTop: '2rem' }}>
													<Col md={4}>
														<p style={{ fontSize: '12px' }}>Tên sản phẩm</p>
													</Col>
													<Col md={8}>
														<Form>
															<Form.Control style={{ width: '15rem', fontSize: '12px' }} name="TenSP" type="text" onChange={this.onChange} />
														</Form>
													</Col>
												</Row>

												{/*Child Row 3*/}
												<Row style={{ marginTop: '2rem' }}>
													<Col md={4}>
														<p style={{ fontSize: '12px' }}>Thương hiệu</p>
													</Col>
													<Col md={8}>
														<Form>
															<Form.Group controlId="exampleForm.ControlSelect1">
																<Form.Control name="ThuongHieu" onChange={this.onChange} style={{ fontSize: '12px' }} as="select">
																	{this.showTrademarks(trademarks)}
																</Form.Control>
															</Form.Group>
														</Form>
													</Col>
												</Row>
											</div>

											<div className="product-details-table">
												<Table striped bordered style={{ width: '30rem',border:'2px solid #3ac9c9' }}>
													<thead>
														<tr>
															<th></th>
															<th></th>
															<th></th>

														</tr>
													</thead>
													<tbody>

														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>1</td>
															<td style={{ padding: '5px' }}>Vi xử lý</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="CPU" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>2</td>
															<td style={{ padding: '5px' }}>Màn hình</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="ManHinh" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>3</td>
															<td style={{ padding: '5px' }}>Độ phủ màu</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="DoPhuMau" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>4</td>
															<td style={{ padding: '5px' }}>RAM</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="RAM" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>5</td>
															<td style={{ padding: '5px' }}>Card đồ họa</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="VGA" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>6</td>
															<td style={{ padding: '5px' }}>Lưu trữ</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="BoNhoLuuTru" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>7</td>
															<td style={{ padding: '5px' }}>Pin</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="Pin" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>8</td>
															<td style={{ padding: '5px' }}>Cổng kết nối</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="CongKetNoi" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>9</td>
															<td style={{ padding: '5px' }}>Cân nặng</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="CanNang" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>10</td>
															<td style={{ padding: '5px' }}>Hệ điều hành</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="HeDieuHanh" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>
														<tr className="tr-edit">
															<td style={{ padding: '5px' }}>11</td>
															<td style={{ padding: '5px' }}>Màu sắc</td>
															<td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name="MauSac" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} /></td>
														</tr>

													</tbody>
												</Table>
											</div>
										</div>
									</Col>
								</Container>

							</Row>

							{/*Parent Row 2*/}
							<Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', backgroundColor: 'white', padding: '1rem',border:'3px solid #3ac9c9',borderRadius:'1rem' }}>
								<h5>Thông tin bán hàng</h5>
								<Container style={{ marginTop: '1rem' }}>
									{/*Child Row 1*/}
									<Row style={{ marginTop: '1rem' }}>
										<Col md={2}>
											<p style={{ fontSize: '12px' }}>Giá</p>
										</Col>
										<Col md={4}>
											<Form>
												<InputGroup className="mb-2">
													<InputGroup.Prepend>
														<InputGroup.Text style={{ fontSize: '12px' }}>₫</InputGroup.Text>
													</InputGroup.Prepend>
													<Form.Control style={{ width: '15rem', fontSize: '12px' }} type="text" onChange={this.onChange} name="DonGia" />
												</InputGroup>
											</Form>
										</Col>
									</Row>
									{/*Child Row 2*/}
									<Row style={{ marginTop: '2rem' }}>
										<Col md={2}>
											<p style={{ fontSize: '12px' }}>Kho hàng</p>
										</Col>
										<Col md={4}>
											<Form>
												<Form.Control onChange={this.onChange} name="SoLuong" style={{ fontSize: '12px' }} type="text" />
											</Form>
										</Col>
									</Row>

								</Container>
							</Row>
						</Container>

						<Container style={{marginLeft:'4rem' }}>
							<a href="/admin">
								<Button style={{
									position: 'relative',
									float: 'right',
									marginRight: '8rem',
									width: '7rem',
									backgroundColor: 'white',
									color: 'black',
									fontSize: '12px'
								}}>Hủy</Button>
							</a>
							<Link to="admin">
							<Button onClick={this.onSave} style={{
								position: 'relative',
								float: 'right',
								marginRight: '4rem',
								width: '7rem',
								fontSize: '12px',
								backgroundColor:'#3ac9c9'
							}}>Thêm</Button>
							</Link>
						</Container>
					</div>
				</Container>
			</>
		)
	}
}
export default SPEditSanPham;
