import React from 'react'
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap'
const Footer = () => {
	return (
		<div style={{ display: "flex", backgroundColor: '#343a40', marginTop: '2rem', flexDirection: 'column', color: 'white' }}>

			{/*Row 1*/}
			<Row style={{ display: 'flex' }}>


				{/*Col 1 of 1*/}
				<Col md={1}>

				</Col>

				{/*Col 2 of 1*/}
				<Col md={5}>
					{/*<img src="https://lambanner.com/wp-content/uploads/2020/04/MNT-DESIGN-10-MEO-THIET-KE-LOGO-1130x570.jpg" 
				alt="logo" 
				style={{width:'240px',height:'120px'}}/>*/}
				</Col>

				{/*Col 3 of 1*/}
				<Col md={3}>
					<div style={{ marginTop: '1rem' }}>
						<p style={{ fontWeight: "bold" }}>Hotline</p>
						<p>1900.569.00</p>
					</div>
				</Col>

				{/*Col 4 of 1*/}
				<Col md={2}>
					<div style={{ display: 'flex', padding: '2rem', justifyContent: 'space-around' }}>
						<FaFacebook style={{ width: '1.5rem', height: '1.5rem' }} />
						<FaTwitter style={{ width: '1.5rem', height: '1.5rem' }} />
						<FaEnvelope style={{ width: '1.5rem', height: '1.5rem' }} />
					</div>
				</Col>

				{/*Col 5 of 1*/}
				<Col md={1}>

				</Col>

			</Row>

			{/*Row 2*/}
			<Row>

				{/*Col 1 of 2*/}
				<Col md={1}>

				</Col>

				{/*Col 2 of 2*/}
				<Col md={5}>
					<p style={{ fontWeight: "bold" }}>Sản phẩm</p>
				</Col>

				{/*Col 3 of 2*/}
				<Col md={3}>
					<p style={{ fontWeight: "bold" }}>Địa chỉ</p>
				</Col>

				{/*Col 4 of 2*/}
				<Col md={3}>
					<p style={{ fontWeight: "bold" }}>Về chúng tôi</p>
				</Col>

				{/*Col 5 of 2*/}
				<Col md={1}>

				</Col>

			</Row>

			{/*Decoration Row*/}
			<Row><div style={{ height: '0.5rem' }}></div></Row>

			{/*Row 3*/}
			<Row>
				{/*Col 1 of 3*/}
				<Col md={1}>

				</Col>

				{/*Col 2 of 3*/}
				<Col md={2} style={{ display: 'flex', flexDirection: 'column', fontSize: '14px' }}>
					<a href="#">Laptop Dell</a>
					<a href="#">Laptop HP</a>
					<a href="#">Laptop Lenovo</a>
					<a href="#">Laptop ThinkPad</a>
				</Col>

				{/*Col 3 of 3*/}
				<Col md={3} style={{ display: 'flex', flexDirection: 'column', fontSize: '14px' }}>
					<a href="#">Alienware</a>
					<a href="#">Laptop Razor</a>
					<a href="#">MacBook</a>
					<a href="#">Laptop Acer</a>
				</Col>

				{/*Col 4 of 3*/}
				<Col md={3}>
					<p>11/3 ấp 2, Xuân Thới Sơn, Hóc Môn, TP.HCM</p>
				</Col>

				{/*Col 5 of 3*/}
				<Col md={3}>
					Paragraphs are the building blocks of papers.
					Many students define paragraphs in terms of length:
					a paragraph is a group of at least five sentences,
					a paragraph is half a page long, etc. In reality,
					though, the unity and coherence of ideas among sentences
					is what constitutes a paragraph.
			</Col>

				{/*Col 6 of 3*/}
				<Col md={1}>

				</Col>

			</Row>

		</div>
	)
}
export default Footer;