import React, { useState } from 'react';
import QLSanPham from '../../components/Admin/QLSanPham'
import QLDonHang from '../../components/Admin/QLDonHang';
import QLThuongHieu from '../../components/Admin/QLThuongHieu';
import { Navbar } from 'react-bootstrap';

const AdminTrangChu = () => {
    const [active, setActive] = useState("QLDH");
    return (
        <>
            <div>
                <link rel="stylesheet" type="text/css" href="css/menu.css" />
                <link rel="stylesheet" type="text/css" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
                <nav className="main-menu">
                    <div style={{ height: '56px', backgroundColor: '#343a40', padding: '1rem' }}>
                    </div>
                    <div />
                    <div className="scrollbar" id="style-1">
                        <ul>
                            <li onClick={() => setActive("QLDH")}>
                                <a>
                                    <i className="fa fa-list-alt fa-lg" />
                                    <span className="nav-text">Quản lý đơn hàng</span>
                                </a>
                            </li>
                            <li onClick={() => setActive("QLSP")}>
                                <a>
                                    <i className="fa fa-laptop fa-lg" />
                                    <span className="nav-text">Quản lý sản phẩm</span>
                                </a>
                            </li>
                            <li onClick={() => setActive("QLTH")}>
                                <a>
                                    <i className="fa fa-plus-square fa-lg" />
                                    <span className="nav-text">Quản lý thương hiệu</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
            <div className="mcw">
                {active === "QLDH" && <QLDonHang />}
                {active === "QLSP" && <QLSanPham />}
                {active === "QLTH" && <QLThuongHieu />}
            </div>
        </>
    )
}
export default AdminTrangChu;