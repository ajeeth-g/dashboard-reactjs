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

export const orderData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/50',
    name: 'Orange Watch Series 4',
    dialSize: 'Dial Size: 44mm',
    color: ' Color: Metallic Black',
    trackingNo: 'SPK1218153635',
    price: 1249,
    quantity: 1,
    totalPrice: 1249,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/50',
    name: 'DapZem & Co Sweat Shirt',
    dialSize: 'Dial Size: 44mm',
    color: ' Color: Metallic Black',
    trackingNo: 'SPK1218153635',
    price: 499,
    quantity: 2,
    totalPrice: 998,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/50',
    name: 'Denim Corporation Sweat Shirt',
    dialSize: 'Dial Size: 44mm',
    color: ' Color: Metallic Black',
    trackingNo: 'SPK1218153635',
    price: 799,
    quantity: 1,
    totalPrice: 799,
  },
];

export const userDetails = [
  {
    name: 'Ajeeth',
    email: 'ajeeth@gmail.com',
    isPrimary: true,
  },
];

export const personalDetails = [
  {
    title: 'Delivery Address:',
    info: [
      { label: 'Landmark', value: 'MIG-1-11' },
      { label: 'Street', value: 'Monroe Street' },
      { label: 'City', value: 'Georgertown' },
      { label: 'State', value: 'Washington D.C' },
      { label: 'Country', value: 'USA' },
      { label: ' Zipcode', value: '641602' },
    ],
  },
  {
    title: 'Send Updates to:',
    info: [
      { label: 'Phone', value: '55551-0123-1210' },
      { label: 'Email', value: 'ajeeth@gmail.com' },
    ],
  },
  {
    title: 'Order Summary',
    info: [
      { label: 'Ordered Date', value: '24, Nov 2022' },
      { label: 'Ordered Time', value: '11:47AM' },
      { label: 'Payment interface', value: 'UPI' },
    ],
  },
];
