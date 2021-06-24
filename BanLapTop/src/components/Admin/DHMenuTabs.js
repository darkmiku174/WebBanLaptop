import React from 'react';
import DHTatCaDonHang from '../Admin/DHTatCaDonHang';
import DHChoXacNhan from '../Admin/DHChoXacNhan';
import DHChoLayHang from '../Admin/DHChoLayHang';
import DHDaGiao from '../Admin/DHDaGiao';
import DHDangGiao from '../Admin/DHDangGiao';
import DHDonHuy from '../Admin/DHDonHuy';
import DHTraHang from '../Admin/DHTraHang';
import { Tabs, Tab } from 'react-bootstrap';
const DHMenuTabs = () => {
	return (
		<Tabs defaultActiveKey="tatcadonhang" id="uncontrolled-tab-example">
			<Tab eventKey="tatcadonhang" title="Tất cả đơn hàng">
				<DHTatCaDonHang />
			</Tab>
			<Tab eventKey="choxacnhan" title="Chờ xác nhận">
				<DHChoXacNhan />
			</Tab>
			<Tab eventKey="cholayhang" title="Chờ lấy hàng">
				<DHChoLayHang />
			</Tab>
			<Tab eventKey="danggiao" title="Đang giao">
				<DHDangGiao />
			</Tab>
			<Tab eventKey="dagiao" title="Đã giao">
				<DHDaGiao />
			</Tab>
			<Tab eventKey="donhuy" title="Đơn hủy">
				<DHDonHuy />
			</Tab>
			<Tab eventKey="trahang" title="Trả hàng/Hoàn tiền">
				<DHTraHang />
			</Tab>
		</Tabs>
	)
}
export default DHMenuTabs;