// const Menu = [
//   { is_header: true, title: 'Navigation' },
//   { path: '/dashboard', icon: 'fa fa-laptop', title: 'Dashboard' },
//   { path: '/analytics', icon: 'fa fa-chart-pie', title: 'Analytics' },
//   {
//     path: '/email',
//     icon: 'fa fa-envelope',
//     title: 'Email',
//     badge: '4',
//     children: [
//       { path: '/email/inbox', title: 'Inbox' },
//       { path: '/email/compose', title: 'Compose' },
//       { path: '/email/detail', title: 'Detail' },
//     ],
//   },
//   { is_divider: true },
//   { is_header: true, title: 'Components' },
//   { path: '/widgets', icon: 'fa fa-qrcode', title: 'Widgets' },
//   {
//     path: '/pos',
//     icon: 'fa fa-wallet',
//     title: 'POS System',
//     children: [
//       { path: '/pos/customer-order', title: 'Customer Order' },
//       { path: '/pos/kitchen-order', title: 'Kitchen Order' },
//       { path: '/pos/counter-checkout', title: 'Counter Checkout' },
//       { path: '/pos/table-booking', title: 'Table Booking' },
//       { path: '/pos/menu-stock', title: 'Menu Stock' },
//     ],
//   },
//   {
//     path: '/ui',
//     icon: 'fa fa-heart',
//     title: 'UI Kits',
//     children: [
//       { path: '/ui/bootstrap', title: 'Bootstrap' },
//       { path: '/ui/buttons', title: 'Buttons' },
//       { path: '/ui/card', title: 'Card' },
//       { path: '/ui/icons', title: 'Icons' },
//       { path: '/ui/modal-notifications', title: 'Modal & Notifications' },
//       { path: '/ui/typography', title: 'Typography' },
//       { path: '/ui/tabs-accordions', title: 'Tabs & Accordions' },
//     ],
//   },
//   {
//     path: '/form',
//     icon: 'fa fa-file-alt',
//     title: 'Forms',
//     children: [
//       { path: '/form/elements', title: 'Form Elements' },
//       { path: '/form/plugins', title: 'Form Plugins' },
//       { path: '/form/wizards', title: 'Wizards' },
//     ],
//   },
//   {
//     path: '/table',
//     icon: 'fa fa-table',
//     title: 'Tables',
//     children: [
//       { path: '/table/elements', title: 'Table Elements' },
//       { path: '/table/plugins', title: 'Table Plugins' },
//     ],
//   },
//   {
//     path: '/chart',
//     icon: 'fa fa-chart-bar',
//     title: 'Charts',
//     children: [
//       { path: '/chart/chart-js', title: 'Chart.js' },
//       { path: '/chart/chart-apex', title: 'Apexcharts.js' },
//     ],
//   },
//   { path: '/map', icon: 'fa fa-map-marker-alt', title: 'Map' },
//   {
//     path: '/layout',
//     icon: 'fa fa-code-branch',
//     title: 'Layout',
//     children: [
//       { path: '/layout/starter-page', title: 'Starter Page' },
//       { path: '/layout/fixed-footer', title: 'Fixed Footer' },
//       { path: '/layout/full-height', title: 'Full Height' },
//       { path: '/layout/full-width', title: 'Full Width' },
//       { path: '/layout/boxed-layout', title: 'Boxed Layout' },
//       { path: '/layout/minified-sidebar', title: 'Minified Sidebar' },
//       { path: '/layout/top-nav', title: 'Top Nav' },
//       { path: '/layout/mixed-nav', title: 'Mixed Nav' },
//       {
//         path: '/layout/mixed-nav-boxed-layout',
//         title: 'Mixed Nav Boxed Layout',
//       },
//     ],
//   },
//   {
//     path: '/pages',
//     icon: 'fa fa-globe',
//     title: 'Pages',
//     children: [
//       { path: '/pages/scrum-board', title: 'Scrum Board' },
//       { path: '/pages/products', title: 'Products' },
//       { path: '/pages/product-details', title: 'Product Details' },
//       { path: '/pages/orders', title: 'Orders' },
//       { path: '/pages/order-details', title: 'Order Details' },
//       { path: '/pages/gallery', title: 'Gallery' },
//       { path: '/pages/search-results', title: 'Search Results' },
//       { path: '/pages/coming-soon', title: 'Coming Soon Page' },
//       { path: '/pages/error', title: 'Error Page' },
//       { path: '/pages/login', title: 'Login' },
//       { path: '/pages/register', title: 'Register' },
//       { path: '/pages/messenger', title: 'Messenger' },
//       { path: '/pages/data-management', title: 'Data Management' },
//       { path: '/pages/file-manager', title: 'File Manager' },
//       { path: '/pages/pricing', title: 'Pricing Page' },
//       { path: '/pages/forgot-password', title: 'Forgot Password' },
//       { path: '/pages/reset-password/:token', title: 'Reset Password' },
//       { path: '/pages/workspace', title: 'Workspace' },
//       { path: '/pages/workspace/create-workspace' },
//     ],
//   },
//   { is_divider: true },
//   { is_header: true, title: 'Users' },
//   { path: '/profile', icon: 'fa fa-user-circle', title: 'Profile' },
//   { path: '/calendar', icon: 'fa fa-calendar', title: 'Calendar' },
//   { path: '/settings', icon: 'fa fa-cog', title: 'Settings' },
//   { path: '/helper', icon: 'fa fa-question-circle', title: 'Helper' },
// ];

import ProjectIcon from '../components/cards/ProjectIcon';
import Icon from '../components/icon/Icon';

const Menu = (projects) => {
  let menuItems = [
    { is_header: true, title: 'Explore' },
    {
      path: '/dashboard',
      icon: <Icon path='/sparkle.svg' />,
      title: 'Home',
    },
    {
      path: '/pages/explore-drive',
      icon: <Icon path='/explore.svg' />,
      title: 'Explore Drive',
    },
    { path: '/apiKeys', icon: <Icon path='/api.svg' />, title: 'API Keys' },

    { is_header: true, title: 'Apps' },
    {
      path: '/#',
      icon: <Icon path='/dashboards.svg' />,
      title: 'Dashboards',
    },
    { path: '/#', icon: <Icon path='/documents.svg' />, title: 'Documents' },

    // {
    //   path: "/ui",
    //   icon: "fa fa-heart",
    //   title: "UI Kits",
    //   children: [
    //     { path: "/ui/bootstrap", title: "Bootstrap" },
    //     { path: "/ui/buttons", title: "Buttons" },
    //     { path: "/ui/card", title: "Card" },
    //     { path: "/ui/icons", title: "Icons" },
    //     { path: "/ui/modal-notifications", title: "Modal & Notifications" },
    //     { path: "/ui/typography", title: "Typography" },
    //     { path: "/ui/tabs-accordions", title: "Tabs & Accordions" },
    //   ],
    // },

    { is_divider: true },
    {
      is_header: true,
      title: 'Folders',
    },

    ...projects.map((project) => ({
      path: `/folder/${project._id}`,
      icon: (
        <ProjectIcon
          height='20px'
          width='20px'
          fontSize='12px'
          color={project?.color}
          title={project?.name}
        />
      ),
      title: project.name,
    })),
    { is_divider: true },
    { is_header: true, title: 'Settings' },
    { path: '/settings', icon: 'fa fa-cog', title: 'Settings' },
    {
      path: 'https://www.rantir.com/documentation/support-articles',
      icon: 'fa fa-question-circle',
      title: 'Rantir Support & Docs',
    },
  ];

  return menuItems;
};

export default Menu;
