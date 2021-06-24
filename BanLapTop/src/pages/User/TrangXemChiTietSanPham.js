import React from 'react';
import { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { actAddToCart } from '../../actions/index';
import { connect } from 'react-redux';
class TrangXemChiTietSanPham extends Component {

	constructor(props) {
		super(props);
		this.state = {
			product :{},
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/products/' +this.props.match.params.id,
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				product: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	onAddToCart = (product) =>{
		this.props.onAddToCart(product);
	}

	render() {
		var {product}=this.state;
		return (
			<div>
				<Container style={{ margin: 'auto', padding: '2rem', marginTop: '2rem' }}>
					<Row>
						<Col sm={6}>
							<Container>
								<img src={product.HinhAnh} alt={product.TenSP}
									width="70%"
									height="70%"
								/>
							</Container>
						</Col>
						<Col sm={6}>
							<h3>{product.TenSP}</h3>
							<div style={{ display: 'flex' }}><p style={{ fontWeight: 'bold' }}>Vi xử lí:  </p> <p style={{marginLeft:'1rem'}}>{product.CPU}</p></div>
							<div style={{display:'flex',marginTop:'0.5rem'}}><p style={{ fontWeight: 'bold' }}>Màn hình:  </p> 	<p style={{marginLeft:'1rem'}}>{product.ManHinh}</p></div>
							<div style={{display:'flex',marginTop:'0.5rem'}}>><p style={{ fontWeight: 'bold' }}>Độ phủ màu:</p> <p style={{marginLeft:'1rem'}}>{product.DoPhuMau}</p></div>
							<div style={{display:'flex',marginTop:'0.5rem'}}><p style={{ fontWeight: 'bold' }}>RAM:  </p> <p style={{marginLeft:'1rem'}}>{product.RAM}</p></div>
							<div style={{display:'flex',marginTop:'0.5rem'}}>><p style={{ fontWeight: 'bold' }}>Card đồ họa:  </p> <p style={{marginLeft:'1rem'}}>{product.VGA}</p></div>
							<div style={{display:'flex',marginTop:'0.5rem'}}><p style={{ fontWeight: 'bold' }}>Lưu trữ:  </p> <p style={{marginLeft:'1rem'}}>{product.BoNhoLuuTru}</p></div>
							<div style={{display:'flex',marginTop:'0.5rem'}}><p style={{ fontWeight: 'bold' }}>Pin:  </p> <p style={{marginLeft:'1rem'}}>{product.Pin}</p></div>
							<div style={{display:'flex',marginTop:'0.5rem'}}><p style={{ fontWeight: 'bold' }}>Cổng kết nối:  </p> <p style={{marginLeft:'1rem'}}> {product.CongKetNoi}</p></div>
							<div style={{display:'flex',marginTop:'0.5rem'}}><p style={{ fontWeight: 'bold' }}>Cận nặng:  </p> <p style={{marginLeft:'1rem'}}>{product.CanNang}</p></div>
							<div style={{display:'flex',marginTop:'0.5rem'}}><p style={{ fontWeight: 'bold' }}>Hệ điều hành:  </p> <p style={{marginLeft:'1rem'}}>{product.HeDieuHanh}</p></div>
							<div style={{display:'flex',marginTop:'0.5rem'}}><p style={{ fontWeight: 'bold' }}>Màu sắc: </p> <p style={{marginLeft:'1rem'}}> {product.MauSac}</p></div>
							<Button style={{ marginTop: '1rem',marginLeft:'20%' }} onClick={()=> this.onAddToCart(product)}>Thêm vào giỏ hàng</Button>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrangXemChiTietSanPham);