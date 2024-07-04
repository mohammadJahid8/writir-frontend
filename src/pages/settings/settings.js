import React, { useContext, useEffect, useState } from 'react';
import { Card } from './../../components/card/card.jsx';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';
import { UserContext } from '../../context/context.js';
import { Link } from 'react-router-dom';
import SettingsModal from '../../components/SettingsModal/SettingsModal.jsx';
import api from './../../api/axios';

function Settings() {
	const { user, setUser } = useContext(UserContext);
	const [email, setEmail] = useState(user?.email);
	const [name, setName] = useState(user?.name);
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);

	useEffect(() => {
		// Simulating delayed update after 1 second
		const timer = setTimeout(() => {
			setEmail(user?.email || "");
			setName(user?.name || "");
			setPhoneNumber(user?.phoneNumber || "");
		}, 1000);

		return () => clearTimeout(timer);
	}, [user?.email, user?.name, user?.phoneNumber]);

	const handleNameUpdate = async (e) => {
		e.preventDefault();

		try {
			const response = await api.patch(`user/update-name/${user._id}`, {
				name
			});
			console.log(response)
			if (response.status === 200) {
				alert(response?.data.message);
				setUser(response?.data?.data);
				setName(response?.data?.data.name);
				document.getElementById("modalEditName").classList.remove("show", "d-block");
				document.getElementById("modalEditName").style.display = "none";
				document.querySelectorAll(".modal-backdrop")
					.forEach(el => el.classList.remove("modal-backdrop"));
			}
		} catch (error) {
			console.error('Error updating name:', error);
		}
	};

	const handleEmailUpdate = async (e) => {
		e.preventDefault();

		try {
			const response = await api.patch(`user/update-email/${user._id}`, {
				email
			});
			console.log(response);
			if (response.status === 200) {
				alert(response?.data.message);
				setUser(response?.data?.data);
				setEmail(response?.data?.data.email);
				document.getElementById("modalEditEmail").classList.remove("show", "d-block");
				document.getElementById("modalEditEmail").style.display = "none";
				document.querySelectorAll(".modal-backdrop")
					.forEach(el => el.classList.remove("modal-backdrop"));
			}
		} catch (error) {
			console.error('Error updating email:', error);
		}
	};


	const handlePasswordUpdate = async (e) => {
		e.preventDefault();

		if (newPassword !== confirmPassword) {
			console.error('Passwords do not match');
			return;
		}
		console.log({ oldPassword, newPassword })

		try {
			const response = await api.patch(`user/update-password/${user._id}`, {
				oldPassword,
				newPassword
			});
			console.log(response);
			if (response.status === 200) {
				alert(response?.data.message);
				document.getElementById("modalEditPassword").classList.remove("show", "d-block");
				document.getElementById("modalEditPassword").style.display = "none";
				document.querySelectorAll(".modal-backdrop")
					.forEach(el => el.classList.remove("modal-backdrop"));
				setConfirmPassword("")
				setOldPassword("")
				setNewPassword("")
			}
		} catch (error) {
			alert('Error updating password:', error)
			console.error('Error updating password:', error);
			setConfirmPassword("")
			setOldPassword("")
			setNewPassword("")
		}
	};
	;

	const handlePhoneNumberUpdate = async (e) => {
		e.preventDefault();

		try {
			const response = await api.patch(`user/update-phoneNumber/${user._id}`, {
				phoneNumber
			});
			console.log(response);
			if (response.status === 200) {
				alert(response?.data.message);
				setUser(response?.data?.data);
				setPhoneNumber(response?.data?.data?.phoneNumber);
				document.getElementById("modalEditPhoneNumber").classList.remove("show", "d-block");
				document.getElementById("modalEditPhoneNumber").style.display = "none";
				document.querySelectorAll(".modal-backdrop")
					.forEach(el => el.classList.remove("modal-backdrop"));
			}
		} catch (error) {
			alert('Error updating phone number:', error)
			console.error('Error updating phone number:', error);
		}
	};
	return (
		<div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-10">
						<div className="row">
							<div className="col-xl-9">
								<div id="general" className="mb-5">
									<h4><i className="far fa-user fa-fw"></i> General</h4>
									<p>View and update your general account information and settings.</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Name</div>
													<div className="text-gray-500">{user?.name}</div>
												</div>
												<div className="w-100px">
													<a href="#modalEditName" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a>
												</div>
											</div>

											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Phone</div>
													<div className="text-gray-500">{user?.phoneNumber || "N/A"}</div>
												</div>
												<div>
													<a href="#modalEditPhoneNumber" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Email address</div>
													<div className="text-gray-500">{user?.email}</div>
												</div>
												<div>
													<a href="#modalEditEmail" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Password</div>
												</div>
												<div>
													<a href="#modalEditPassword" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a>
												</div>
											</div>
										</div>
									</Card>
								</div>
								<div id="system" className="mb-5">
									<h4><i className="far fa-hdd fa-fw"></i> System</h4>
									<p>System storage, bandwidth and database setting</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Web storage</div>
													<div className="text-gray-500">
														40.8gb / 100gb
													</div>
												</div>
												<div>
													<Link to="https://rantir.com/enterprise" target='_blank' className="btn btn-default w-100px">Manage</Link>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Monthly bandwidth</div>
													<div className="text-gray-500">
														Unlimited
													</div>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Database</div>
													<div className="text-gray-500">
														MySQL version 8.0.19
													</div>
												</div>
												<div>
													{/* <a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px disabled">Update</a> */}
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Platform</div>
													<div className="text-gray-500">
														PHP 7.4.4, NGINX 1.17.0
													</div>
												</div>
												<div>
													{/* <a href="#modalEdit" data-bs-toggle="modal" className="btn btn-success w-100px">Update</a> */}
												</div>
											</div>
										</div>
									</Card>
								</div>

								<div id="notifications" className="mb-5">
									<h4><i className="far fa-bell fa-fw"></i> Notifications</h4>
									<p>Enable or disable what notifications you want to receive.</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Comments</div>
													<div className="text-gray-500 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-success me-1"></i> Enabled (Push, SMS)
													</div>
												</div>
												<div>
													{/* <a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a> */}
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Tags</div>
													<div className="text-gray-500 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-muted me-1"></i> Disabled
													</div>
												</div>
												<div>
													{/* <a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a> */}
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Reminders</div>
													<div className="text-gray-500 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-success me-1"></i> Enabled (Push, Email, SMS)
													</div>
												</div>
												<div>
													{/* <a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a> */}
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>New orders</div>
													<div className="text-gray-500 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-success me-1"></i> Enabled (Push, Email, SMS)
													</div>
												</div>
												<div>
													{/* <a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a> */}
												</div>
											</div>
										</div>
									</Card>
								</div>

								{/* <div id="privacyAndSecurity" className="mb-5">
									<h4><i className="far fa-copyright fa-fw"></i> Privacy and security</h4>
									<p>Limit the account visibility and the security settings for your website.</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Who can see your future posts?</div>
													<div className="text-gray-500 d-flex align-items-center">
														Friends only
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Photo tagging</div>
													<div className="text-gray-500 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-success me-1"></i> Enabled
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Location information</div>
													<div className="text-gray-500 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-muted me-1"></i> Disabled
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Firewall</div>
													<div className="text-gray-500 d-block d-xl-flex align-items-center">
														<div className="d-flex align-items-center"><i className="fa fa-circle fs-8px fa-fw text-muted me-1"></i> Disabled</div>
														<span className="bg-warning bg-opacity-10 text-warning ms-xl-3 mt-1 d-inline-block mt-xl-0 px-1 rounded-sm">
															<i className="fa fa-exclamation-circle text-warning fs-12px me-1"></i> 
															<span className="text-warning">Please enable the firewall for your website</span>
														</span>
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a>
												</div>
											</div>
										</div>
									</Card>
								</div> */}

								<div id="payment" className="mb-5">
									<h4><i className="far fa-credit-card fa-fw"></i> Payment</h4>
									<p>Manage your website payment provider</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Allowed payment method</div>
													<div className="text-gray-500">
														Paypal, Credit Card, Apple Pay, Amazon Pay, Google Wallet, Alipay, Wechatpay
													</div>
												</div>
												<div>
													{/* <a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a> */}
												</div>
											</div>
										</div>
									</Card>
								</div>
								{/* <div id="shipping" className="mb-5">
									<h4><i className="far fa-paper-plane fa-fw"></i> Shipping</h4>
									<p>Allowed shipping area and zone setting</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Allowed shipping method</div>
													<div className="text-gray-500">
														Local, Domestic
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a>
												</div>
											</div>
										</div>
									</Card>
								</div> */}

								{/* <div id="mediaAndFiles" className="mb-5">
									<h4><i className="far fa-images fa-fw"></i> Media and Files</h4>
									<p>Allowed files and media format upload setting</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Allowed files and media format</div>
													<div className="text-gray-500">
														.png, .jpg, .gif, .mp4
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Media and files cdn</div>
													<div className="text-gray-500 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-muted me-1"></i> Disabled
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a>
												</div>
											</div>
										</div>
									</Card>
								</div> */}

								<div id="languages" className="mb-5">
									<h4><i className="fa fa-language fa-fw"></i> Languages</h4>
									<p>Language font support and auto translation enabled</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Language enabled</div>
													<div className="text-gray-500">
														English (default), Chinese, France, Portuguese, Japense
													</div>
												</div>
												<div>
													{/* <a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a> */}
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Auto translation</div>
													<div className="text-gray-500 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-success me-1"></i> Enabled
													</div>
												</div>
												<div>
													{/* <a href="#modalEdit" data-bs-toggle="modal" className="btn btn-default w-100px">Edit</a> */}
												</div>
											</div>
										</div>
									</Card>
								</div>

								<div id="resetSettings" className="mb-5">
									<h4><i className="fa fa-redo fa-fw"></i> Reset settings</h4>
									<p>Reset all website setting to factory default setting.</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-fill">
													<div>Reset Settings</div>
													<div className="text-gray-500">
														This action will clear and reset all the current website setting.
													</div>
												</div>
												<div>
													{/* <a href="#/" className="btn btn-default w-100px">Reset</a> */}
												</div>
											</div>
										</div>
									</Card>
								</div>
							</div>
							<div className="col-xl-3">
								<NavScrollTo>
									<nav className="nav">
										<a className="nav-link" href="#general" data-toggle="scroll-to">General</a>
										<a className="nav-link" href="#system" data-toggle="scroll-to">System</a>
										<a className="nav-link" href="#payment" data-toggle="scroll-to">Payment</a>
										<a className="nav-link" href="#languages" data-toggle="scroll-to">Languages</a>
										<a className="nav-link" href="#resetSettings" data-toggle="scroll-to">Reset settings</a>
										{/* <a className="nav-link" href="#notifications" data-toggle="scroll-to">Notifications</a>
										<a className="nav-link" href="#privacyAndSecurity" data-toggle="scroll-to">Privacy and security</a>
										<a className="nav-link" href="#shipping" data-toggle="scroll-to">Shipping</a>
										<a className="nav-link" href="#mediaAndFiles" data-toggle="scroll-to">Media and Files</a> */}
									</nav>
								</NavScrollTo>
							</div>
						</div>
					</div>
				</div>
			</div>

			<SettingsModal
				modalId={"modalEditName"}
				name={"Edit Name"}
				onSubmit={handleNameUpdate}
			>
				<div className="modal-body">
					<div className="mb-3">
						<label className="form-label">Name</label>
						<input
							className="form-control"
							placeholder="Enter Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					{/* <div className="alert bg-body">
						<b>Please note:</b>
						If you change your name, you can't change it again for 60 days.
						Don't add any unusual capitalization, punctuation, characters or random words.
						<a href="#/" className="alert-link">Learn more.</a>
					</div> */}
					{/* <div className="mb-3">
						<label className="form-label">Other Names</label>
						<div>
							<a href="#/" className="btn btn-outline-default"><i className="fa fa-plus fa-fw"></i> Add other names</a>
						</div>
					</div> */}
				</div>
			</SettingsModal>
			<SettingsModal
				modalId={"modalEditEmail"}
				name={"Edit Email"}
				onSubmit={handleEmailUpdate}
			>
				<div className="modal-body">
					<div className="mb-3">
						<label className="form-label">Email Address</label>
						<input
							className="form-control"
							placeholder="Enter your email address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					{/* <div className="alert bg-body">
						<b>Please note:</b>
						Changing your email address will update your login credentials.
						<a href="#/" className="alert-link">Learn more.</a>
					</div> */}
				</div>
			</SettingsModal>
			<SettingsModal
				modalId={"modalEditPhoneNumber"}
				name={"Edit Phone Number"}
				onSubmit={handlePhoneNumberUpdate}

			>
				<div className="modal-body">
					<div className="mb-3">
						<label className="form-label">Phone Number</label>
						<input
							className="form-control"
							type='phone'
							placeholder="Enter your Phone Number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
					</div>
					{/* <div className="alert bg-body">
						<b>Please note:</b>
						Changing your email address will update your login credentials.
						<a href="#/" className="alert-link">Learn more.</a>
					</div> */}
				</div>
			</SettingsModal>
			<SettingsModal
				modalId={"modalEditPassword"}
				name={"Edit Password"}
				onSubmit={handlePasswordUpdate}
			>
				<div className='modal-body'>
					<div className="mb-3">
						<label className="form-label">Old Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter your old password"
							value={oldPassword}
							onChange={(e) => setOldPassword(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">New Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter your new password"
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Confirm Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Confirm your new password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
				</div>
			</SettingsModal>
		</div>
	)
}

export default Settings;