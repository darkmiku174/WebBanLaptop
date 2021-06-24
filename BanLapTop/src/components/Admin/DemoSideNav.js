import React from 'react'
import QLDonHang from '../../components/Admin/QLDonHang'
const DemoSideNav = () => {

  return (
    <div>
      {/*msb: main sidebar*/}
      <div className="msb" id="msb">
        <nav className="navbar navbar-default" role="navigation">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <div className="brand-wrapper">
              {/* Brand */}
              <div className="brand-name-wrapper">
                <a className="navbar-brand" href="#">S
                SAITAMA
                  </a>
              </div>
            </div>S
          </div>
          {/* Main Menu */}
          <div className="side-menu-container">
            <ul className="nav navbar-nav">
              <li><a href="#"><i className="fa fa-dashboard" /> Dashboard</a></li>
              <li className="active"><a href="#"><i className="fa fa-puzzle-piece" /> Components</a></li>
              <li><a href="#"><i className="fa fa-heart" /> Extras</a></li>
              {/* Dropdown*/}
              <li className="panel panel-default" id="dropdown">
                <a data-toggle="collapse" href="#dropdown-lvl1">
                  <i className="fa fa-diamond" /> Apps
                    <span className="caret" />
                </a>
                {/* Dropdown level 1 */}
                <div id="dropdown-lvl1" className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul className="nav navbar-nav">
                      <li><a href="#">Mail</a></li>
                      <li><a href="#">Calendar</a></li>
                      <li><a href="#">Ecommerce</a></li>
                      <li><a href="#">User</a></li>
                      <li><a href="#">Social</a></li>
                      {/* Dropdown level 2 */}
                      <li className="panel panel-default" id="dropdown">
                        <a data-toggle="collapse" href="#dropdown-lvl2">
                          <i className="glyphicon glyphicon-off" /> Sub Level <span className="caret" />
                        </a>
                        <div id="dropdown-lvl2" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul className="nav navbar-nav">
                              <li><a href="#">Link</a></li>
                              <li><a href="#">Link</a></li>
                              <li><a href="#">Link</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li><a href="#"><span className="glyphicon glyphicon-signal" /> Link</a></li>
            </ul>
          </div>{/* /.navbar-collapse */}
        </nav>
      </div>
      {/*main content wrapper*/}
      <div className="mcw">
        <QLDonHang />
      </div>
    </div>

  )
}
export default DemoSideNav;