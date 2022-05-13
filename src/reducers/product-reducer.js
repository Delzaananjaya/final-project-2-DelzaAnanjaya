import * as TYPE from './actions';

export const initialState = {
  products: [],
  carts: [],
  history: [],
  stock: new Array(20).fill(20),
  price: -1,
  user: null,
  actions: null,
  isModalOpen: false,
  query: '',
  message: null,
  range: { min: -1, max: -1 },
};

// eslint-disable-next-line camelcase
export const product_reducer = (state, action) => {
  switch (action.type) {
    case TYPE.GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case TYPE.FILTER_PRODUCTS: {
      const filterredProducts = state.products.filter((item) => {
        const regex = new RegExp(action.payload, 'gi');
        return item.title.match(regex);
      });

      const isEmptyProducts = filterredProducts.length === 0 ? '' : filterredProducts;

      return {
        ...state,
        products: isEmptyProducts,
      };
    }
    case TYPE.SET_QUERY: {
      return {
        ...state,
        query: action.payload,
      };
    }
    case TYPE.TOGGLE_MODAL: {
      return {
        ...state,
        isModalOpen: action.payload,
      };
    }
    case TYPE.ADD_CART: {
      const item = action.payload.cart;
      const { quantity } = action.payload;
      const totalCarts = state.carts;

      const hasSameProduct = totalCarts.find((cart) => item.id === cart.id);

      const addQuantity = totalCarts.map((cart) => {
        if (cart.id === item.id) {
          return { ...cart, quantity: quantity + cart.quantity };
        }
        return cart;
      });

      if (hasSameProduct) {
        return {
          ...state,
          carts: [...addQuantity],
        };
      }
      return {
        ...state,
        carts: [...addQuantity, item],
      };
    }
    case TYPE.REMOVE_CART: {
      const totalCarts = state.carts;
      const newCarts = totalCarts.filter((cart) => cart.id !== action.payload);

      return {
        ...state,
        carts: newCarts,
      };
    }
    case TYPE.UPDATE_STOCK: {
      const stockId = action.payload.id;
      const { total } = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.stock[stockId - 1] = parseInt(total, 10);

      return {
        ...state,
      };
    }
    case TYPE.TOGGLE_CART: {
      const productId = action.payload.id;
      const { quantity } = action.payload;
      const totalCarts = state.carts;
      const targettedProduct = totalCarts.find((cart) => productId === cart.id);
      const filterredProduct = totalCarts.filter((cart) => productId !== cart.id);

      return {
        ...state,
        carts: [...filterredProduct, { ...targettedProduct, quantity }].sort((a, b) => a.id - b.id),
      };
    }
    case TYPE.CALCULATE_CART: {
      const totalPrice = state.carts.reduce((total, cart) => {
        const { price, quantity } = cart;
        const result = parseFloat(price * quantity);
        return total + result;
      }, 0);

      return {
        ...state,
        price: totalPrice,
      };
    }
    case TYPE.POST_LOGIN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case TYPE.CHECKOUT: {
      const getCart = (id) => state.carts.find((cart) => cart.id === id);

      const failedAttempts = [];
      const currentStock = state.stock;

      state.carts.forEach((cart) => {
        const { history } = state;
        const currentCart = getCart(cart.id);

        if (cart.quantity <= currentStock[cart.id - 1]) {
          const isItemAlreadySold = history.find((item) => item.id === cart.id);
          currentStock[cart.id - 1] -= cart.quantity;

          if (isItemAlreadySold) {
            const index = history.findIndex((item) => item.id === cart.id);
            const quantity = cart.quantity + isItemAlreadySold.quantity;
            history[index] = { ...isItemAlreadySold, quantity };
          } else {
            history.push({ ...currentCart });
          }
        } else {
          failedAttempts.push({ ...currentCart, isFailed: true });
        }
      });

      return {
        ...state,
        carts: failedAttempts,
      };
    }
    case TYPE.SET_ACTIONS: {
      return {
        ...state,
        isModalOpen: true,
        actions: action.payload,
      };
    }
    case TYPE.LOG_OUT: {
      localStorage.removeItem('user');

      return {
        ...state,
        user: null,
      };
    }
    case TYPE.SET_MESSAGE: {
      return {
        ...state,
        message: action.payload,
      };
    }
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};
