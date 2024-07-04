import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Highlight from 'react-highlight';
import Chart from 'chart.js/auto';
import { Card, CardHeader, CardBody, CardFooter } from './../../components/card/card.jsx';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';

function Widgets() {
	const [code1, setCode1] = useState();
	const [code2, setCode2] = useState();
	const [code3, setCode3] = useState();
	const [code4, setCode4] = useState();
	const [code5, setCode5] = useState();
	const [code6, setCode6] = useState();
	const [code7, setCode7] = useState();
	const [code8, setCode8] = useState();
	const [code9, setCode9] = useState();
	const [code10, setCode10] = useState();
	const [code11, setCode11] = useState();
	var chart = '';
	
	function renderChart() {
		var bodyFontFamily = (getComputedStyle(document.body).getPropertyValue('--bs-body-font-family')).trim();
		var bodyFontWeight = (getComputedStyle(document.body).getPropertyValue('--bs-body-font-weight')).trim();
		var bodyColor = (getComputedStyle(document.body).getPropertyValue('--bs-body-color')).trim();
		var borderColor = (getComputedStyle(document.body).getPropertyValue('--bs-border-color')).trim();
		var warning = (getComputedStyle(document.body).getPropertyValue('--bs-warning')).trim();
		var theme = (getComputedStyle(document.body).getPropertyValue('--bs-theme')).trim();
		
		Chart.defaults.font.family = bodyFontFamily;
		Chart.defaults.font.size = 12;
		Chart.defaults.color = bodyColor;
		Chart.defaults.borderColor = borderColor;
		Chart.defaults.plugins.legend.display = true;
		Chart.defaults.plugins.tooltip.padding = { left: 8, right: 12, top: 8, bottom: 8 };
		Chart.defaults.plugins.tooltip.cornerRadius = 8;
		Chart.defaults.plugins.tooltip.titleMarginBottom = 6;
		Chart.defaults.plugins.tooltip.titleFont.family = bodyFontFamily;
		Chart.defaults.plugins.tooltip.titleFont.weight = bodyFontWeight;
		Chart.defaults.plugins.tooltip.footerFont.family = bodyFontFamily;
		Chart.defaults.plugins.tooltip.displayColors = true;
		Chart.defaults.plugins.tooltip.boxPadding = 6;
		Chart.defaults.scale.grid.color = borderColor;
		Chart.defaults.scale.beginAtZero = true;
		
		var chartContainer = document.getElementById('chartContainer');
		if (chart) {
			chart.destroy();
		}
		if (chartContainer) {
			chartContainer.innerHTML = '<canvas id="widgetBarChart" className="w-100" height="150"></canvas>';
			chart = new Chart(document.getElementById('widgetBarChart'), {
				type: 'bar',
				data: {
					labels: ['S','M','T','W','T','F','S'],
					datasets: [{
						label: 'Total Visitors',
						data: [37,31,36,34,43,31,50],
						backgroundColor: theme,
						borderColor: 'transparent'
					}, {
						label: 'Returning Visitors',
						data: [27,21,16,14,23,11,30],
						backgroundColor: warning,
						borderColor: 'transparent'
					}]
				}
			});
		}
	}
	
	useEffect(() => {
		fetch('/assets/data/widgets/widget-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/widgets/widget-code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/widgets/widget-code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/widgets/widget-code-4.json').then(function(response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/widgets/widget-code-5.json').then(function(response) { return response.text(); }).then((html) => { setCode5(html); });
		fetch('/assets/data/widgets/widget-code-6.json').then(function(response) { return response.text(); }).then((html) => { setCode6(html); });
		fetch('/assets/data/widgets/widget-code-7.json').then(function(response) { return response.text(); }).then((html) => { setCode7(html); });
		fetch('/assets/data/widgets/widget-code-8.json').then(function(response) { return response.text(); }).then((html) => { setCode8(html); });
		fetch('/assets/data/widgets/widget-code-9.json').then(function(response) { return response.text(); }).then((html) => { setCode9(html); });
		fetch('/assets/data/widgets/widget-code-10.json').then(function(response) { return response.text(); }).then((html) => { setCode10(html); });
		fetch('/assets/data/widgets/widget-code-11.json').then(function(response) { return response.text(); }).then((html) => { setCode11(html); });
		
		renderChart();
		
		document.addEventListener('theme-reload', () => {
			renderChart();
		});
		// eslint-disable-next-line
	}, []);
	
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<h1 className="page-header">
								Widgets <small>page header description goes here...</small>
							</h1>
							<hr className="mb-4" />
							
							<div id="cardWidget" className="mb-5">
								<h4>Card widget</h4>
								<p>Card widget is created by using existing Bootstrap <code>.card</code> component with <code>.card-img</code>, <code>.card-img-overlay</code> and <code>.d-flex</code> utilities.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card className="border-0 overflow-hidden rounded" data-bs-theme="dark">
													<div className="h-250px d-flex align-items-center">
														<img src="/assets/img/gallery/widget-cover-1.jpg" alt="" className="card-img" />
													</div>
													<div className="card-img-overlay d-flex flex-column bg-black bg-opacity-60 rounded">
														<div className="flex-fill">
															<div className="d-flex align-items-center">
																<div data-bs-theme="dark"><h6>Youtube</h6></div>
																<div className="dropdown dropdown-icon ms-auto">
																	<a href="#/" className="text-white" data-bs-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
																	<div className="dropdown-menu dropdown-menu-end">
																		<a href="//www.youtube.com/watch?v=_AS5nu4u1ss" className="dropdown-item">View</a>
																	</div>
																</div>
															</div>
														</div>
														<a href="//www.youtube.com/watch?v=_AS5nu4u1ss" data-lity className="text-white text-decoration-none d-flex align-items-center">
															<div className="bg-theme bg-gradient text-theme-color w-50px h-50px rounded-3 d-flex align-items-center justify-content-center">
																<i className="fa fa-play fa-lg"></i>
															</div>
															<div className="ms-3 flex-1">
																<div className="fw-semibold">New Videos - Behind The Forest Tours</div>
																<div className="fs-13px text-white text-opacity-75">
																	<i className="far fa-eye"></i> 892 views 
																	<i className="far fa-clock ms-3"></i> 39min ago
																</div>
															</div>
														</a>
													</div>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code1}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="listWidget" className="mb-5">
								<h4>List widget</h4>
								<p>List widget is created by using existing Bootstrap <code>.list-group</code> component with <code>.d-flex</code> and studio utilities css classes.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-6">
												<div className="text-body mb-2 fw-bold">With icon</div>
												<div className="list-group mb-3">
													<div className="list-group-item d-flex align-items-center">
														<div className="w-40px h-40px d-flex align-items-center justify-content-center bg-gradient-indigo-blue text-white rounded-2 ms-n1">
															<i className="fab fa-apple fa-lg"></i>
														</div>
														<div className="flex-fill px-3 py-1">
															<div className="fw-semibold">Apps Store</div>
															<div className="small text-body text-opacity-50">102 new download</div>
														</div>
														<div className="dropdown">
															<a href="#/" data-bs-toggle="dropdown" className="text-body text-opacity-50"><i className="fa fa-ellipsis-h"></i></a>
															<div className="dropdown-menu dropdown-menu-end">
																<a href="#/" className="dropdown-item">View</a>
																<a href="#/" className="dropdown-item">Analytics</a>
																<a href="#/" className="dropdown-item">Report</a>
															</div>
														</div>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<div className="w-40px h-40px d-flex align-items-center justify-content-center bg-gradient-red-orange text-white rounded ms-n1">
															<i className="fa fa-book fa-lg"></i>
														</div>
														<div className="flex-fill px-3 py-1">
															<div className="fw-semibold">iBooks App</div>
															<div className="small text-body text-opacity-50">32 new download</div>
														</div>
														<div className="dropdown">
															<a href="#/" data-bs-toggle="dropdown" className="text-body text-opacity-50"><i className="fa fa-ellipsis-h"></i></a>
															<div className="dropdown-menu dropdown-menu-end">
																<a href="#/" className="dropdown-item">View</a>
																<a href="#/" className="dropdown-item">Analytics</a>
																<a href="#/" className="dropdown-item">Report</a>
															</div>
														</div>
													</div>
												</div>
												<div className="text-body mb-2 fw-bold">With image</div>
												<div className="list-group mb-3">
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center text-body">
														<div className="w-40px h-40px d-flex align-items-center justify-content-center ms-n1">
															<img src="/assets/img/user/user.jpg" alt="" className="ms-100 mh-100 rounded-circle" />
														</div>
														<div className="flex-fill ps-3 d-flex align-items-center">
															<div className="fw-semibold">
																Isaiah Hughes
															</div>
															<i className="fa fa-circle text-success fs-6px ms-2"></i>
														</div>
													</a>
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center text-body">
														<div className="w-40px h-40px d-flex align-items-center justify-content-center ms-n1">
															<img src="/assets/img/user/user-2.jpg" alt="" className="ms-100 mh-100 rounded-circle" />
														</div>
														<div className="flex-fill ps-3 d-flex align-items-center">
															<div className="fw-semibold">
																Ryan Turner
															</div>
															<i className="fa fa-circle text-body text-opacity-50 fs-6px ms-2"></i>
														</div>
													</a>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="text-body mb-2 fw-bold">With settings</div>
												<div className="list-group">
													<div className="list-group-item d-flex align-items-center">
														<div className="flex-fill py-1">
															<div className="fw-semibold">Server auto backup</div>
															<div className="small text-body text-opacity-50">last backup since yesterday</div>
														</div>
														<div>
															<div className="form-check me-n1">
																<input type="checkbox" className="form-check-input" id="customSwitch1" />
																<label className="form-check-label" htmlFor="customSwitch1"></label>
															</div>
														</div>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<div className="flex-fill py-1">
															<div className="fw-semibold">Analytics enabled</div>
															<div className="small text-body text-opacity-50">3,392 data collected</div>
														</div>
														<div>
															<div className="form-switch me-n1">
																<input type="checkbox" className="form-check-input" id="customSwitch2" />
																<label className="form-check-label" htmlFor="customSwitch2"></label>
															</div>
														</div>
													</div>
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center">
														<div className="flex-fill py-1">
															<div className="fw-semibold">Link with arrow</div>
														</div>
														<div>
															<i className="fa fa-chevron-right"></i>
														</div>
													</a>
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center">
														<div className="flex-fill py-1">
															<div className="fw-semibold">Link with arrow</div>
														</div>
														<div>
															<i className="fa fa-chevron-right"></i>
														</div>
													</a>
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code2}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="statsWidget" className="mb-5">
								<h4>Stats widget</h4>
								<p>States widget is created by using Bootstrap <code>.card</code> component with <code>.d-flex</code> and <code>background-color</code> utilities.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<CardBody>
														<div className="mb-2 fw-semibold d-flex align-items-center">
															<div className="flex-fill">Total Orders</div>
															<div>
																<a href="#/" data-bs-toggle="dropdown" className="text-body">
																	<i className="bi bi-three-dots-vertical"></i>
																</a>
																<div className="dropdown-menu dropdown-menu-end" data-bs-theme="light">
																	<a href="#/" className="dropdown-item">View full report</a>
																	<a href="#/" className="dropdown-item">Reload</a>
																	<a href="#/" className="dropdown-item">Export Data</a>
																</div>
															</div>
														</div>
														<div className="row mb-1">
															<div className="col-lg-12 position-relative">
																<h1 className="mb-0 d-flex align-items-center text-theme"> 302 <span className="text-body fs-10px badge bg-body rounded-pill pe-2 ps-1 py-6px d-flex align-items-center ms-3">
																		<i className="fa fa-exclamation-circle fa-fw fa-lg me-1 text-theme"></i> 3 pending orders </span>
																</h1>
																<div className="fs-13px mt-1">
																	<span className="badge bg-theme bg-opacity-15 text-theme py-5px me-1">+12%</span> compare to last week
																</div>
																<i className="fab fa-google-wallet display-3 lh-1 mt-n2 text-body text-opacity-20 me-3 position-absolute end-0 top-0"></i>
															</div>
														</div>
														<div className="mt-3 fs-11px">
															<div className="text-body text-opacity-50">last updated on</div>
															<div className="fw-600 text-body text-opacity-50">Feb 3, 4:09:57 AM UTC</div>
														</div>
													</CardBody>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code3}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="chartWidget" className="mb-5">
								<h4>Chart widget</h4>
								<p>Chart widget created by using Bootstrap <code>.card</code> and <code>.list-group</code> component combined with Chart.js plugins.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<CardHeader className="fw-bold bg-none d-flex align-items-center">
														Weekly Web Analytics
														<span className="badge ms-3 fw-semibold bg-theme bg-opacity-15 text-theme">11 Mar - 18 Mar</span>
														<a href="#/" className="ms-auto text-muted text-decoration-none" data-toggle="card-expand"><i className="fa fa-expand"></i></a>
													</CardHeader>
													<CardBody className="text-body text-center">
														<div id="chartContainer"></div>
													</CardBody>
													<div className="list-group list-group-flush">
														<div className="list-group-item border-top-0 rounded-top-0 d-flex align-items-center">
															<div className="w-40px h-40px bg-theme bg-opacity-15 text-theme d-flex align-items-center justify-content-center rounded-pill">
																<i className="fa fa-bar-chart fs-20px"></i>
															</div>
															<div className="flex-fill px-3 py-1">
																<div className="fw-semibold">Total Visitors</div>
																<div className="small text-body text-opacity-50">11 Mar - 18 Mar</div>
															</div>
															<div>
																<div className="fw-semibold h3 m-0">1.3m</div>
															</div>
														</div>
													</div>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code4}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="userListWidget" className="mb-5">
								<h4>User list widget</h4>
								<p>User list widget used to display people who participate in a project or a group.</p>
								<Card>
									<CardBody>
										<div className="widget-user-list">
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-1.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-2.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-3.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-4.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-5.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-6.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-7.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link bg-body text-body text-opacity-50 fs-12px fw-bold">+26</a></div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code5}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="mapWidget" className="mb-5">
								<h4>Map widget</h4>
								<p>Map widget created with Bootstrap <code>.card</code> and <code>.list-group</code> component twitted with helper css classes.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<CardHeader className="bg-none fw-bold">Google Map</CardHeader>
													<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.5886473867613!2d-122.41743634015282!3d37.776451983493104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2s!4v1495935122933" title="Map" style={{ border:0, width: '100%', height: '10rem' }} allowfullscreen></iframe>
													<div className="list-group list-group-flush">
														<div className="list-group-item d-flex align-items-center">
															<div className="w-30px h-40px d-flex align-items-center justify-content-center">
																<i className="fa fa-map-location-dot fa-2x text-body text-opacity-50"></i>
															</div>
															<div className="flex-fill px-3 py-1">
																<div className="fw-semibold">via Road I-88E</div>
																<div className="small">Fastest route, the usual traffic</div>
															</div>
															<div className="text-nowrap py-1">
																<div className="text-success fw-semibold">3h 54min</div>
																<div className="small">393km</div>
															</div>
														</div>
													</div>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code6}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="chatWidget" className="mb-5">
								<h4>Chat widget</h4>
								<p>Chat widget created by using Bootstrap <code>.card</code> component with custom created bubble chat ui.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<CardHeader className="bg-none fw-bold d-flex align-items-center">Discussion group <a href="#/" className="ms-auto text-muted text-decoration-none" data-toggle="card-expand"><i className="fa fa-expand"></i></a></CardHeader>
													<CardBody className="bg-light p-0">
														<PerfectScrollbar className="h-200px p-3">
															<div className="widget-chat">
																<div className="widget-chat-item">
																	<div className="widget-chat-media"><img src="/assets/img/user/user-2.jpg" alt="" /></div>
																	<div className="widget-chat-content">
																		<div className="widget-chat-name">Roberto Lambert</div>
																		<div className="widget-chat-message last">
																			Hey, I'm testing out group messaging.
																		</div>
																	</div>
																</div>
																<div className="widget-chat-item reply">
																	<div className="widget-chat-content">
																		<div className="widget-chat-message last">
																			Cool
																		</div>
																		<div className="widget-chat-status"><b>Read</b> 16:26</div>
																	</div>
																</div>
																<div className="widget-chat-date">Today 14:21</div>
																<div className="widget-chat-item">
																	<div className="widget-chat-media"><img src="/assets/img/user/user-3.jpg" alt="" /></div>
																	<div className="widget-chat-content">
																		<div className="widget-chat-name">Rick Powell</div>
																		<div className="widget-chat-message last">
																			Awesome! What's new?
																		</div>
																	</div>
																</div>
																<div className="widget-chat-item">
																	<div className="widget-chat-media"><img src="/assets/img/user/user-2.jpg" alt="" /></div>
																	<div className="widget-chat-content">
																		<div className="widget-chat-name">Roberto Lambert</div>
																		<div className="widget-chat-message">
																			Not much, It's got a new look, contact pics show up in group messaging, some other small stuff.
																		</div>
																		<div className="widget-chat-message last">
																			How's crusty old iOS 6 treating you?
																		</div>
																	</div>
																</div>
																<div className="widget-chat-item reply">
																	<div className="widget-chat-content">
																		<div className="widget-chat-message last">
																			Sucks
																		</div>
																		<div className="widget-chat-status"><b>Read</b> 16:30</div>
																	</div>
																</div>
															</div>
														</PerfectScrollbar>
													</CardBody>
													<CardFooter className="bg-none">
														<div className="input-group">
															<input type="text" className="form-control border-end-0 rounded-pill shadow-none rounded-end-0 ps-3" placeholder="Write something..." />
															<div className="input-group-text bg-none p-3px rounded-pill rounded-start-0">
																<button className="btn btn-gray-500 w-80px fs-12px rounded-pill py-4px px-3" type="button">Send</button>
															</div>
														</div>
													</CardFooter>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code7}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="profileWidget" className="mb-5">
								<h4>Profile widget</h4>
								<p>Profile widget created by using Bootstrap <code>.card</code> component with Bootstrap grid.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<div className="position-relative overflow-hidden h-200px">
														<img src="/assets/img/gallery/widget-cover-1.jpg" className="card-img rounded-top" alt="" />
														<div className="card-img-overlay text-center text-white bg-black bg-opacity-60 d-flex align-items-center flex-column justify-content-center rounded-0 rounded-top">
															<div className="my-3">
																<img src="/assets/img/user/user-5.jpg" alt="" width="100" className="rounded-circle" />
															</div>
															<div>
																<div className="fw-bold">Maurice Patterson</div>
																<div className="fs-12px text-white text-opacity-75">Never give up</div>
															</div>
														</div>
													</div>
													<CardBody className="py-10px">
														<div className="row text-center">
															<div className="col-4">
																<div className="fw-semibold fs-5">415</div>
																<div className="small lh-sm">posts</div>
															</div>
															<div className="col-4">
																<div className="fw-semibold fs-5">140k</div>
																<div className="small lh-sm">followers</div>
															</div>
															<div className="col-4">
																<div className="fw-semibold fs-5">697</div>
																<div className="small lh-sm">following</div>
															</div>
														</div>
													</CardBody>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code8}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="productWidget" className="mb-5">
								<h4>Product widget</h4>
								<p>Product widget created by using Bootstrap <code>.list-group</code> component with <code>.d-flex</code> utilities.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<div className="list-group">
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center text-body">
														<div className="w-60px h-60px d-flex align-items-center justify-content-center bg-body rounded p-2">
															<img src="/assets/img/product/product-1.png" alt="" className="mw-100 mh-100" />
														</div>
														<div className="flex-fill px-3 py-1">
															<div className="fw-semibold">iPhone 14 Pro Max</div>
															<div className="small text-body text-opacity-50">Apple</div>
															<div className="d-flex align-items-center small">
																<i className="fa fa-star text-warning me-2px"></i>
																<i className="fa fa-star text-warning me-2px"></i>
																<i className="fa fa-star text-warning me-2px"></i>
																<i className="fa fa-star text-warning me-2px"></i>
																<i className="far fa-star text-body text-opacity-25 fa-fw me-1"></i>
																(128)
															</div>
														</div>
														<div>
															<span className="badge text-theme bg-theme bg-opacity-15 fs-12px py-7px px-2 fw-semibold rounded-1 d-block">
																$999.00
															</span>
														</div>
													</a>
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center text-body">
														<div className="w-60px h-60px d-flex align-items-center justify-content-center bg-body rounded p-2">
															<img src="/assets/img/product/product-2.png" alt="" className="mw-100 mh-100" />
														</div>
														<div className="flex-fill px-3 py-1">
															<div className="fw-semibold">One Plus 10 Pro</div>
															<div className="small text-body text-opacity-50">OnePlus</div>
															<div className="d-flex align-items-center small">
																<i className="fa fa-star text-warning me-2px"></i>
																<i className="fa fa-star text-warning me-2px"></i>
																<i className="fa fa-star text-warning me-2px"></i>
																<i className="fa fa-star text-warning me-2px"></i>
																<i className="far fa-star text-body text-opacity-25 fa-fw me-1"></i>
																(93)
															</div>
														</div>
														<div>
															<span className="badge text-theme bg-theme bg-opacity-15 fs-12px py-7px px-2 fw-semibold rounded-1 d-block">
																$599.00
															</span>
														</div>
													</a>
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center text-body">
														<div className="w-60px h-60px d-flex align-items-center justify-content-center bg-body rounded p-2">
															<img src="/assets/img/product/product-3.png" alt="" className="mw-100 mh-100" />
														</div>
														<div className="flex-fill px-3 py-1">
															<div className="fw-semibold">Galaxy S23</div>
															<div className="small text-body text-opacity-50">Samsung</div>
															<div className="d-flex align-items-center small">
																<i className="fa fa-star text-warning me-2px"></i>
																<i className="fa fa-star text-warning me-2px"></i>
																<i className="fa fa-star text-warning me-2px"></i>
																<i className="fa fa-star text-warning me-2px"></i>
																<i className="far fa-star text-body text-opacity-25 fa-fw me-1"></i>
																(41)
															</div>
														</div>
														<div>
															<span className="badge text-theme bg-theme bg-opacity-15 fs-12px py-7px px-2 fw-semibold rounded-1 d-block">
																$399.00
															</span>
														</div>
													</a>
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code9}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="reminderWidget" className="mb-5">
								<h4>Reminder widget</h4>
								<p>Reminder widget used to create a simple calendar to notify the user upcoming events or task.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<CardHeader className="card-header fw-bold">Today, Nov 4</CardHeader>
													<div className="widget-reminder">
														<div className="widget-reminder-item">
															<div className="widget-reminder-time">09:00<br />12:00</div>
															<div className="widget-reminder-divider bg-success"></div>
															<div className="widget-reminder-content">
																<div className="fw-bold">Meeting with HR</div>
																<div className="fs-13px"> - Conference Room</div>
															</div>
														</div>
														<div className="widget-reminder-item">
															<div className="widget-reminder-time">20:00<br />23:00</div>
															<div className="widget-reminder-divider bg-primary"></div>
															<div className="widget-reminder-content">
																<div className="fw-bold">Dinner with Richard</div>
																<div className="fs-13px"> - Tom's Too Restaurant</div>
																<div className="d-flex align-items-center fs-13px mt-2">
																	<div className="flex-fill d-flex align-items-center">
																		<img src="/assets/img/user/user-3.jpg" alt="" width="16" className="rounded-circle me-2" /> Richard Leong
																	</div>
																	<a href="#/" className="ms-auto">Contact</a>
																</div>
															</div>
														</div>
													</div>
													<CardHeader className="fw-bold">Tomorrow, Nov 5</CardHeader>
													<div className="widget-reminder">
														<div className="widget-reminder-item">
															<div className="widget-reminder-time">All day</div>
															<div className="widget-reminder-divider bg-gray-300"></div>
															<div className="widget-reminder-content">
																<div className="fw-bold">Terry Birthday</div>
															</div>
														</div>
														<div className="widget-reminder-item">
															<div className="widget-reminder-time">08:00</div>
															<div className="widget-reminder-divider bg-gray-300"></div>
															<div className="widget-reminder-content">
																<div className="fw-bold">Meeting</div>
															</div>
														</div>
														<div className="widget-reminder-item">
															<div className="widget-reminder-time">00:00<br />00:30</div>
															<div className="widget-reminder-divider bg-gray-300"></div>
															<div className="widget-reminder-content">
																<div className="fw-bold">Server Maintenance</div>
																<div className="fs-13px"> - Data Centre</div>
															</div>
														</div>
													</div>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code10}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="imageListWidget" className="mb-5">
								<h4>Image list widget</h4>
								<p>Image list widget created by using Bootstrap <code>.card</code> and <code>.list-group</code> component with <code>.d-flex</code> utilities.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<div className="list-group list-group-flush">
														<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center text-body">
															<div className="flex-fill pe-3">
																<div className="fw-semibold">Library (20)</div>
																<div className="small text-body text-opacity-50">3,192 Image Found</div>
															</div>
															<div>
																<i className="fa fa-chevron-right fa-lg text-body text-opacity-50"></i>
															</div>
														</a>
													</div>
													<CardBody>
														<div className="widget-img-list">
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-1.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-1.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-2.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-2.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-3.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-3.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-4.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-4.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-5.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-5.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-21.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-21.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-22.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-22.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-23.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-23.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-24.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-24.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-25.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-25.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-26.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-26.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-27.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-27.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-28.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-28.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-29.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-29.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-30.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-30.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-31.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-31.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-32.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-32.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-33.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-33.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-34.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-34.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-35.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-35.jpg)'}}></span></a></div>
														</div>
													</CardBody>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code11}</Highlight>
									</div>
								</Card>
							</div>
						</div>
						
						<div className="col-xl-3">
							<NavScrollTo>
								<nav className="nav">
									<a className="nav-link" href="#cardWidget" data-toggle="scroll-to">Card widget</a>
									<a className="nav-link" href="#listWidget" data-toggle="scroll-to">List widget</a>
									<a className="nav-link" href="#statsWidget" data-toggle="scroll-to">Stats widget</a>
									<a className="nav-link" href="#chartWidget" data-toggle="scroll-to">Chart widget</a>
									<a className="nav-link" href="#userListWidget" data-toggle="scroll-to">User list widget</a>
									<a className="nav-link" href="#mapWidget" data-toggle="scroll-to">Map widget</a>
									<a className="nav-link" href="#chatWidget" data-toggle="scroll-to">Chat widget</a>
									<a className="nav-link" href="#profileWidget" data-toggle="scroll-to">Profile widget</a>
									<a className="nav-link" href="#productWidget" data-toggle="scroll-to">Product widget</a>
									<a className="nav-link" href="#reminderWidget" data-toggle="scroll-to">Reminder widget</a>
									<a className="nav-link" href="#imageListWidget" data-toggle="scroll-to">Image list widget</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Widgets;