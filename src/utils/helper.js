/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-undef */
/* eslint-disable no-var */
/* eslint-disable no-unreachable-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import { GiRoundStar } from 'react-icons/gi';
import { LOG_OUT } from '../reducers/actions';
import { messageNotifications } from './constant';

const BASE_URL = 'https://fakestoreapi.com/';

export const trimmingText = (text, margin = 15) => (text.length > margin ? `${text.substr(0, margin)}...` : text);

export const totalCarts = (carts) => carts.reduce((acc, cur) => acc + cur.quantity, 0);

export const createRatingStars = (rate) => {
  const rating = parseInt(rate, 10);
  const starIcons = Array(5)
    .fill(null)
    .map((_, index) => (rating > index ? (
      // eslint-disable-next-line react/no-array-index-key
      <GiRoundStar key={index} />
    ) : (
      // eslint-disable-next-line react/no-array-index-key
      <GiRoundStar style={{ color: '#484543' }} key={index} />
    )));
  return starIcons;
};

export const didUserEnterValidOption = (filter) => {
  const { category, min, max } = filter;
  const emptyRange = max === '' && min === '';
  const isThereInput = !(
    (min === '' && max !== '')
    || (min !== '' && max === '')
  );

  return (
    (!emptyRange && isThereInput)
    || (category && !(emptyRange || !emptyRange))
    || (category && emptyRange)
  );
};

export const getUserFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const savedData = localStorage.getItem('user');
    const initialValue = JSON.parse(savedData);
    return initialValue || null;
  }

  return null;
};

export const getData = async (query) => {
  try {
    const res = await axios(`${BASE_URL}${query}`);
    const data = await res.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUser = async (type, method = 'get', data = []) => {
  const url = {
    admin: '/api/admin',
    user: 'https://fakestoreapi.com/auth/login',
  };

  try {
    const res = await axios({ url: url[type], method, data });
    const user = await res.data;
    return user;
  } catch (_) {
    return null;
  }
};

export const logout = (dispatch, router, addToast) => {
  dispatch({ type: LOG_OUT });
  router.replace('/');
  addToast(
    messageNotifications.LOGOUT_SUCCESS.message,
    messageNotifications.LOGOUT_SUCCESS.status,
  );
};

export const storePathValues = () => {
  const storage = globalThis?.sessionStorage;
  if (!storage) return;

  // Set the previous path as the value of the current path.
  const prevPath = storage.getItem('currentPath');
  storage.setItem('prevPath', prevPath);

  // Set the current path value by looking at the browser's location object.
  storage.setItem('currentPath', globalThis.location.pathname);
};

export const getPreviousPath = () => {
  const previousPath = globalThis?.sessionStorage.prevPath.toString();
  const detailPathRegex = /products\/([0-9])+/g;
  const isFromProductPath = previousPath.match(detailPathRegex);

  return { isFromProductPath, previousPath };
};

export const hasObjectValue = (value) => {
  // eslint-disable-next-line vars-on-top
  for (var i in value) return true;
  return false;
};

export const formatUrl = (query) => {
  let url = 'products';
  let finalQuery = query;

  if (hasObjectValue(finalQuery)) {
    finalQuery = moveCategoryKeyToFront(finalQuery);

    const keys = Object.keys(finalQuery);
    const values = Object.values(finalQuery);

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < keys.length; index++) {
      const isSpecialCases = keys[index] !== 'category';
      // eslint-disable-next-line no-nested-ternary
      const firstSymbol = isSpecialCases
        ? url.includes('?')
          ? '&'
          : '?'
        : '/';
      const secondSymbol = isSpecialCases ? '=' : '/';
      url += `${firstSymbol}${keys[index]}${secondSymbol}${values[index]}`;
    }
  }

  return url;
};

const moveCategoryKeyToFront = (object) => {
  let fixedKey = object;
  if (fixedKey?.category) {
    const { category } = fixedKey;
    delete fixedKey.category;

    fixedKey = { category, ...fixedKey };
  }
  return fixedKey;
};
