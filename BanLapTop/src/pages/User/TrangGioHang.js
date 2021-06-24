import React from 'react';
import { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actDeleteProductInCart } from '../../actions/index';
import { Link } from 'react-router-dom'
class TrangGioHang extends Component {

    showProducts(cart) {
        var result = null;
        if (cart.length > 0) {
            result = cart.map((product, index) => {
                return (
                    <Row style={{ border: '1px solid #e3e7ef' }}>
                        {/*Col 1*/}
                        <Col md={3}>
                            <img src={product.product.HinhAnh}
                                style={{ weight: '10rem', height: '10rem' }} />
                        </Col>
                        {/*Col 2*/}
                        <Col md={5} style={{ paddingTop: '2rem' }}>
                            <p style={{
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }}>
                                {product.product.TenSP}
                            </p>
                            <div style={{ display: 'flex' }}>
                                <p>Đơn giá:</p>
                                <p style={{ marginLeft: '1rem' }}>29000000</p>
                            </div>
                            <p>x{product.quantity}</p>
                            <button key={index} onClick={() => this.onClick(cart, index)}>Xóa</button>
                        </Col>

                        {/*Col 3*/}
                        <Col md={4} style={{ paddingTop: '2rem' }}>
                            <p style={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                float: 'right'
                            }}>
                                {this.moneyProduct(product.quantity, product.product.DonGia)}
                            </p>
                        </Col>
                    </Row>
                )
            });
        }
        return result;
    };

    moneyProduct = (quantity, money) => {
        return parseInt(quantity) * parseInt(money)
    }

    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.DonGia * cart[i].quantity;
            }
        }
        return total;
    }

    onClick = (cart, index) => {
        cart.splice(index, 1);
        localStorage.setItem("CART", JSON.stringify(cart))
        window.location.reload();
    }


    render() {
        var { cart } = this.props
        return (
            <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Giỏ hàng</h4>
                <Container>
                    <Row>
                        <Col md={9} className="product-container-parent">
                            {this.showProducts(cart)}
                        </Col>
                        <Col md={3} style={{ border: '1px solid #e3e7ef', border: 'none' }}>
                            <Row style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                paddingTop: '1rem',
                                paddingBottom: '1rem',
                                border: '1px solid #e3e7ef'
                            }}>
                                <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Thành tiền:</p>
                                <p style={{ fontSize: '16px' }}>{this.showTotalAmount(cart)} đ</p>
                            </Row>
                            <Row style={{ border: '1px solid #e3e7ef' }}>
                                <Link to="/order">
                                    <Button style={{
                                        marginLeft: '3.5rem',
                                        marginTop: '1rem',
                                        marginBottom: '1rem',
                                        borderRadius: '20rem',
                                        backgroundColor: '#3ac9c9'
                                    }}>
                                        Tiến hành đặt hàng
                                    </Button>
                                </Link>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TrangGioHang);
