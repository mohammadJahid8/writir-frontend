import { Card, CardBody } from './../../components/card/card.jsx';
import { Icon } from '@iconify/react';

function PagesPricing() {
	return (
		<div>
			<ol className="breadcrumb">
				<li className="breadcrumb-item"><a href="#/">PAGES</a></li>
				<li className="breadcrumb-item active">PRICING PAGE</li>
			</ol>
			<h1 className="page-header mb-4">Pricing Page <small>header small text goes here...</small></h1>

			<div>
				<Card className="border-0 theme-gray-600 rounded-4 overflow-hidden" style={{ background: "#E3E7F0" }}>
					<div className="row gx-0">
						<div className="col-xl-7 position-relative">
							<div className="p-5">
								<div className="display-5 fw-bold mb-3">Web Hosting Plan</div>
								<div className="fs-13px mb-4 ">
									Discover the <span className="text-theme d-inline-flex border-bottom border-1 border-gray-500">perfect plan</span> for your online presence. In a digital landscape where your website is the gateway to your brand, we offer an array of meticulously crafted hosting plans to suit every ambition and requirement.
								</div>
								<div className="row mb-n3">
									<div className="col-lg-6">
										<div className="d-flex align-items-center mb-3">
											<Icon className="iconify fs-30px text-theme" icon="solar:cup-star-bold-duotone" />
											<div className="flex-1 ps-2 fs-13px fw-bold">
												Robust Performance
											</div>
										</div>
										<div className="d-flex align-items-center mb-3">
											<Icon className="iconify fs-30px text-theme" icon="solar:cpu-bolt-bold-duotone" />
											<div className="flex-1 ps-2 fs-13px fw-bold">
												Scalability Options
											</div>
										</div>
										<div className="d-flex align-items-center mb-3">
											<Icon className="iconify fs-30px text-theme" icon="solar:shield-bold-duotone" />
											<div className="flex-1 ps-2 fs-13px fw-bold">
												Security First
											</div>
										</div>
										<div className="d-flex align-items-center mb-3">
											<Icon className="iconify fs-30px text-theme" icon="solar:headphones-round-sound-bold-duotone" />
											<div className="flex-1 ps-2 fs-13px fw-bold">
												24/7 Support
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="d-flex align-items-center mb-3">
											<Icon className="iconify fs-30px text-theme" icon="solar:monitor-smartphone-bold-duotone" />
											<div className="flex-1 ps-2 fs-13px fw-bold">
												User-Friendly Control Panel
											</div>
										</div>
										<div className="d-flex align-items-center mb-3">
											<Icon className="iconify fs-30px text-theme" icon="solar:mouse-bold-duotone" />
											<div className="flex-1 ps-2 fs-13px fw-bold">
												One-Click Installations
											</div>
										</div>
										<div className="d-flex align-items-center mb-3">
											<Icon className="iconify fs-30px text-theme" icon="solar:gift-bold-duotone" />
											<div className="flex-1 ps-2 fs-13px fw-bold">
												Value-Added Features
											</div>
										</div>
										<div className="d-flex align-items-center mb-3">
											<Icon className="iconify fs-30px text-theme" icon="solar:dollar-bold-duotone" />
											<div className="flex-1 ps-2 fs-13px fw-bold">
												Money-Back Guarantee
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="col-xl-5 d-xl-block d-none">
							<div className="h-100 py-5 px-3 ps-0 d-flex align-items-center justify-content-end">
								<img src="/assets/img/pricing/img-1.svg" alt="" className="w-100" />
							</div>
						</div> */}
					</div>
				</Card>
			</div>

			<div className="row gx-4 py-5" data-bs-theme="dark">
				<div className="col-xl-3 col-md-6 py-3 py-xl-5">
					<Card className="border-0 rounded-4 h-100">
						<CardBody className="fs-14px p-30px d-flex flex-column">
							<div className="d-flex align-items-center">
								<div className="flex-1">
									<div className="h5 font-Inter">Starter Plan</div>
									<div className="display-6 fw-bold mb-0">$5 <small className="h5 text-body text-opacity-50">/month*</small></div>
								</div>
								<div>
									<Icon className="iconify display-4 text-gray-500 rounded-3" icon="solar:usb-bold-duotone" />
								</div>
							</div>
							<hr className="my-4" />
							<div className="mb-5 text-body text-opacity-75 flex-1">
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className="font-Inter small">Storage:</span> <span className="text-body">10 GB</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">Bandwidth:</span> <span className="text-body">100 GB</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">Domain Names:</span> <span className="text-body">1</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">SSL Certificate:</span> <span className="text-body"> Shared</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">Email Accounts:</span> <span className="text-body"> 5</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">24/7 Support:</span> <span className="text-body"> Yes</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">Backup:</span> <span className="text-body"> Daily</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">Uptime Guarantee:</span> <span className="text-body"> 99.9%</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">FTP Access:</span> <span className="text-body"> Yes</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">Control Panel:</span> <span className="text-body"> cPanel</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">Free Domain:</span> <span className="text-body"> No</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">Firewall:</span> <span className="text-body"> No</span></div>
								</div>
							</div>
							<div className="mx-n2">
								<a href="#/" className="btn btn-default btn-lg w-100 font-Inter">Get Started
									{/* <i className="fa fa-arrow-right"></i> */}
								</a>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className="col-xl-3 col-md-6 py-3 py-xl-5">
					<Card className="border-0 rounded-4 h-100">
						<CardBody className="fs-14px p-30px d-flex flex-column">
							<div className="d-flex align-items-center">
								<div className="flex-1">
									<div className="h5 font-Inter">Booster Plan</div>
									<div className="display-6 fw-bold mb-0">$10 <small className="h5 text-body text-opacity-50">/month*</small></div>
								</div>
								<div>
									<Icon className="iconify display-4 text-gray-500 rounded-3" icon="solar:map-arrow-up-bold-duotone" />
								</div>
							</div>
							<hr className="my-4" />
							<div className="mb-5 text-body text-opacity-75 flex-1">
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">Storage:</span> <span className="text-body">20 GB</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">Bandwidth:</span> <span className="text-body">200 GB</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">Domain Names:</span> <span className="text-body">2</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">SSL Certificate:</span> <span className="text-body"> Free</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">Email Accounts:</span> <span className="text-body"> 10</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">24/7 Support:</span> <span className="text-body"> Yes</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">Backup:</span> <span className="text-body"> Daily</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">Uptime Guarantee:</span> <span className="text-body"> 99.9%</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">FTP Access:</span> <span className="text-body"> Yes</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">Control Panel:</span> <span className="text-body"> cPanel</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">Free Domain:</span> <span className="text-body"> No</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">Firewall:</span> <span className="text-body"> No</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-times fa-lg text-body text-opacity-25"></i>
									<div className="flex-1 ps-3"><span className=" small">45-Day Money-Back Guarantee</span></div>
								</div>
							</div>
							<div className="mx-n2">
								<a href="#/" className="btn btn-default btn-lg w-100 font-Inter">Get Started
									{/* <i className="fa fa-arrow-right"></i> */}
								</a>
							</div>
						</CardBody>
					</Card>
				</div>
				<div data-bs-theme="dark" className="col-xl-3 col-md-6 py-3 py-xl-0">
					<Card className="border-0 rounded-4 shadow-lg text-white h-100" style={{ background: "#000000" }}>
						<CardBody className="fs-15px p-30px h-100 d-flex flex-column">
							<div className="d-flex align-items-center">
								<div className="flex-1">
									<div className="h5 font-Inter">Premium Plan</div>
									<div className="display-6 fw-bold mb-0">$15 <small className="h5 text-body text-opacity-50">/month*</small></div>
								</div>
								<div>
									<Icon className="iconify display-3 text-black text-opacity-50 rounded-3" icon="solar:cup-first-bold-duotone" />
								</div>
							</div>
							<hr className="my-4" />
							<div className="mb-5 text-body flex-1">
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Storage:</span> <span className="text-white">50 GB</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Bandwidth:</span> <span className="text-white">500 GB</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Domain Names:</span> <span className="text-white">Unlimited</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">SSL Certificate:</span> <span className="text-white">Free</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Email Accounts:</span> <span className="text-white">Unlimited</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">24/7 Support:</span> <span className="text-white">Yes</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Backup:</span> <span className="text-white">Daily</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Uptime Guarantee:</span> <span className="text-white">99.9%</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">FTP Access:</span> <span className="text-white">Yes</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Control Panel:</span> <span className="text-white">cPanel</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Free Domain:</span> <span className="text-white">No</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Firewall:</span> <span className="text-white">Yes</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">E-commerce Support</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-white text-opacity-50 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">45-Day Money-Back Guarantee</span></div>
								</div>
							</div>
							<a href="#/" className="btn btn-light btn-lg w-100 text-black font-Inter">Get Started
								{/* <i className="fa fa-arrow-right"></i> */}
							</a>
						</CardBody>
					</Card>
				</div>
				<div className="col-xl-3 col-md-6 py-3 py-xl-5">
					<Card className="card border-0 rounded-4 h-100">
						<CardBody className="fs-14px p-30px d-flex flex-column">
							<div className="d-flex align-items-center">
								<div className="flex-1">
									<div className="h5 font-Inter">Business Plan</div>
									<div className="display-6 fw-bold mb-0 font-Inter ">$99 <small className="h5 text-body text-opacity-50 font-Inter">/month*</small></div>
								</div>
								<div>
									<Icon className="iconify display-4 text-gray-500 rounded-3" icon="solar:buildings-bold-duotone" />
								</div>
							</div>
							<hr className="my-4" />
							<div className="mb-5 text-body text-opacity-75 flex-1">
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">Storage:</span> <span className="text-body">1 TB</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">Bandwidth:</span> <span className="text-body">20 TB</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">Domain Names:</span> <span className="text-body">Unlimited</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">SSL Certificate:</span> <span className="text-body">Free</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">Email Accounts:</span> <span className="text-body">Unlimited</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check fa-lg text-gray-500"></i>
									<div className="flex-1 ps-3"><span className=" small">24/7 Support:</span> <span className="text-body">Yes</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-gray-500 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Backup:</span> <span className="text-body"> Daily</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-gray-500 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Uptime Guarantee:</span> <span className="text-body">99.9%</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-gray-500 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">FTP Access:</span> <span className="text-body">Yes</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-gray-500 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Control Panel:</span> <span className="text-body">cPanel</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-gray-500 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Free Domain:</span> <span className="text-body">Yes</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-gray-500 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">Firewall:</span> <span className="text-body">Yes</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-gray-500 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">E-commerce Support</span></div>
								</div>
								<div className="d-flex align-items-center mb-1">
									<i className="fa fa-check text-gray-500 fa-lg"></i>
									<div className="flex-1 ps-3"><span className=" small">45-Day Money-Back Guarantee</span></div>
								</div>
							</div>
							<div className="mx-n2">
								<a href="#/" className="btn btn-default btn-lg w-100 font-Inter">Get Started
									{/* <i className="fa fa-arrow-right"></i> */}
								</a>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>

		</div>
	)
}

export default PagesPricing;