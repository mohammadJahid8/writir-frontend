import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from './../../components/card/card.jsx';

function PagesOrderDetails() {
	return (
		<div>
			<div className="d-flex align-items-center mb-3">
				<div>
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a href="#/">PAGES</a></li>
						<li className="breadcrumb-item active">ORDER DETAILS</li>
					</ol>
					<h1 className="page-header mb-0">Order Details</h1>
				</div>
			</div>
			
			<div className="mb-md-3 mb-2 d-flex flex-wrap">
				<div className="me-4 mb-md-0 mb-2"><a href="#/" className="text-decoration-none text-body d-flex align-items-center"><i className="fa fa-print me-2 text-body text-opacity-50 my-n1"></i> Print</a></div>
				<div className="me-4 mb-md-0 mb-2"><a href="#/" className="text-decoration-none text-body d-flex align-items-center"><i className="fa fa-box me-2 text-body text-opacity-50 my-n1"></i> Restock items</a></div>
				<div className="me-4 mb-md-0 mb-2"><a href="#/" className="text-decoration-none text-body d-flex align-items-center"><i className="fa fa-pen me-2 text-body text-opacity-50 my-n1"></i> Edit</a></div>
				<div className="me-4 mb-md-0 mb-2 dropdown-toggle">
					<a href="#/" data-bs-toggle="dropdown" className="text-decoration-none text-body d-inline-flex align-items-center"><i className="fa fa-gear me-2 text-body text-opacity-50 my-n1"></i> More Actions</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="#/">Action</a>
						<a className="dropdown-item" href="#/">Another action</a>
						<a className="dropdown-item" href="#/">Something else here</a>
						<div role="separator" className="dropdown-divider"></div>
						<a className="dropdown-item" href="#/">Separated link</a>
					</div>
				</div>
			</div>
			<div className="row gx-4">
				<div className="col-xl-8">
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-none fw-semibold">
							Products (3)
							<a href="#/" className="ms-auto text-decoration-none text-body text-opacity-50 fs-13px d-flex align-items-center"><i className="fa fa-truck me-2 my-n1"></i> Add Tracking Link</a>
						</CardHeader>
						<CardBody>
							<div className="row align-items-center">
								<div className="col-lg-8 d-flex align-items-center">
									<div className="h-65px w-65px d-flex align-items-center justify-content-center position-relative bg-body rounded p-2">
										<img src="/assets/img/product/product-1-thumb.png" alt="" className="mw-100 mh-100" />
										<span className="w-20px h-20px p-0 d-flex align-items-center justify-content-center badge bg-theme text-theme-color position-absolute end-0 top-0 fw-bold fs-12px rounded-pill mt-n2 me-n2">1</span>
									</div>
									<div className="ps-3 flex-1">
										<div><a href="#/" className="text-decoration-none text-body">iPhone 14 Pro Max</a></div>
										<div className="text-body text-opacity-50 small">
											SKU: IP14PROMAX-512
										</div>
									</div>
								</div>
								<div className="col-lg-2 m-0 ps-lg-3">
									$999 x 1
								</div>
								<div className="col-lg-2 m-0 text-end">
									$999
								</div>
							</div>
							<hr className="opacity-1 my-4" />
							<div className="row">
								<div className="col-lg-8 d-flex align-items-center">
									<div className="h-65px w-65px d-flex align-items-center justify-content-center position-relative bg-body rounded p-2">
										<img src="/assets/img/product/product-2.png" alt="" className="mw-100 mh-100" />
										<span className="w-20px h-20px p-0 d-flex align-items-center justify-content-center badge bg-theme text-theme-color position-absolute end-0 top-0 fw-bold fs-12px rounded-pill mt-n2 me-n2">1</span>
									</div>
									<div className="ps-3 flex-1">
										<div className=""><a href="#/" className="text-decoration-none text-body">One Plus 10 Pro</a></div>
										<div className="text-body text-opacity-50 small">
											SKU: ONEPLUS-10PRO
										</div>
									</div>
								</div>
								<div className="col-lg-2 m-0 ps-lg-3">
									$1,999 x 1
								</div>
								<div className="col-lg-2 m-0 text-end">
									$1,999
								</div>
							</div>
							<hr className="opacity-1 my-4" />
							<div className="row">
								<div className="col-lg-8 d-flex align-items-center">
									<div className="h-65px w-65px d-flex align-items-center justify-content-center position-relative bg-body rounded p-2">
										<img src="/assets/img/product/product-3.png" alt="" className="mw-100 mh-100" />
										<span className="w-20px h-20px p-0 d-flex align-items-center justify-content-center badge bg-theme text-theme-color position-absolute end-0 top-0 fw-bold fs-12px rounded-pill mt-n2 me-n2">1</span>
									</div>
									<div className="ps-3 flex-1">
										<div className=""><a href="#/" className="text-decoration-none text-body">Galaxy s23 Ultra</a></div>
										<div className="text-body text-opacity-50 small">
											SKU: SAMSUNG-GALAXYS23
										</div>
									</div>
								</div>
								<div className="col-lg-2 m-0 ps-lg-3">
									$599 x 1
								</div>
								<div className="col-lg-2 text-body m-0 text-end">
									$599
								</div>
							</div>
						</CardBody>
						<CardFooter className="bg-none d-flex p-3">
							<a href="#/" className="btn btn-default fw-semibold fs-13px ms-auto dropdown-toggle">More</a>
							<a href="#/" className="btn btn-theme fw-semibold fs-13px ms-2">Add Tracking</a>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader className="d-flex align-items-center bg-none fw-semibold">
							Payment Records
							<a href="#/" className="ms-auto text-decoration-none fs-13px text-body text-opacity-50"><i className="fab fa-paypal me-1 fa-lg"></i> View paypal records</a>
						</CardHeader>
						<CardBody>
							<table className="table table-borderless table-sm m-0">
								<tbody>
									<tr>
										<td className="w-150px">Subtotal</td>
										<td>3 items</td>
										<td className="text-end">$3,496.00</td>
									</tr>
									<tr>
										<td>Tax</td>
										<td>GST 5%</td>
										<td className="text-end">$174.80</td>
									</tr>
									<tr>
										<td>Shipping Fee</td>
										<td>promo code: <u className="text-success fw-bold small">FREESHIPPING</u> <small>(<span className="text-decoration-line-through">$120.00</span>)</small></td>
										<td className="text-end">$0.00</td>
									</tr>
									<tr>
										<td className="pb-2" colspan="2"><b>Total</b></td>
										<td className="text-end pb-2 text-decoration-underline"><b>$3670.80</b></td>
									</tr>
									<tr>
										<td colspan="3">
											<hr className="m-0" />
										</td>
									</tr>
									<tr>
										<td className="pt-2 pb-2 text-nowrap">
											Paid by customer
										</td>
										<td className="pt-2 pb-2">
											via <a href="#/" className="text-decoration-none">Paypal</a> (#IRU9589320)
										</td>
										<td className="pt-2 pb-2 text-end">$3670.80</td>
									</tr>
								</tbody>
							</table>
						</CardBody>
						<CardFooter className="bg-none d-flex p-3">
							<a href="#/" className="btn btn-theme ms-auto">Mark as paid</a>
						</CardFooter>
					</Card>
				</div>
				<div className="col-xl-4">
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-none fw-semibold">
							Notes
							<a href="#/" className="ms-auto text-decoration-none fs-13px text-body text-opacity-50">Edit</a>
						</CardHeader>
						<CardBody>
							No notes from customer
						</CardBody>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-none fw-semibold">
							Customer
							<a href="#/" className="ms-auto text-decoration-none fs-13px text-body text-opacity-50">Edit</a>
						</CardHeader>
						<CardBody>
							<div className="d-flex align-items-center">
								<a href="#/" className="d-block"><img src="/assets/img/user/user-1.jpg" alt="" width="45" className="rounded-pill" /></a>
								<div className="flex-fill ps-2">
									<a href="#/" className="d-block text-decoration-none text-body fw-semibold">John Smith</a>
									<span className="fs-13px text-body text-opacity-50">johnsmith@gmail.com</span>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-none fw-semibold">
							Shipping Information
							<a href="#/" className="ms-auto text-decoration-none fs-13px text-body text-opacity-50">Edit</a>
						</CardHeader>
						<CardBody>
							<i className="fa fa-phone"></i> +916-663-4289<br /><br />
							867 Highland View Drive<br />
							Newcastle, CA<br />
							California<br />
							95658<br />
							<br />
							<a href="#/" className="text-decoration-none"><i className="fa fa-map fa-fw"></i> View map</a>
						</CardBody>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-none fw-semibold">
							Billing Information
							<a href="#/" className="ms-auto text-decoration-none fs-13px text-body text-opacity-50">Edit</a>
						</CardHeader>
						<CardBody>
							867 Highland View Drive<br />
							Newcastle, CA<br />
							California<br />
							95658<br />
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default PagesOrderDetails;