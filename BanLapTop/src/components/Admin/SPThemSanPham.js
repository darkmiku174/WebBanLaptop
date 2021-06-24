import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
const SPThemSanPham = () => {
	return (
		<div>
			<Container style={{ marginTop: '1rem' }}>
				<h4>Thêm sản phẩm</h4>
				<div>

					<Container style={{ margin: 'auto', padding: '2rem', marginTop: '2rem' }}>
						<Row>
							<Col sm={6}>
								<Container>
									<img src="https://phucanhcdn.com/media/product/39638_gaming_legion_5_ha5.jpg" alt="Lenovo-Legion"
										width="75%"
										height="75%"
									/>
								</Container>
								<Button style={{ marginTop: '0.7rem', marginLeft: '10rem' }}>Xác nhận thêm</Button>
							</Col>
							<Col sm={6}>
								<div style={{
									display: 'flex',
									flexDirection: 'column'
								}}>
									<Form inline>
										<Form.Label className="mb-0 mr-2">Tên sản phẩm</Form.Label>
										<Form.Control style={{ width: '75%', marginTop: '1%', marginLeft: '1%' }} type="text" />
									</Form>
									<div style={{ display: 'flex', marginTop: '1%' }}>
										<Col sm={6}>
											<Form inline>
												<Form.Label className="mb-0 mr-2">MPN</Form.Label>
												<Form.Control style={{ width: '70%', marginTop: '1%' }} type="text" />
											</Form>
											<Form inline>
												<Form.Label className="mb-0 mr-2">Pin</Form.Label>
												<Form.Control style={{ width: '70%', marginTop: '1%', marginLeft: '5.5%' }} type="text" />
											</Form>
										</Col>
										<Col sm={6}>
											<Form inline>
												<Form.Label className="mb-0 mr-2">SKU</Form.Label>
												<Form.Control style={{ width: '70%', marginTop: '1%', marginLeft: '13%' }} type="text" />
											</Form>
											<Form inline>
												<Form.Label className="mb-0 mr-2">Màu sắc</Form.Label>
												<Form.Control style={{ width: '70%', marginTop: '1%' }} type="text" />
											</Form>
										</Col>
									</div>
									<Form inline>
										<Form.Label className="mb-0 mr-2">Tên sản phẩm</Form.Label>
										<Form.Control style={{ width: '75%', marginTop: '1%', marginLeft: '1%' }} type="text" />
									</Form>
									<Form inline>
										<Form.Label className="mb-0 mr-2">Vi xử lý</Form.Label>
										<Form.Control style={{ width: '75%', marginTop: '1%', marginLeft: '10%' }} type="text" />
									</Form>
									<Form inline>
										<Form.Label className="mb-0 mr-2">Màn hình</Form.Label>
										<Form.Control style={{ width: '75%', marginTop: '1%', marginLeft: '7%' }} type="text" />
									</Form>
									<Form inline>
										<Form.Label className="mb-0 mr-2">Độ phủ màu</Form.Label>
										<Form.Control style={{ width: '75%', marginTop: '1%', marginLeft: '3%' }} type="text" />
									</Form>
									<Form inline>
										<Form.Label className="mb-0 mr-2">RAM</Form.Label>
										<Form.Control style={{ width: '75%', marginTop: '1%', marginLeft: '13.5%' }} type="text" />
									</Form>
									<Form inline>
										<Form.Label className="mb-0 mr-2">Card đồ họa</Form.Label>
										<Form.Control style={{ width: '75%', marginTop: '1%', marginLeft: '3%' }} type="text" />
									</Form>
									<Form inline>
										<Form.Label className="mb-0 mr-2">Lưu trữ</Form.Label>
										<Form.Control style={{ width: '75%', marginTop: '1%', marginLeft: '10%' }} type="text" />
									</Form>
									<Form inline>
										<Form.Label className="mb-0 mr-2">Cổng kết nối</Form.Label>
										<Form.Control style={{ width: '75%', marginTop: '1%', marginLeft: '2%' }} type="text" />
									</Form>
									<Form inline>
										<Form.Label className="mb-0 mr-2">Cân nặng</Form.Label>
										<Form.Control style={{ width: '75%', marginTop: '1%', marginLeft: '6.6%' }} type="text" />
									</Form>
									<Form inline>
										<Form.Label className="mb-0 mr-2">Hệ điều hành</Form.Label>
										<Form.Control style={{ width: '75%', marginTop: '1%', marginLeft: '1%' }} type="text" />
									</Form>

								</div>


							</Col>
						</Row>
					</Container>
				</div>
			</Container>
		</div>
	)
}
export default SPThemSanPham;