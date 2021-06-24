import React from 'react'
import { Component } from 'react';
class TrangTaiKhoan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem("USER")) ? JSON.parse(localStorage.getItem("USER")) : []
        }
    }

    render() {
        var { user } = this.state
        var address = user.Address.split(',')
        return (
            <div>
                <main className="container">
                    <section className="row">
                        <div className="offset-2 col-8 mt-4 ">
                            <form action method="post">
                                <div className="card">
                                    <div className="card-header">
                                        <h3><b>Thông tin tài khoản</b></h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="hoten"><b>Họ và tên</b></label>
                                                    <input type="text" className="form-control" name="hoten" id="hoten" aria-describedby="helpId" placeholder="Họ và tên" value={user.HoTen} />
                                                </div>

                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="SDT"><b>Số điện thoại</b></label>
                                                    <input type="text" className="form-control" name="SDT" id="SDT" aria-describedby="helpId" placeholder="Số điện thoại" value={user.SDT} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email"><b>Email</b></label>
                                                    <input type="text" className="form-control" name="email" id="email" aria-describedby="helpId" placeholder="Email" value={user.Email} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <button style={{ backgroundColor: 'rgb(0, 153, 255)', padding: '5px 20px', borderRadius: '20px', MozBorderRadius: '20px', WebkitBorderRadius: '20px' }} className="btn btn-success">
                                            Cập nhật
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className="row">
                        <div className="offset-2 col-8 mt-4 ">
                            <form action method="post">
                                <div className="card">
                                    <div className="card-header">
                                        <h3><b>Địa chỉ giao hàng</b></h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="tinhtp" />
                                                    <input type="text" className="form-control" name="tinhtp" id="tinhtp" aria-describedby="helpId" placeholder="Tỉnh/Thành phố" value={address[3]} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="phuongxa" />
                                                    <input type="text" className="form-control" name="phuongxa" id="phuongxa" aria-describedby="helpId" placeholder="Phường/Xã" value={address[1]}/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="quanhuyen" />
                                                    <input type="text" className="form-control" name="quanhuyen" id="quanhuyen" aria-describedby="helpId" placeholder="Quận/Huyện" value={address[2]} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="sonha" />
                                                    <input type="text" className="form-control" name="sonha" id="sonha" aria-describedby="helpId" placeholder="Số nhà" value={address[0]} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <button style={{ backgroundColor: 'rgb(0, 153, 255)', padding: '5px 20px', borderRadius: '20px', MozBorderRadius: '20px', WebkitBorderRadius: '20px' }} className="btn btn-success">
                                            Cập nhật
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className="row">
                        <div className="offset-2 col-8 mt-4 ">
                            <form action method="post">
                                <div className="card">
                                    <div className="card-header">
                                        <h3><b>Thay đổi mật khẩu</b></h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="password"><b>Nhập mật khẩu hiện tại</b></label>
                                                    <input type="password" className="form-control" name="password" id="password" placeholder="Nhập mật khẩu hiện tại" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="newpassword"><b>Mật khẩu mới</b></label>
                                                    <input type="password" className="form-control" name="newpassword" id="newpassword" placeholder="Nhập mật khẩu mới" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="re-newpassword"><b>Nhập lại mật khẩu mới</b></label>
                                                    <input type="password" className="form-control" name="re-newpassword" id="re-newpassword" placeholder="Nhập lại mật khẩu mới" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <button style={{ backgroundColor: 'rgb(0, 153, 255)', padding: '5px 20px', borderRadius: '20px', MozBorderRadius: '20px', WebkitBorderRadius: '20px' }} className="btn btn-success">
                                            Cập nhật
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
export default TrangTaiKhoan;