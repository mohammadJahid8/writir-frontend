import React, { useEffect, useContext, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';

function PosCounterCheckout() {
	const context = useContext(AppSettings);
	const [time] = useState(getTime());
	const [tableData, setTableData] = useState();
	const [posMobileSidebarToggled, setPosMobileSidebarToggled] = useState(false);
	const [selectedTable, setSelectedTable] = useState();
	
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
	
	
	function toggleMobileSidebar(event, table) {
		event.preventDefault();
		
		setPosMobileSidebarToggled(true);
		setSelectedTable(table);
	}
	
	function dismissMobileSidebar(event) {
		event.preventDefault();
		
		setPosMobileSidebarToggled(false);
		setSelectedTable([]);
	}
	
	function getPrice(type) {
		var price = 0;
		
		if (selectedTable && selectedTable.orders) {
			var orders = selectedTable.orders;
			for (var i = 0; i < orders.length; i++) {
				if (type === 'subtotal') {
					price += parseFloat(orders[i].price);
				} else if (type === 'taxes') {
					price += parseFloat(orders[i].price) * 0.06;
				} else if (type === 'total') {
					price += parseFloat(orders[i].price);
					price += parseFloat(orders[i].price) * 0.06
				}
			}
		}
		
		return price.toFixed(2);
	}
	
	function getTotalPrice(orders) {
		var total = 0;
		if (orders) {
			for (var i = 0; i < orders.length; i++) {
				total += parseFloat(orders[i].price);
			}
		}
		return total.toFixed(2);
	}
	
	useEffect(() => {
		context.setAppHeaderNone(true);
		context.setAppSidebarNone(true);
		context.setAppContentFullHeight(true);
		context.setAppContentClass('p-0');
		
		fetch('/assets/data/pos/counter-checkout.json').then(res => res.json()).then((result) => { setTableData(result); });
		
		return function cleanUp() {
			context.setAppHeaderNone(false);
			context.setAppSidebarNone(false);
			context.setAppContentFullHeight(false);
			context.setAppContentClass('');
		};
		
		// eslint-disable-next-line
	}, []);
	
	return (
		<div className={'pos pos-vertical pos-with-header pos-with-sidebar ' + ((posMobileSidebarToggled) ? 'pos-mobile-sidebar-toggled' : '')} id="pos">
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
					<div className="pos">
						<div className="pos-container">
							<div className="pos-content h-100">
								<div className="pos-content-container p-3 h-100">
									<div className="row gx-3">
										{tableData && tableData.length > 0 ? (tableData.map((table, index) => (
											<div className="col-xl-3 col-lg-4 col-md-6 pb-3" key={index}>
												<div className={'pos-checkout-table' + 
													((selectedTable && table.tableNo === selectedTable.tableNo) ? ' selected' : '') + 
													((!table.orders && table.status !== 'Reserved') ? ' available' : '') + 
													((table.orders) ? ' in-use' : '') +
													((table.status === 'Reserved') ? ' disabled' : '')
												}>
													<a href="#/" className="pos-checkout-table-container" onClick={(event) => toggleMobileSidebar(event, table)}>
														<div className="pos-checkout-table-header">
															<div className="status"><i className="bi bi-circle-fill"></i></div>
															<div className="fw-semibold">Table</div>
															<div className="fw-bold fs-1">{table.tableNo}</div>
															<div className="fs-13px text-body text-opacity-50">
																{table.orders && (<span>{table.orders.length} order</span>)}
																{table.status === 'Reserved' && (<span>Reserved for {table.reserveName}</span>)}
																{!table.orders && table.status !== 'Reserved' && (<span>max { table.totalPax } pax</span>)}
															</div>
														</div>
														<div className="pos-checkout-table-info small">
															<div className="row">
																<div className="col-6 d-flex justify-content-center">
																	<div className="w-20px"><i className="far fa-user text-body text-opacity-50"></i></div>
																	<div className="w-60px">{table.pax} / {table.totalPax}</div>
																</div>
																<div className="col-6 d-flex justify-content-center">
																	<div className="w-20px"><i className="far fa-clock text-body text-opacity-50"></i></div>
																	<div className="w-60px">{(table.totalTime) ? table.totalTime : '-'}</div>
																</div>
															</div>
															<div className="row">
																<div className="col-6 d-flex justify-content-center">
																	<div className="w-20px"><i className="fa fa-receipt text-body text-opacity-50"></i></div>
																	<div className="w-60px">${getTotalPrice(table.orders)}</div>
																</div>
																<div className="col-6 d-flex justify-content-center">
																	<div className="w-20px"><i className="fa fa-dollar-sign text-body text-opacity-50"></i></div>
																	<div className={'w-60px'+ ((table.status === 'Paid') ? ' text-success' : '')}>{(table.status !== 'Reserved') ? table.status : '-'}</div>
																</div>
															</div>
														</div>
													</a>
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
			
							<div className="pos-sidebar" id="pos-sidebar">
								<div className="pos-sidebar-header">
									<div className="back-btn">
										<button type="button" onClick={dismissMobileSidebar} className="btn">
											<i className="fa fa-chevron-left"></i>
										</button>
									</div>
									<div className="icon"><i className="fa fa-plate-wheat"></i></div>
									<div className="title">Table {(selectedTable && selectedTable.tableNo) ? selectedTable.tableNo : '-'}</div>
									<div className="order">Order: <span className="fw-semibold">#{ (selectedTable && selectedTable.orderNo) ? selectedTable.orderNo : '-' }</span></div>
								</div>
								<hr className="m-0 opacity-1" />
								<PerfectScrollbar className="pos-sidebar-body">
									<div>
										{selectedTable && selectedTable.orders ? (selectedTable.orders.map((order, index) => (
											<div className="pos-order py-3" key={index}>
												<div className="pos-order-product">
													<div className="img w-50px h-50px rounded" style={{backgroundImage: 'url('+ order.image +')'}}></div>
													<div className="flex-1">
														<div className="row">
															<div className="col-7">
																<div className="fs-6 fw-semibold">{ order.title }</div>
																<div className="fs-13px">${ order.price }</div>
																{order.options && order.options.map((option, index) => (
																	<div className="fs-13px text-body text-opacity-50" key={index}>- size: {option}</div>
																))}
															</div>
															<div className="col-2">x{ order.quantity }</div>
															<div className="col-3 text-body fw-semibold text-end">${ (parseFloat(order.price) * order.quantity).toFixed(2) }</div>
														</div>
													</div>
												</div>
											</div>
										))) : (
											<div className="pos-order py-3">
												No records found
											</div>
										)}
									</div>
								</PerfectScrollbar>
								
								<div className="pos-sidebar-footer">
									<div className="d-flex align-items-center mb-2">
										<div>Subtotal</div>
										<div className="flex-1 text-end h6 mb-0">${getPrice('subtotal')}</div>
									</div>
									<div className="d-flex align-items-center">
										<div>Taxes (6%)</div>
										<div className="flex-1 text-end h6 mb-0">${getPrice('taxes')}</div>
									</div>
									<hr className="opacity-1 my-10px" />
									<div className="d-flex align-items-center mb-2">
										<div>Total</div>
										<div className="flex-1 text-end h4 mb-0">${getPrice('total')}</div>
									</div>
									<div className="mt-3">
										<div className="d-flex">
											<a href="#/" className="btn btn-default w-70px me-10px px-0 d-flex align-items-center justify-content-center">
												<span>
													<i className="fab fa-paypal fa-lg my-10px d-block mx-auto"></i>
													<span className="small fw-semibold">E-Wallet</span>
												</span>
											</a>
											<a href="#/" className="btn btn-default w-70px me-10px d-flex align-items-center justify-content-center">
												<span>
													<i className="fa fa-credit-card fa-fw fa-lg my-10px d-block mx-auto"></i>
													<span className="small fw-semibold">Card</span>
												</span>
											</a>
											<a href="#/" className="btn btn-theme flex-fill d-flex align-items-center justify-content-center">
												<span>
													<i className="fa fa-wallet fa-lg my-10px d-block mx-auto"></i>
													<span className="small fw-semibold">Cash</span>
												</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PosCounterCheckout;