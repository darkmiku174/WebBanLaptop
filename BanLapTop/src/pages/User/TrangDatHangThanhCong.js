import React from 'react';
import { Component } from 'react';
import { Container } from 'react-bootstrap'
import { FaCheck, FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';
class TrangDatHangThanhCong extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: JSON.parse(localStorage.getItem("USER")) ? JSON.parse(localStorage.getItem("USER")) : [],
			orderSuccess: JSON.parse(localStorage.getItem("ORDERSUCCESS")) ? JSON.parse(localStorage.getItem("ORDERSUCCESS")) : []
		}
	}

	showTotalAmount = (cart) => {
		var total = 0;
		if (cart?.length > 0) {
			for (var i = 0; i < cart.length; i++) {
				total += cart[i].SanPham.DonGia * cart[i].SoLuong;
			}
		}
		return total;
	}

	render() {
		var { user, orderSuccess } = this.state;
		console.log(orderSuccess)
		return (
			<div style={{ display: 'flex', flexDirection: 'column',width:'40%',marginLeft:'30%',marginTop:'2%'}} fluid>
				<Container style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', paddingBottom: '1rem', paddingTop: '2rem' }}>
					<p style={{ fontSize: '20px',fontWeight:'bold' }}>{orderSuccess ? "Đã đặt hàng thành công" : "Đặt hàng thất bại"}</p>
					<div style={{
						
						borderRadius: '50rem',
						height: '4rem', width: '4rem',
						backgroundColor: '#ebf5f7',
						zIndex: '1', marginLeft: '42%',
						paddingTop: '1.2rem', marginTop: '1rem',
						marginBottom: '1rem'
					}}>
					{
						orderSuccess ? 
						<FaCheck style={{ marginLeft: '1.4rem', fontSize: '1.5rem', color: '#06c1d4' }} />
						: <FaTimes style={{marginLeft:'1.2rem',fontSize: '1.5rem', color: 'red' }} />
					}
					</div>
					<p>{orderSuccess ? "Cảm ơn khách hàng đã đặt hàng. Trong vòng 24h nhân viên sẽ gọi điện xác nhận đặt hàng cho anh chị" : "Vui lòng đặt hàng lại"}</p>
				</Container>
				<Container style={{display: 'flex', flexDirection: 'column',border:'3px solid #3ac9c9',borderRadius:'10px',padding:'1rem'}}>
					<p style={{fontWeight:'bold',fontSize:'16px'}}>Thông tin đặt hàng</p>
					<div className="details-receiver" style={{ display: 'flex' }}>
						<p>Người nhận:</p>
						<p style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>{user.HoTen}</p>
					</div>
					<div className="details-receiver" style={{ display: 'flex' }}>
						<p>Nhận hàng tại:</p>
						<p style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>{orderSuccess ? orderSuccess.DiaChi : ""}</p>
					</div>
					<div className="details-receiver" style={{ display: 'flex' }}>
						<p>Tổng tiền thanh toán:</p>
						<p style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>{this.showTotalAmount(orderSuccess ? orderSuccess.DanhSachSanPham : [])}</p>
					</div>
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
export default connect(mapStateToProps, null)(TrangDatHangThanhCong);