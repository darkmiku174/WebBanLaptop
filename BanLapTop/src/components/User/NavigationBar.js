import React from 'react';
import { Component } from 'react';
import { FaSearch, FaUserAlt, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Select from 'react-select'

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            check: JSON.parse(localStorage.getItem("USER")) ? true : false,
            products: [],
            search: JSON.parse(localStorage.getItem("SEARCH")) ? JSON.parse(localStorage.getItem("SEARCH")) : [],
            select: "",
        }
    }

    componentDidMount() {

        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/products',
            data: null
        }).then(res => {
            console.log(res);
            this.setState({
                products: res.data
            });

        }).catch(err => {
            console.log(err);
        })
    }

    componentDidUpdate() {
        var { products } = this.state
        localStorage.setItem("SEARCH", JSON.stringify([]))
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                var oldSearch = JSON.parse(localStorage.getItem("SEARCH"))
                oldSearch.push({
                    label: product.TenSP,
                    value: product._id
                })
                localStorage.setItem("SEARCH", JSON.stringify(oldSearch))
            });
        }
        return result;
    }

    onSelect = (e) => {
        this.setState({
            select: "/detail/" + e.value
        })
    }


    onClick = () => {
        localStorage.clear();
        window.location.reload();
    }

    render() {
        var { check, select, search } = this.state;
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark" >
                <div class="mx-auto order-0" >
                    <a class="navbar-brand mx-auto" href="/">TLT</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item-1">
                            <Link class="nav-link" to="/cart"><FaShoppingBag /></Link>
                        </li>
                        <li class="nav-item-1">
                            <div class="dropdown">
                                <span><Link class="nav-link" to="/user"><FaUserAlt /></Link></span>
                                <div class="dropdown-content">
                                    <Link to="/login" hidden={check}>
                                        <button >Đăng nhập</button>
                                    </Link>
                                    <Link to="/">
                                        <button onClick={this.onClick}>Đăng xuất</button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="buscar-caja">
                    <Select
                        menuPortalTarget={document.body}
                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                        options={search}
                        className="buscar-txt"
                        placeholder="Search laptop"
                        onChange={this.onSelect}

                    />
                    <Link to={select ? select : ""} class="buscar-btn">
                        <FaSearch />
                    </Link> */
                </div>
            </nav>
        )
    }
}
export default NavigationBar;