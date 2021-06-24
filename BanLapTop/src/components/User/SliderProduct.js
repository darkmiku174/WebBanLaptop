import React from 'react'
import ProductItem from './ProductItem'
import { Row, Container } from 'react-bootstrap'
import { Component } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
class SliderProduct extends Component {

	constructor(props) {
		super(props);
		this.state = {
			offset: 0,
            products: [],
            orgtableData: [],
            perPage: 10,
            currentPage: 0
			
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: 'http://localhost:5000/api/products',
			data: null
		}).then(res => {
			console.log(res);
			var tdata = res.data;
			var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
			this.setState({
				pageCount: Math.ceil(tdata.length / this.state.perPage),
				orgtableData : tdata,
				products:slice
			})
		}).catch(err => {
			console.log(err);
		})
	}

	handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

	loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			products:slice
		})
	
    }
	

	render() {
		var { products } = this.state;
		var { check } = this.props
		return (
			<Container style={{ marginLeft: '5%' }}>
				<Row>
					{this.showProducts(products, check)}
				</Row>
				<ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
					disable={true}/>
					
			</Container>
		)

	}

	showProducts(products, check) {
		var result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				if (check != "1" && index>=10)
					return null
				return <ProductItem product={product} key={index} index={index} />
			});
		}
		return result;
	}
};

export default SliderProduct;