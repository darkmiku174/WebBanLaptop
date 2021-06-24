import React from 'react';
import { Carousel } from 'react-bootstrap';

const SliderCommercial = () => {
	return (
		<div style={{ margin: "auto", width: "70%", padding: '2rem', height: '100%' }}>
			<Carousel>
				<Carousel.Item>
					<img
						style={{ height: '20rem' }}
						className="d-block w-100"
						src="https://lumen.thinkpro.vn//backend/uploads/banner/2021/5/19/Thu%20c%C5%A9-%C4%91%E1%BB%95i%20m%E1%BB%9Bi-1805-02.jpg"
						alt="First slide"
					/>
					{/* <Carousel.Caption>
		      <h3>Ưu đãi ThinkPad</h3>
		      <p>quà cực nhiều giảm giá cực đã</p>
		    </Carousel.Caption>*/}
				</Carousel.Item>
				<Carousel.Item>
					<img
						style={{ height: '20rem' }}
						className="d-block w-100"
						src="https://lumen.thinkpro.vn//backend/uploads/banner/2021/5/27/BannerWeb.jpg"
						alt="Second slide"
					/>

					{/* <Carousel.Caption>
		      <h3>Second slide label</h3>
		      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		    </Carousel.Caption>*/}
				</Carousel.Item>
				<Carousel.Item>
					<img
						style={{ height: '20rem' }}
						className="d-block w-100"
						src="https://lumen.thinkpro.vn//backend/uploads/banner/2021/6/1/HypeDriveHUB-01.jpg"
						alt="Third slide"
					/>

					{/* <Carousel.Caption>
		      <h3>Third slide label</h3>
		      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
		    </Carousel.Caption>*/}
				</Carousel.Item>
			</Carousel>
		</div>
	)
}
export default SliderCommercial;