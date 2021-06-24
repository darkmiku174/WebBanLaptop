import React from 'react';
import SearchBox from '../../components/User/SearchBox'
import { Row, Container, Table, Form, Button } from 'react-bootstrap';
import { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaPen } from 'react-icons/fa';
class DHTatCaDonHang extends Component {

	constructor(props) {
		super(props);
		this.state = {
			orders: [],
			edit: [],
			select:
				[
					{
						name: "Chờ xác nhận",
						value: 0
					},
					{
						name: "Chờ lấy hàng",
						value: 1
					},
					{
						name: "Đang giao",
						value: 2
					},
					{
						name: "Đã giao",
						value: 3
					},
					{
						name: "Đơn hủy",
						value: 4
					},
					{
						name: "Trả hàng/Hoàn tiền",
						value: 5
					}
				]
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/orders',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				orders: res.data
			});
			res.data.map((order, index) => {
				this.setState(pre => ({
					edit: [
						...pre.edit,
						{
							order: order,
							status: true
						}
					]
				})
				)
			})
		}).catch(err => {
			console.log(err);
		})
	}

	showOrders(orders, edit, select) {
		var result = null;
		if (orders.length > 0) {
			result = orders.map((order, index) => {
				return (
					<tr>
						<td className="id">
							<p>{order._id}</p>
						</td>

						<td className="user">
							<p>{order.User.HoTen}</p>
						</td>

						<td className="ngayban">
							<p>{order.NgayBan}</p>
						</td>

						<td className="trangthai" style={{ display: 'flex' }}>
							<Button style={{ height: '2.5rem', backgroundColor: 'transparent', border: 'none' }} key={index} onClick={() => this.onClick(edit, index)}>
								<FaPen style={{ fontSize: '16px', color: 'black' }} />
							</Button>
							<Form.Group controlId="exampleForm.ControlSelect1">
								<Form.Control as="select" defaultValue={order.TrangThai} key={index} onChange={this.onChange} disabled={edit[index]?.status}>
									{select.map((s, index) => {
										return <option key={index} value={s.value} onChange={() => this.onChange()}>{s.name}</option>
									})}

								</Form.Control>
							</Form.Group>
						</td>


						<td className="thaotac">
							<Link to={"/admin-order-details/" + order._id}>Xem chi tiết</Link>
						</td>

					</tr>
				)
			});
		}
		return result;
	}

	onChange = (e) => {
		console.log(e.target)
		// var target = e.target;
		// var name = target.name;
		// var value = target.value;
		// this.setState(pre => ({
		// 	orders: {
		// 		...pre.orders,
		// 		[name]: value
		// 	}
		// }))
	}

	onClick = (edit, index) => {
		edit[index].status = !edit[index].status
		this.setState({
			edit: edit
		})

	}

	render() {
		var { orders, edit, select } = this.state
		console.log(edit)
		return (
			<Container style={{ marginTop: '2rem' }}>

				<Row style={{ display: 'flex', justifyContent: 'space-between' }}>
					<SearchBox />
					<Button style={{ backgroundColor: '#3ac9c9' }}>Cập nhật</Button>
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
							{this.showOrders(orders, edit, select)}
						</tbody>
					</Table>
				</Row>

			</Container>
		)
	}
}
export default DHTatCaDonHang;