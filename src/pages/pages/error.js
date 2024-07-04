import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';

function PagesError() {
	const context = useContext(AppSettings);
	
	useEffect(() => {
		context.setAppHeaderNone(true);
		context.setAppSidebarNone(true);
		context.setAppContentClass('p-0');
		context.setAppContentFullHeight(true);
		
		return function cleanUp() {
			context.setAppHeaderNone(false);
			context.setAppSidebarNone(false);
			context.setAppContentClass('');
			context.setAppContentFullHeight(false);
		};
		
		// eslint-disable-next-line
	}, []);

	return (
		<div className="error-page">
			<div className="error-page-content">
				<div className="error-img">
					<div className="error-img-code">404</div>
					<img src="/assets/img/page/404.svg" alt="" />
				</div>
				
				<h1>Oops!</h1> 
				<h3>We can't seem to find the page you're looking for</h3>
				<p className="text-muted mb-2">
					Here are some helpful links instead:
				</p>
				<p className="mb-4">
					<Link to="/" className="text-decoration-none">Home</Link>
					&nbsp;
					<span className="link-divider"></span>
					&nbsp;
					<Link to="/pages/search-results" className="text-decoration-none">Search</Link>
					&nbsp;
					<span className="link-divider"></span>
					&nbsp;
					<Link to="/email/inbox" className="text-decoration-none">Email</Link>
					&nbsp;
					<span className="link-divider"></span>
					&nbsp;
					<Link to="/calendar" className="text-decoration-none">Calendar</Link>
					&nbsp;
					<span className="link-divider"></span>
					&nbsp;
					<Link to="/settings" className="text-decoration-none">Settings</Link>
					&nbsp;
					<span className="link-divider"></span>
					&nbsp;
					<Link to="/helper" className="text-decoration-none">Helper</Link>
				</p>
				<Link to="/" className="btn btn-theme">Go to Homepage</Link>
			</div>
		</div>
	)
}

export default PagesError;