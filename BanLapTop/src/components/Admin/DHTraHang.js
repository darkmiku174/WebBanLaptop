import React from 'react';
import SearchBox from '../../components/User/SearchBox'
import { Row, Col, Container, Table,Form,Button } from 'react-bootstrap';
const DHTraHang = () => {
	return (
		<Container style={{ marginTop: '2rem' }}>
				
				<Row style={{display:'flex',justifyContent:'space-between'}}>
					<SearchBox />
					<Button style={{backgroundColor:'#3ac9c9'}}>Cập nhật</Button>
				</Row>

				<Row>

					<Table striped bordered hover style={{ marginTop: '1rem' }}>
						<thead>
							<tr>
								<th>ID</th>
								<th>User</th>
								<th>Ngày Mua</th>
								<th>Trạng thái</th>
								<th>Xem chi tiết đơn hàng</th>
							</tr>
						</thead>
						<tbody>
							<tr>

								<td className="id">
									<p>DH001</p>
								</td>

								<td className="tongdon">
									<p>21.000.000 đ</p>
								</td>

								<td className="trangthai">
									<Form.Group controlId="exampleForm.ControlSelect1">
									    <Form.Control as="select">
									      <option>Chờ xác nhận</option>
									      <option>Chờ lấy hàng</option>
									      <option>Đang giao</option>
									      <option>Đã giao</option>
									      <option>Đơn hủy</option>
									      <option>Trà hàng/Hoàn tiền</option>
									    </Form.Control>
									</Form.Group>
								</td>

								<td className="user">
									<p>Nguyễn văn A</p>
								</td>

								<td className="thaotac">
									<a href="/admin-order-details">Xem chi tiết</a>
								</td>

							</tr>
						</tbody>
					</Table>
				</Row>

			</Container>
	)
}
export default DHTraHang;