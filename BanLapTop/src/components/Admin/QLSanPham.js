import React from 'react';
import SPTatCaSanPham from '../Admin/SPTatCaSanPham';
import { Card } from 'react-bootstrap';

const QLSanPham = () => {
	return (
		<>
			<div style={{ backgroundColor: '#3ac9c9', marginLeft: '3.8rem', paddingLeft: '2rem', paddingBottom: '1rem' }}>
				<p style={{ color: 'white', fontSize: '23px' }}>Sản phẩm</p>
			</div>
			<Card style={{ padding: '2rem', width: '95%', left: '3.7rem', boxShadow: 'none', backgroundColor: '#f7f7f7' }}>

				<SPTatCaSanPham />
			</Card>
		</>
	)
}
export default QLSanPham;