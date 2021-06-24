import React from 'react';
import {Link} from 'react-router-dom'
const TrangDangKy = () =>{

    return (
      <div>
        <title>Sign Up</title>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <main className="container">
          <section className="row">
            <div className="offset-2 col-8 mt-4 ">
              <form action method="post">
                <div className="card">
                  <div className="card-header">
                    <h3><b>Đăng ký</b></h3>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="username"><b>Tên đăng nhập</b></label>
                      <input type="text" className="form-control" name="username" id="username" aria-describedby="usernameHid" placeholder="Nhập tên đăng nhập" />
                      <small id="usernameHid" className="form-text text-muted">Username is required</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email"><b>Email</b></label>
                      <input type="text" className="form-control" name="email" id="email" aria-describedby="emailHid" placeholder="Nhập email" />
                      <small id="emailHid" className="form-text text-muted">Email is required</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password"><b>Mật Khẩu</b></label>
                      <input type="password" className="form-control" name="password" id="password" placeholder="Nhập mật khẩu" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="re-password"><b>Nhập lại mật khẩu</b></label>
                      <input type="password" className="form-control" name="re-password" id="re-password" placeholder="Nhập lại mật khẩu" />
                    </div>
                  </div>
                  <div className="card-footer text-muted">
                    <Link to="/" style={{width: '100%', backgroundColor: 'skyblue', padding: '5px 20px', borderRadius: '20px', MozBorderRadius: '20px', WebkitBorderRadius: '20px'}} className="btn btn-success">Đăng ký</Link>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
    );
  }
export default TrangDangKy;