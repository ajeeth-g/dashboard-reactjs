import { IoHomeOutline, IoNewspaperOutline } from 'react-icons/io5';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

import {
  IoSearchOutline,
  IoGlobeOutline,
  IoCartOutline,
  IoNotificationsOutline,
} from 'react-icons/io5';
import { MdOutlineNightlight } from 'react-icons/md';
import { CgMenuGridR } from 'react-icons/cg';
import { GoScreenFull } from 'react-icons/go';

export const navigationItems = {
  main: {
    heading: 'main',
    mainIcon: <IoHomeOutline />,
    title: 'Dashboard',
    link: '/dashboard',
    notification: {
      isnotification: true,
      value: '12',
    },
    rightIcon: <MdOutlineKeyboardArrowDown />,
    leftIcon: <MdOutlineKeyboardArrowRight />,
    subItems: [
      {
        title: 'Orders',
        link: '/orders',
      },
      {
        title: 'Products',
        link: '/products',
      },
      {
        title: 'Customers',
        link: '/customers',
      },
      {
        title: 'Reports',
        link: '/reports',
      },
      {
        title: 'Analytics',
        link: '/analytics',
      },
      {
        title: 'Inventory',
        link: '/inventory',
      },
      {
        title: 'Settings',
        link: '/settings',
      },
      {
        title: 'Help',
        link: '/help',
      },
      {
        title: 'Logout',
        link: '/logout',
      },
    ],
  },
  pages: {
    heading: 'pages',
    mainIcon: <IoNewspaperOutline />,
    title: 'Pages',
    link: '/pages',
    notification: {
      isnotification: false,
      value: 'New',
    },
    rightIcon: <MdOutlineKeyboardArrowDown />,
    leftIcon: <MdOutlineKeyboardArrowRight />,
    subItems: [
      {
        title: 'About Us',
        link: '/about-us',
      },
      {
        title: 'Counters',
        link: '/counters',
      },
      {
        title: 'Blog',
        link: '/blog',
      },
      {
        title: 'Chat',
        link: '/chat',
      },
      {
        title: 'Contacts',
        link: '/contacts',
      },
      {
        title: 'Ecommerce',
        link: '/ecommerce',
      },
      {
        title: 'Add Products',
        link: '/add-products',
      },
      {
        title: 'Cart',
        link: '/cart',
      },
      {
        title: 'Checkout',
        link: '/checkout',
      },
      {
        title: 'Edit Products',
        link: '/edit-products',
      },
      {
        title: 'Order Details',
        link: '/order-details',
      },
      {
        title: 'Order',
        link: '/order',
      },
    ],
  },
};

export const headerItems = {
  search: {
    icon: <IoSearchOutline />,
    type: 'iconOnly',
  },
  globe: {
    icon: <IoGlobeOutline />,
    type: 'iconWithText',
    text: 'EN',
  },
  notification: {
    icon: <IoNotificationsOutline />,
    type: 'iconWithNotification',
    notificationValue: '4',
  },
  cart: {
    icon: <IoCartOutline />,
    type: 'iconWithNotification',
    notificationValue: '3',
  },
  theme: {
    icon: <MdOutlineNightlight />,
    type: 'iconOnly',
  },
  menu: {
    icon: <CgMenuGridR />,
    type: 'iconOnly',
  },
  fullscreen: {
    icon: <GoScreenFull />,
    type: 'iconOnly',
  },
};
