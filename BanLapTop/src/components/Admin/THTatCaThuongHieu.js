import React from 'react';
import SearchBox from '../../components/User/SearchBox'
import { Row, Container, Table, Button } from 'react-bootstrap';
import axios from 'axios'
import { Component } from 'react';
import {Link} from 'react-router-dom'
class THTatCaThuongHieu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			trademarks: []
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/trademarks',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				trademarks: res.data
			});
		}).catch(err => {
			console.log(err);
		})
	}

	onClick = (trademark) => {
		axios({
			method: 'DELETE',
			url: 'http://localhost:5000/api/trademarks/delete/'+trademark._id,
			data: null
		}).then(res => {
			window.location.reload();
		}).catch(err => {
			console.log(err);
		})
	}

	showTrademarks(trademarks) {
		var result = null;
		if (trademarks.length > 0) {
			result = trademarks.map((trademark, index) => {
				return (
					<tr key = {index}>
						<td>
							Lenovo
						</td>

						<td>
							<img src={trademark.Logo}
								style={{ width: '5rem', height: '3rem', backgroundColor: 'white' }} />
						</td>

						<td>
							<p>{trademark.MoTa}</p>
						</td>

						<td>
							<Button onClick={() =>this.onClick(trademark)} style={{ backgroundColor: 'white', color: 'black', fontSize: '12px', border: '1px solid black' }}>Delete</Button>
						</td>

					</tr>
				)
			});
		}
		return result;
	}

	render() {
		var { trademarks } = this.state
		return (
			<Container>

				<Row style={{display:'flex',justifyContent:'space-between'}}>
					<SearchBox />
					<Link to="/add-trademark">
						<Button style={{backgroundColor:'#3ac9c9'}}>Thêm thương hiệu</Button>
					</Link>
				</Row>

				<Row>

					<Table striped bordered hover style={{ marginTop: '1rem' }}>
						<thead>
							<tr>
								<th>Tên thương hiệu</th>
								<th>Logo</th>
								<th>Giới thiệu</th>
								<th>Xoá</th>
							</tr>
						</thead>
						<tbody>
							{this.showTrademarks(trademarks)}
						</tbody>
					</Table>
				</Row>

			</Container>
		)
	}
}
export default THTatCaThuongHieu;