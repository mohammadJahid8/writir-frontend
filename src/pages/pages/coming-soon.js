import React, { useEffect, useContext } from 'react';
import Countdown from 'react-countdown';
import { AppSettings } from './../../config/app-settings.js';

function PagesComingSoon() {
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
		<div className="coming-soon">
			<div className="coming-soon-content">
				<div className="coming-soon-img mb-4"><img src="/assets/img/page/coming-soon.svg" alt="" /></div>
				<div className="coming-soon-timer mb-3">
					<Countdown 
						date={Date.now() + 1000000000}
						renderer={
							props =>
							<div className="is-countdown">
								<div className="countdown-row countdown-show4">
									<div className="countdown-section">
										<div className="countdown-amount">{props.days}</div>
										<div className="countdown-period">Days</div>
									</div>
									<div className="countdown-section">
										<div className="countdown-amount">{props.hours}</div>
										<div className="countdown-period">Hours</div>
									</div>
									<div className="countdown-section">
										<div className="countdown-amount">{props.minutes}</div>
										<div className="countdown-period">Minutes</div>
									</div>
									<div className="countdown-section">
										<div className="countdown-amount">{props.seconds}</div>
										<div className="countdown-period">Seconds</div>
									</div>
								</div>
							</div>
						}
					/>
				</div>
				<h2 className="mb-1">We're coming soon!</h2>
				<p className="mb-0">We are working very hard on the new version of our site.<br /> It will bring a lot of new features. Stay tuned!</p>
			</div>
		</div>
	)
}

export default PagesComingSoon;