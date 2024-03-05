import React, { createContext, useReducer, Dispatch, ReactNode, ReactElement } from 'react';
import { productReducer, shoppingCartReducer, ProductActions, ShoppingCartActions } from './reducer';

type ProductType = {
  id: number;
  name: string;
  price: number;
}

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
}

const initialState = {
  products: [],
  shoppingCart: 0,
}

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions | ShoppingCartActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = ({ products, shoppingCart }: InitialStateType, action: ProductActions | ShoppingCartActions) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
});


interface AppProviderProps { children: ReactNode}
const AppProvider = ({ children }: AppProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext };