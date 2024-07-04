import React, { useState } from 'react';

function ThemePanel() {
	const [active, setActive] = useState(0);
	// const [mode, setMode] = useState((localStorage && typeof localStorage.appMode !== 'undefined' && localStorage.appMode === 'dark') ?  true : false);
	const [theme, setTheme] = useState((localStorage && typeof localStorage.appTheme !== 'undefined') ?  localStorage.appTheme : 'theme-primary');
	
	const toggleAppThemePanel = (event) => {
		event.preventDefault();
		
		setActive((active === 0) ? active + 1 : 0);
	}
	
	const setAppTheme = (event, theme) => {
		event.preventDefault();
		
		for (var x = 0; x < document.body.classList.length; x++) {
			if ((document.body.classList[x]).indexOf('theme-') > -1 && document.body.classList[x] !== theme) {
				document.body.classList.remove(document.body.classList[x]);
			}
		}
		
		if (theme) {
			document.body.classList.add(theme);
		}
		if (localStorage) {
			localStorage.appTheme = theme;
		}
		
		setTheme(theme);
		document.dispatchEvent(new Event('theme-reload'));
	}
	
	// const setAppMode = (mode) => {
	// 	document.documentElement.setAttribute('data-bs-theme', mode);
		
	// 	if (localStorage) {
	// 		localStorage.appMode = mode;
	// 	}
		
	// 	document.dispatchEvent(new Event('theme-reload'));
	// }
	
// 	const handleCheckboxChange = (event) => {
// 		const isChecked = event.target.checked;
// 		setMode(isChecked);
// 		setAppMode(isChecked ? 'dark' : 'light');
//   };
	
	const themeList = [
	//  { name: 'Pink', bgClass: 'bg-pink', themeClass: 'theme-pink' },
	//  { name: 'Red', bgClass: 'bg-red', themeClass: 'theme-red' },
	//  { name: 'Orange', bgClass: 'bg-warning', themeClass: 'theme-warning' },
	//  { name: 'Yellow', bgClass: 'bg-yellow', themeClass: 'theme-yellow' },
	//  { name: 'Lime', bgClass: 'bg-lime', themeClass: 'theme-lime' },
	//  { name: 'Green', bgClass: 'bg-green', themeClass: 'theme-green' },
	//  { name: 'Default', bgClass: 'bg-teal', themeClass: 'theme-teal' },
	//  { name: 'Cyan', bgClass: 'bg-info', themeClass: 'theme-info' },
	 { name: 'Blue', bgClass: 'bg-primary', themeClass: 'theme-primary' },
	//  { name: 'Purple', bgClass: 'bg-purple', themeClass: 'theme-purple' },
	//  { name: 'Indigo', bgClass: 'bg-indigo', themeClass: 'theme-indigo' },
	//  { name: 'Gray', bgClass: 'bg-gray-200', themeClass: 'theme-gray-200' }
	];
	
	return (
		<div></div>
		// <div className={'theme-panel' + ((active) ? ' active' : '')}>
		// 	<a href="#/" onClick={toggleAppThemePanel} className="theme-collapse-btn"><i className="fa fa-cog"></i></a>
		// 	<div className="theme-panel-content">
		// 		<div className="small fw-bold text-inverse mb-1">Display Mode</div>
		// 		<ul className="theme-list clearfix">
		// 			{themeList.length > 0 && themeList.map((t, index) => (
		// 				<li className={((theme === t.themeClass) ? 'active' : '')} key={index}>
		// 					<a href="#/" onClick={(event) => setAppTheme(event, t.themeClass)} className={t.bgClass} data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body">&nbsp;</a>
		// 				</li>
		// 			))}
		// 		</ul>
		// 		<hr className="mb-0" />
		// 		<div className="row mt-10px pt-3px">
		// 			<div className="col-9 control-label text-body-emphasis fw-bold">
		// 				<div>Dark Mode <span className="badge bg-theme text-theme-color ms-1 position-relative py-4px px-6px" style={{top: '-1px'}}>NEW</span></div>
		// 				<div className="lh-sm fs-13px fw-semibold">
		// 					<small className="text-body-emphasis opacity-50">
		// 						Adjust the appearance to reduce glare and give your eyes a break.
		// 					</small>
		// 				</div>
		// 			</div>
		// 			<div className="col-3 d-flex">
		// 				<div className="form-check form-switch ms-auto mb-0 mt-2px">
		// 					<input type="checkbox" className="form-check-input" name="app-theme-dark-mode" onChange={handleCheckboxChange} checked={mode} value="1" />
		// 					<label className="form-check-label" htmlFor="appThemeDarkMode">&nbsp;</label>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default ThemePanel;
