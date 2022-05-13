import { RiComputerLine } from 'react-icons/ri';
import {
  GiTruck,
  GiRibbonMedal,
  GiAlliedStar,
  GiBigDiamondRing,
  GiLargeDress,
  GiClothes,
} from 'react-icons/gi';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const servicesList = [
  {
    text: 'Best Quality',
    Icon: <GiAlliedStar className="block w-full m-auto text-6xl md:text-7xl" />,
  },
  {
    text: 'Free Shipping',
    Icon: <GiTruck className="block w-full m-auto text-6xl md:text-7xl" />,
  },
  {
    text: 'Warranty',
    Icon: (
      <GiRibbonMedal className="block w-full m-auto text-6xl md:text-7xl" />
    ),
  },
];

export const iconlists = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/hacktiv8id/',
    icon: <FaFacebook />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/hacktiv8id/',
    icon: <FaInstagram />,
  },
  {
    name: 'Twitter',
    link: 'https://www.twitter.com/hacktiv8id',
    icon: <FaTwitter />,
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/c/hacktiv8',
    icon: <FaYoutube />,
  },
];

export const partnerLogos = [
  {
    name: 'Jp Morgan',
    src: '/images/jp-morgan.svg',
  },
  {
    name: 'Oysho',
    src: '/images/oysho.svg',
  },
  {
    name: 'Pull Bear',
    src: '/images/pull-bear.svg',
  },
  {
    name: 'Rosewood',
    src: '/images/rosewood.svg',
  },
];

export const categoriesList = [
  { id: 'jewelery', icon: <GiBigDiamondRing />, params: 'jewelery' },
  { id: 'electronics', icon: <RiComputerLine />, params: 'electronics' },
  { id: 'mens-clothing', icon: <GiClothes />, params: "men's clothing" },
  { id: 'womens-clothing', icon: <GiLargeDress />, params: "women's clothing" },
];

export const navbarLinks = [
  { text: 'Home', link: '/' },
  { text: 'Products', link: '/products' },
  { text: 'About', link: '/about' },
  { text: 'History', link: '/history' },
  { text: 'Login', link: '/login' },
];

export const profileLinks = [
  { text: 'My Cart', link: '/checkout' },
  { text: 'Logout', link: '/login' },
];

export const messageNotifications = {
  LOGIN_SUCCESS: {
    message: (level) => `Login successfully, ${level} level.`,
    status: { appearance: 'success' },
  },
  LOGIN_FAILED: {
    message: 'Login Failed. Please input valid username and password',
    status: { appearance: 'error' },
  },
  LOGIN_FIRST: {
    message: 'Sorry, you should login first before doing that actions.',
    status: { appearance: 'warning' },
  },
  ALREADY_LOGIN: {
    message:
      'Sorry, you have logged in. Log out first if you want to log in with another account.',
    status: { appearance: 'warning' },
  },
  LOGOUT_SUCCESS: {
    message: 'Logout successfully.',
    status: { appearance: 'success' },
  },
  UPDATE_STOCK_SUCCESS: {
    message: 'Stock updated successfully.',
    status: { appearance: 'success' },
  },
  CART_SUCCESS: {
    message: 'Item has been successfully added.',
    status: { appearance: 'success' },
  },
  CART_FAILED: {
    message: 'Sorry, out of stock.',
    status: { appearance: 'warning' },
  },
  INVALID_FILTER: {
    message: 'Invalid option, please select filters correctly.',
    status: { appearance: 'error' },
  },
};
