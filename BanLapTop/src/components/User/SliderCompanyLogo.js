import React from 'react'
import { Component } from 'react';
import { Row, Card } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';
class SliderCompanyLogo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trademarks: [],
			money: ["Trên 50 triệu", "40 - 50 triệu", "30 - 40 triệu", "20 - 30 triệu", "15 - 20 triệu", "10 - 15 triệu", "dưới 10 triệu"]
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

	onClickLogo = (trademark) => {
		var oldTag = JSON.parse(localStorage.getItem("TAGTRADEMARK")) ? JSON.parse(localStorage.getItem("TAGTRADEMARK")) : []
		oldTag.push(trademark)
		localStorage.setItem("TAGTRADEMARK", JSON.stringify(oldTag))
	}

	showLogos(trademarks) {
		var result = null;
		if (trademarks.length > 0) {
			result = trademarks.map((trademark, index) => {
				return (
					<Link to="/products" key={index} onClick={() => this.onClickLogo(trademark)}>
						<Card style={{ width: '7rem', marginLeft: "0.3rem" }}>
							<Card.Img variant="top" src={trademark.Logo} />
						</Card>
					</Link>
				)
			});
		}
		return result;
	}

	onClickMoney = (index) => {
		localStorage.setItem("TAGMONEY", JSON.stringify(index))
	}


	showMoney(money) {
		var result = null;
		if (money.length > 0) {
			result = money.map((m, index) => {
				return (
					<Link to="/products" label={m} key={index} onClick={() => this.onClickMoney(index)} >
						<Card className="card-price" style={{ marginLeft: '1rem', width: '7rem', height: '2.4rem', justifyContent: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: '13px', padding: '0.2rem' }}>
							{m}
						</Card>
					</Link>
				)
			});
		}
		return result;
	}
	render() {
		var { trademarks, money } = this.state
		return (
			<>
				<div style={{ display: 'flex', marginTop: '2rem', marginBottom: '1rem' }}>
					<h6 style={{ padding: '20px 0' }}>Thương hiệu </h6>
					<Row style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
						{this.showLogos(trademarks)}
					</Row>
				</div>
				<div style={{ display: 'flex' }}>
					<h6 style={{ padding: '7px 0' }}>Khoảng giá </h6>
					<Row style={{ marginLeft: '4rem', marginBottom: '1rem', display: 'flex' }}>
						{this.showMoney(money)}
					</Row>
				</div>
			</>
		)
	}

}
export default SliderCompanyLogo;