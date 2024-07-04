import React, { useEffect, useContext, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';

function PosKitchenOrder() {
	const context = useContext(AppSettings);
	const [time] = useState(getTime());
	const [orderData, setOrderData] = useState();
	
	function checkTime(i) {
		if (i < 10) {i = "0" + i};
		return i;
	}
	
	function getTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var a;
		m = checkTime(m);
		a = (h > 11) ? 'pm' : 'am';
		h = (h > 12) ? h - 12 : h;
	
		setTimeout(() => {
			getTime();
		}, 500);
		return h + ":" + m + a;
	}
	
	function getTotalCompletedItems(items) {
		var count = 0;
		for (var i = 0; i < items.length; i++) {
			if (items[i].status === 'Completed') {
				count++;
			}
		}
		return count;
	}
  
	useEffect(() => {
		context.setAppHeaderNone(true);
		context.setAppSidebarNone(true);
		context.setAppContentFullHeight(true);
		context.setAppContentClass('p-0');
		
		fetch('/assets/data/pos/kitchen-order.json').then(res => res.json()).then((result) => { setOrderData(result); });
		
		return function cleanUp() {
			context.setAppHeaderNone(false);
			context.setAppSidebarNone(false);
			context.setAppContentFullHeight(false);
			context.setAppContentClass('');
		};
		
		// eslint-disable-next-line
	}, []);

	return (
		<div className="pos pos-vertical pos-with-header" id="pos">
			<div className="pos-container">
				<div className="pos-header">
					<div className="logo">
						<Link to="/pos/counter-checkout" href="pos_counter_checkout.html">
							<div className="logo-img"><i className="fa fa-bowl-rice" style={{fontSize: '1.5rem'}}></i></div>
							<div className="logo-text">Pine & Dine</div>
						</Link>
					</div>
					<div className="time" id="time">{time}</div>
					<div className="nav">
						<div className="nav-item">
							<Link to="/pos/kitchen-order" className="nav-link">
								<i className="far fa-clock nav-icon"></i>
							</Link>
						</div>
						<div className="nav-item">
							<Link to="/pos/table-booking" className="nav-link">
								<i className="far fa-calendar-check nav-icon"></i>
							</Link>
						</div>
						<div className="nav-item">
							<Link to="/pos/menu-stock" className="nav-link">
								<i className="fa fa-chart-pie nav-icon"></i>
							</Link>
						</div>
					</div>
				</div>
				
				<div className="pos-content">
					<PerfectScrollbar className="pos-content-container h-100 p-0">
						{orderData && orderData.length > 0 ? (orderData.map((order, index) => (
							<div className="pos-task" key={index}>
								<div className="pos-task-info">
									<div className="h3 mb-1">Table {order.tableNo}</div>
									<div className="mb-3">Order No: #{order.orderNo}</div>
									<div className="mb-2">
										<span className={'badge fs-14px rounded-1' +
											((order.orderStatus !== 'Completed') ? ' bg-theme text-theme-color' : '') + 
											((order.orderStatus === 'Completed') ? ' text-bg-secondary' : '')
										}>{order.orderType}</span>
									</div>
									{order.orderTime && (<div><span className={((order.urgent) ? 'text-danger' : '')}>{order.orderTime}</span> time</div>)}
									{order.totalOrderTime && (<div>All dish served<br />{ order.totalOrderTime } total time</div>)}
								</div>
								<div className="pos-task-body">
									<div className="fs-16px mb-3">
										Completed: ({getTotalCompletedItems(order.items)}/{order.items.length})
									</div>
									<div className="row gx-4">
										{order.items && order.items.length > 0 ? (order.items.map((item, index) => (
											<div className="col-lg-3" key={index}>
												<div className={'pos-task-product' + ((item.status === 'Completed' || item.status === 'Cancelled') ? ' completed' : '')}>
													<div className="pos-task-product-img">
														<div className="cover" style={{backgroundImage: 'url('+ item.image +')'}}></div>
														{item.status === 'Completed' && (<div className="caption"><div>Completed</div></div>)}
														{item.status === 'Cancelled' && (<div className="caption"><div>Cancelled</div></div>)}
													</div>
													<div className="pos-task-product-info">
														<div className="flex-1">
															<div className="d-flex mb-1">
																<div className="fs-5 mb-0 fw-semibold flex-1 fw-semibold">{item.title}</div>
																<div className="fs-5 mb-0 fw-semibold">x{item.quantity}</div>
															</div>
															<div className="text-body text-opacity-75">
																{item.note.length > 0 && (item.note.map((note, index) => (
																	<div key={index}> - {note}</div>
																)))}
															</div>
														</div>
													</div>
													<div className="pos-task-product-action">
														<a href="#/" className={'btn btn-theme fw-semibold' + ((item.status === 'Completed' || item.status === 'Cancelled') ? ' disabled' : '')}>Complete</a>
														<a href="#/" className={'btn btn-default fw-semibold' + ((item.status === 'Completed' || item.status === 'Cancelled') ? ' disabled' : '')}>Cancel</a>
													</div>
												</div>
											</div>
										))) : (
											<div className="col-12">
												No records found
											</div>
										)}
									</div>
								</div>
							</div>
						))) : (
							<div>
								No records found
							</div>
						)}
					</PerfectScrollbar>
				</div>
			</div>
		</div>
	)
}

export default PosKitchenOrder;