import React from 'react';
import './App.scss';
import TrangDangNhap from './pages/User/TrangDangNhap';
import TrangQuenMatKhau from './pages/User/TrangQuenMatKhau';
import TrangChu from './pages/User/TrangChu';
import TrangXemTatCa from './pages/User/TrangXemTatCa';
import TrangXemChiTietSanPham from './pages/User/TrangXemChiTietSanPham';
import TrangDatHang from './pages/User/TrangDatHang';
import TrangTaiKhoan from './pages/User/TrangTaiKhoan';
import TrangDangKy from './pages/User/TrangDangKy';
import TrangGioHang from './pages/User/TrangGioHang';
import AdminTrangThemSP from './pages/Admin/AdminTrangThemSP';
import AdminTrangChu from './pages/Admin/AdminTrangChu';
import AdminTrangChiTietDonHang from './pages/Admin/AdminTrangChiTietDonHang';
import AdminTrangThemTH from './pages/Admin/AdminTrangThemTH';
import TrangDatHangThanhCong from './pages/User/TrangDatHangThanhCong';
import { Redirect } from 'react-router';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <TrangChu />
    },
    {
        path: '/login',
        exact: false,
        main: () => <TrangDangNhap />
    },
    {
        path: '/forgetpassword',
        exact: false,
        main: () => < TrangQuenMatKhau />
    },
    {
        path: '/admin',
        exact: false,
        main: () => < AdminTrangChu />
    },
    {
        path: '/products',
        exact: false,
        main: () => < TrangXemTatCa />
    },
    {
        path: '/order',
        exact: false,
        main: () => < TrangDatHang />
    },
    {
        path: '/detail/:id',
        exact: false,
        main: ({ match }) => < TrangXemChiTietSanPham match={match} />
    },
    {
        path: '/register',
        exact: false,
        main: () => < TrangDangKy />
    },
    {
        path: '/cart',
        exact: false,
        main: () => < TrangGioHang />
    },
    {
        path: '/user',
        exact: false,
        render: () => {
            return localStorage.getItem("accessToken") ? <TrangChu /> : <Redirect to="/login" />
        },
        main: () => < TrangTaiKhoan />
    },
    {
        path: '/order-success',
        exact: false,
        main: () => < TrangDatHangThanhCong />
    },
    {
        path: '/admin-products-add',
        exact: false,
        main: () => < AdminTrangThemSP />
    },
    {
        path: '/add-trademark/',
        exact: false,
        main: () => < AdminTrangThemTH />
    },
    {
        path: '/admin-order-details/:id',
        exact: false,
        main: ({ match }) => < AdminTrangChiTietDonHang match={match} />
    },
    // {
    //     path: '',
    //     exact: false,
    //     main: () => <NotFound />
    // }
];

export default routes;