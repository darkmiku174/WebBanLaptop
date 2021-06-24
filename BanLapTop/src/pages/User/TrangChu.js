import React from 'react';
import SliderCommercial from '../../components/User/SliderCommercial';
import SliderCompanyLogo from '../../components/User/SliderCompanyLogo'
import SliderProduct from '../../components/User/SliderProduct';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const TrangChu = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className="header">

			</div>
			<div className="body">
				<Container style={{ display: 'flex', flexDirection: 'column' }}>
					<SliderCommercial />
					<div>
						<h4>Máy tính xách tay</h4>
						<SliderCompanyLogo />
						<SliderProduct />
						<Link to="/products" class="btn btn-primary" style={{ backgroundColor: '#3ac9c9', margin: 'auto', marginLeft: '25%', marginTop: '1.5rem' }}>Xem tất cả</Link>
					</div>
				</Container>
			</div>
		</div>
	)
}
export default TrangChu;