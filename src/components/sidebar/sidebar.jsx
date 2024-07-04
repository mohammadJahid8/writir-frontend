import React, { useEffect, useContext } from "react";
import { slideUp } from "./../../composables/slideUp.js";
import { slideToggle } from "./../../composables/slideToggle.js";
import { AppSettings } from "./../../config/app-settings.js";
import PerfectScrollbar from "react-perfect-scrollbar";
import SidebarNav from "./sidebar-nav.jsx";

function Sidebar() {
  const context = useContext(AppSettings);

  useEffect(() => {
    document.querySelector("body").classList.add("app-init");

    var handleSidebarMenuToggle = function (menus) {
      menus.map(function (menu) {
        menu.onclick = function (e) {
          e.preventDefault();
          var target = this.nextElementSibling;
          var expandTime = 300;

          menus.map(function (m) {
            var otherTarget = m.nextElementSibling;
            if (otherTarget !== target) {
              slideUp(otherTarget, expandTime);
              otherTarget.closest(".menu-item").classList.remove("expand");
              otherTarget.closest(".menu-item").classList.add("closed");
            }
            return true;
          });

          var targetItemElm = target.closest(".menu-item");

          if (
            targetItemElm.classList.contains("expand") ||
            (targetItemElm.classList.contains("active") &&
              !target.style.display)
          ) {
            targetItemElm.classList.remove("expand");
            targetItemElm.classList.add("closed");
            slideToggle(target, expandTime);
          } else {
            targetItemElm.classList.add("expand");
            targetItemElm.classList.remove("closed");
            slideToggle(target, expandTime);
          }
        };
        return true;
      });
    };

    var menuBaseSelector = ".app-sidebar .menu > .menu-item.has-sub";
    var submenuBaseSelector = " > .menu-submenu > .menu-item.has-sub";

    // menu
    var menuLinkSelector = menuBaseSelector + " > .menu-link";
    var menus = [].slice.call(document.querySelectorAll(menuLinkSelector));
    handleSidebarMenuToggle(menus);

    // submenu lvl 1
    var submenuLvl1Selector = menuBaseSelector + submenuBaseSelector;
    var submenusLvl1 = [].slice.call(
      document.querySelectorAll(submenuLvl1Selector + " > .menu-link")
    );
    handleSidebarMenuToggle(submenusLvl1);

    // submenu lvl 2
    var submenuLvl2Selector =
      menuBaseSelector + submenuBaseSelector + submenuBaseSelector;
    var submenusLvl2 = [].slice.call(
      document.querySelectorAll(submenuLvl2Selector + " > .menu-link")
    );
    handleSidebarMenuToggle(submenusLvl2);

    var appSidebarFloatSubmenuTimeout = "";
    var appSidebarFloatSubmenuDom = "";

    function handleSidebarMinifyFloatMenuClick() {
      var elms = [].slice.call(
        document.querySelectorAll(
          ".app-float-submenu .menu-item.has-sub > .menu-link"
        )
      );
      if (elms) {
        elms.map(function (elm) {
          elm.onclick = function (e) {
            e.preventDefault();
            var targetItem = this.closest(".menu-item");
            var target = targetItem.querySelector(".menu-submenu");
            var targetStyle = getComputedStyle(target);
            var close =
              targetStyle.getPropertyValue("display") !== "none" ? true : false;
            var expand =
              targetStyle.getPropertyValue("display") !== "none" ? false : true;

            slideToggle(target);

            var loopHeight = setInterval(function () {
              var targetMenu = document.querySelector(".app-float-submenu");
              var targetHeight = targetMenu.clientHeight;
              var targetOffset = targetMenu.getBoundingClientRect();
              var targetOriTop = targetMenu.getAttribute("data-offset-top");
              var targetTop = targetOffset.top;
              var windowHeight = document.body.clientHeight;
              if (close) {
                if (targetTop > targetOriTop) {
                  targetTop =
                    targetTop > targetOriTop ? targetOriTop : targetTop;
                  targetMenu.style.top = targetTop + "px";
                  targetMenu.style.bottom = "auto";
                }
              }
              if (expand) {
                if (windowHeight - targetTop < targetHeight) {
                  targetMenu.style.top = "auto";
                  targetMenu.style.bottom = 0;
                }
                var floatSubmenuElm =
                  document.querySelector(".app-float-submenu");
                if (targetHeight > windowHeight) {
                  if (floatSubmenuElm) {
                    var splitClass = "overflow-scroll mh-100vh".split(" ");
                    for (var i = 0; i < splitClass.length; i++) {
                      floatSubmenuElm.classList.add(splitClass[i]);
                    }
                  }
                }
              }
            }, 1);
            setTimeout(function () {
              clearInterval(loopHeight);
            }, 250);
          };
          return true;
        });
      }
    }

    function handleSidebarMinifyFloatMenu() {
      var elms = [].slice.call(
        document.querySelectorAll(
          ".app-sidebar .menu > .menu-item.has-sub > .menu-link"
        )
      );
      if (elms) {
        elms.map(function (elm) {
          elm.onmouseenter = function () {
            var appElm = document.querySelector(".app");
            if (appElm && appElm.classList.contains("app-sidebar-minified")) {
              clearTimeout(appSidebarFloatSubmenuTimeout);
              var targetMenu =
                this.closest(".menu-item").querySelector(".menu-submenu");
              if (
                appSidebarFloatSubmenuDom === this &&
                document.querySelector(".app-float-submenu")
              ) {
                return;
              } else {
                appSidebarFloatSubmenuDom = this;
              }
              var targetMenuHtml = targetMenu.innerHTML;
              if (targetMenuHtml) {
                var bodyStyle = getComputedStyle(document.body);
                var sidebarOffset = document
                  .querySelector(".app-sidebar")
                  .getBoundingClientRect();
                var sidebarWidth = parseInt(
                  document.querySelector(".app-sidebar").clientWidth
                );
                var sidebarX =
                  bodyStyle.getPropertyValue("direction") !== "rtl"
                    ? sidebarOffset.left + sidebarWidth
                    : document.body.clientWidth - sidebarOffset.left;
                var targetHeight = handleGetHiddenMenuHeight(targetMenu);
                var targetOffset = this.getBoundingClientRect();
                var targetTop = targetOffset.top;
                var targetLeft =
                  bodyStyle.getPropertyValue("direction") !== "rtl"
                    ? sidebarX
                    : "auto";
                var targetRight =
                  bodyStyle.getPropertyValue("direction") !== "rtl"
                    ? "auto"
                    : sidebarX;
                var windowHeight = document.body.clientHeight;

                if (!document.querySelector(".app-float-submenu")) {
                  var overflowClass = "";
                  if (targetHeight > windowHeight) {
                    overflowClass = "overflow-scroll mh-100vh";
                  }
                  var html = document.createElement("div");
                  html.setAttribute("id", "app-float-submenu");
                  html.setAttribute(
                    "class",
                    "app-float-submenu " + overflowClass
                  );
                  html.setAttribute("data-offset-top", targetTop);
                  html.setAttribute("data-menu-offset-top", targetTop);
                  html.innerHTML = targetMenuHtml;
                  appElm.appendChild(html);

                  var elm = document.getElementById("app-float-submenu");
                  elm.onmouseover = function () {
                    clearTimeout(appSidebarFloatSubmenuTimeout);
                  };
                  elm.onmouseout = function () {
                    appSidebarFloatSubmenuTimeout = setTimeout(() => {
                      document.querySelector(".app-float-submenu").remove();
                    }, 250);
                  };
                } else {
                  var floatSubmenu =
                    document.querySelector(".app-float-submenu");
                  var floatSubmenuElm =
                    document.querySelector(".app-float-submenu");

                  if (targetHeight > windowHeight) {
                    if (floatSubmenuElm) {
                      var splitClass = "overflow-scroll mh-100vh".split(" ");
                      for (var i = 0; i < splitClass.length; i++) {
                        floatSubmenuElm.classList.add(splitClass[i]);
                      }
                    }
                  }
                  floatSubmenu.setAttribute("data-offset-top", targetTop);
                  floatSubmenu.setAttribute("data-menu-offset-top", targetTop);
                  floatSubmenuElm.innerHTML = targetMenuHtml;
                }

                var targetMenuHeight =
                  document.querySelector(".app-float-submenu").clientHeight;
                var targetFloatSubmenuElm =
                  document.querySelector(".app-float-submenu");
                if (windowHeight - targetTop > targetMenuHeight) {
                  if (targetFloatSubmenuElm) {
                    targetFloatSubmenuElm.style.top = targetTop + "px";
                    targetFloatSubmenuElm.style.left = targetLeft + "px";
                    targetFloatSubmenuElm.style.bottom = "auto";
                    targetFloatSubmenuElm.style.right = targetRight + "px";
                  }
                } else {
                  if (targetFloatSubmenuElm) {
                    targetFloatSubmenuElm.style.top = "auto";
                    targetFloatSubmenuElm.style.left = targetLeft + "px";
                    targetFloatSubmenuElm.style.bottom = 0;
                    targetFloatSubmenuElm.style.right = targetRight + "px";
                  }
                }
                handleSidebarMinifyFloatMenuClick();
              } else {
                appSidebarFloatSubmenuDom = "";
                document.querySelector(".app-float-submenu").remove();
              }
            }
          };
          elm.onmouseleave = function () {
            var elm = document.querySelector(".app");
            if (elm && elm.classList.contains("app-sidebar-minified")) {
              appSidebarFloatSubmenuTimeout = setTimeout(() => {
                appSidebarFloatSubmenuDom = "";
                document.querySelector(".app-float-submenu").remove();
              }, 250);
            }
          };

          return true;
        });
      }
    }

    function handleGetHiddenMenuHeight(elm) {
      elm.setAttribute(
        "style",
        "position: absolute; visibility: hidden; display: block !important"
      );
      var targetHeight = elm.clientHeight;
      elm.removeAttribute("style");
      return targetHeight;
    }

    handleSidebarMinifyFloatMenu();
  });

  const dismissAppSidebarMobile = () => {
    context.setAppSidebarMobile(false);
  };

  return (
    <React.Fragment>
      <div id="sidebar" className="app-sidebar">
        <PerfectScrollbar
          className="app-sidebar-content"
          options={{ suppressScrollX: true }}
        >
          <SidebarNav />
        </PerfectScrollbar>
        <button
          className="app-sidebar-mobile-backdrop"
          onClick={dismissAppSidebarMobile}
        ></button>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
