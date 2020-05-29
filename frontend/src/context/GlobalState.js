//instead of passing props, this file allows the initialState to be used in any component cos
//its now global

import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial useState
const initialState = {
  transactions: [
    // { id: 1, text: 'Flower', amount: -20 },
    // { id: 2, text: 'Salary', amount: 300 },
    // { id: 3, text: 'Book', amount: -10 },
    // { id: 4, text: 'Camera', amount: 150 }
  ]
}

//create createContext
export const GlobalContext = createContext(initialState);

//provers component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions (actions make a call to the reducer)
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id //payload is any data we are going to send to it, eg id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{ //to use state (from the reducer), need to pass it down to the provider:
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}
