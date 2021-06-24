import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios'
import {Link} from 'react-router-dom'
class THAddThuongHieu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			trademark: {
				TenTH: "",
				Logo: "",
				MoTa: ""
			}
		}
	}

	onClick =() =>{
		var { trademark } = this.state
		axios({
			method: 'POST',
			url: 'http://localhost:5000/api/trademarks/add',
			data: trademark
		}).then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		})
	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState(pre => ({
			trademark: {
				...pre.trademark,
				[name]: value
			}
		}))
	}

	render() {
		var { trademark } = this.state
		console.log(trademark)
		return (
			<Container>
				<div className="trademark-details-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div className="child-row-container" style={{ marginLeft: "20rem", border: '5px solid #3ac9c9', width: '40%', height: '36rem', marginTop: '1rem', borderRadius: '10px' }}>
						<Row style={{ textAlign: 'center', marginTop: '1rem' }}>
							<h5 style={{ marginLeft: '33%' }}>Thêm thương hiệu</h5>
						</Row>
						{/*Child Row 1*/}
						<Row style={{ marginTop: '2rem' }}>
							<Col md={4}>
								<p style={{ fontSize: '12px' }}>Hình ảnh logo</p>
							</Col>
							<Col md={8}>
								<div className="img-container">
									<form style={{ display: 'flex', flexDirection: 'column' }}>
										<img src={trademark.Logo} style={{ width: '15rem', height: '15rem' }} />
										<input name="Logo" type="text" placeholder="Nhập đường dẫn hình ảnh" style={{ width: '15rem', border: '1px solid #c0c0c0' }} onChange={this.onChange} />
									</form>
								</div>
							</Col>
						</Row>

						{/*Child Row 2*/}
						<Row style={{ marginTop: '2rem' }}>
							<Col md={4}>
								<p style={{ fontSize: '12px' }}>Tên Thương hiệu</p>
							</Col>
							<Col md={8}>
								<Form>
									<Form.Control style={{ width: '15rem', fontSize: '12px' }} name="TenTH" type="text" onChange={this.onChange} />
								</Form>
							</Col>
						</Row>

						{/*Child Row 3*/}
						<Row style={{ marginTop: '2rem' }}>
							<Col md={4}>
								<p style={{ fontSize: '12px' }}>Giới thiệu</p>
							</Col>
							<Col md={8}>
								<Form>
									<Form.Control style={{ width: '15rem', fontSize: '12px' }} name="MoTa" as="textarea" onChange={this.onChange} />
								</Form>
							</Col>
						</Row>
						{/*Child Row 4*/}
						<Row style={{ marginTop: '1rem', display: 'flex', paddingLeft: '39%' }}>
							<Link to="/admin">
								<Button onClick={this.onClick} style={{ backgroundColor: '#3ac9c9', width: '7rem' }}>Xác nhận</Button>
							</Link>
							<Button style={{ backgroundColor: '#3ac9c9', width: '7rem', marginLeft: '1rem' }}>Huỷ</Button>
						</Row>
					</div>
				</div>
			</Container>
		)
	}
}
export default THAddThuongHieu;