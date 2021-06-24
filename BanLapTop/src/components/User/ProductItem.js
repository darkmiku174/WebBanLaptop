import React from "react";
import { Component } from 'react'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProductItems extends Component {


	render() {
		var { product } = this.props;
		return (
			<div>
				<div className="card" style={{ width: '12.5rem', borderRadius: '0' ,height:'16rem' }}>
					<Link to={`/detail/${product._id}`}>
						<div className="card-info">
							<img src={product.HinhAnh} alt="product" style={{ width: "100%" }} />
							<div class="container">
								<h6>{product.TenSP}</h6>
								<p style={{ color: "#ed8021" }}> {product.DonGia}</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		)
	};
};
export default ProductItems;