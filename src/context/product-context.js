import { createContext, useContext, useMemo, useReducer } from 'react';
import { initialState, product_reducer } from '../reducers/product-reducer';

const ProductContext = createContext();
ProductContext.displayName = 'ProductContext';

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(product_reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
