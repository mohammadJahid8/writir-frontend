import React, { useEffect, useState } from 'react';
import Header from './components/header/header.jsx';
import TopNav from './components/top-nav/top-nav.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Content from './components/content/content.jsx';
import Footer from './components/footer/footer.jsx';
import ThemePanel from './components/theme-panel/theme-panel.jsx';
import { AppSettings } from './config/app-settings.js';
import { slideToggle } from './composables/slideToggle.js';

function App() {
  var defaultOptions = {
    appMode: '',
    appTheme: '',
    appCover: '',
    appHeaderNone: false,
    appSidebarNone: false,
    appSidebarMinified: false,
    appSidebarMobile: false,
    appContentNone: false,
    appContentClass: '',
    appContentFullHeight: false,
    appBoxedLayout: false,
    appFooter: false,
    appTopNav: false,
  };
  const [appHeaderNone, setAppHeaderNone] = useState(
    defaultOptions.appHeaderNone
  );
  const [appSidebarNone, setAppSidebarNone] = useState(
    defaultOptions.appSidebarNone
  );
  const [appSidebarMinified, setAppSidebarMinified] = useState(
    defaultOptions.appSidebarMinified
  );
  const [appSidebarMobile, setAppSidebarMobile] = useState(
    defaultOptions.appSidebarMobile
  );
  const [appContentNone, setAppContentNone] = useState(
    defaultOptions.appContentNone
  );
  const [appContentClass, setAppContentClass] = useState(
    defaultOptions.appContentClass
  );
  const [appContentFullHeight, setAppContentFullHeight] = useState(
    defaultOptions.appContentFullHeight
  );
  const [appBoxedLayout, setAppBoxedLayout] = useState(
    defaultOptions.appBoxedLayout
  );
  const [appFooter, setAppFooter] = useState(defaultOptions.appFooter);
  const [appTopNav, setAppTopNav] = useState(defaultOptions.appTopNav);

  var handleToggleAppSidebarMinified = () => {
    setAppSidebarMinified((prevValue) => !prevValue);
    if (localStorage) {
      localStorage.appSidebarMinified = !appSidebarMinified;
    }
  };

  var handleToggleAppSidebarMobile = () => {
    setAppSidebarMobile((prevValue) => !prevValue);
  };

  var handleSetAppTheme = (value) => {
    if (value) {
      var newTheme = value;
      for (var x = 0; x < document.body.classList.length; x++) {
        if (
          document.body.classList[x].indexOf('theme-') > -1 &&
          document.body.classList[x] !== newTheme
        ) {
          document.body.classList.remove(document.body.classList[x]);
        }
      }

      if (localStorage && value) {
        localStorage.appTheme = value;
      }

      document.body.classList.add(newTheme);
      document.dispatchEvent(new Event('theme-reload'));
    }
  };

  var handleSetAppMode = (value) => {
    if (value) {
      document.documentElement.setAttribute('data-bs-theme', value);
    }
  };

  var handleSetAppSidebarMinified = (value) => {
    if (value) {
      var elm = document.querySelector('.app');
      if (elm) {
        if (
          !(
            elm.classList.contains('app-with-top-nav') &&
            elm.classList.contains('app-without-sidebar')
          ) &&
          value === 'true'
        ) {
          setAppSidebarMinified(value);
        }
      }
    }
  };

  var handleSetAppSidebarMobile = (value) => {
    if (value) {
      var elm = document.querySelector('.app');
      if (elm) {
        if (
          !(
            elm.classList.contains('app-with-top-nav') &&
            elm.classList.contains('app-without-sidebar')
          )
        ) {
          setAppSidebarMobile(value);
        } else {
          slideToggle(document.querySelector('.app-top-nav'));
        }
      }
    }
  };

  var handleSetAppBoxedLayout = (value) => {
    if (value) {
      document.body.classList.add('app-with-bg');
    } else {
      document.body.classList.remove('app-with-bg');
    }
    setAppBoxedLayout(value);
  };

  const providerValue = {
    setAppHeaderNone,
    setAppSidebarNone,
    setAppSidebarMinified,
    setAppSidebarMobile,
    setAppContentNone,
    setAppContentClass,
    setAppContentFullHeight,
    setAppBoxedLayout,
    setAppFooter,
    setAppTopNav,
    handleSetAppTheme,
    handleSetAppMode,
    handleSetAppBoxedLayout,
    handleSetAppSidebarMinified,
    handleSetAppSidebarMobile,
    handleToggleAppSidebarMinified,
    handleToggleAppSidebarMobile,
  };

  useEffect(() => {
    if (defaultOptions.appMode) {
      handleSetAppMode(defaultOptions.appMode);
    }
    // if (defaultOptions.appTheme) {
    //   handleSetAppTheme(defaultOptions.appTheme);
    // }
    if (defaultOptions.appSidebarMinified) {
      handleSetAppSidebarMinified(defaultOptions.appSidebarMinified);
    }

    if (localStorage) {
      if (typeof localStorage.appMode !== 'undefined') {
        handleSetAppMode(localStorage.appMode);
      }
      // if (typeof localStorage.appTheme !== 'undefined') {
      //   handleSetAppTheme(localStorage.appTheme);
      // }
      if (typeof localStorage.appSidebarMinified !== 'undefined') {
        handleSetAppSidebarMinified(localStorage.appSidebarMinified);
      }
    }

    // eslint-disable-next-line
  }, []);

  return (
    <AppSettings.Provider value={providerValue}>
      <div
        className={
          'app ' +
          (appBoxedLayout ? 'app-boxed-layout ' : '') +
          (appContentFullHeight ? 'app-content-full-height ' : '') +
          (appHeaderNone ? 'app-without-header ' : '') +
          (appSidebarNone ? 'app-without-sidebar ' : '') +
          (appSidebarMinified ? 'app-sidebar-minified ' : '') +
          (appSidebarMobile ? 'app-sidebar-mobile-toggled' : '') +
          (appFooter ? 'app-footer-fixed ' : '') +
          (appTopNav ? 'app-with-top-nav ' : '')
        }
      >
        {!appHeaderNone && <Header />}
        {appTopNav && <TopNav />}
        {!appSidebarNone && <Sidebar />}
        {!appContentNone && <Content className={appContentClass} />}
        {!appFooter && <Footer />}
        {/* <ThemePanel /> */}
      </div>
    </AppSettings.Provider>
  );
}

export default App;
