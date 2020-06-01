//instead of passing props, this file allows the initialState to be used in any component cos
//its now global

import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//initial useState
const initialState = {
  transactions: [
    // { id: 1, text: 'Flower', amount: -20 },
    // { id: 2, text: 'Salary', amount: 300 },
    // { id: 3, text: 'Book', amount: -10 },
    // { id: 4, text: 'Camera', amount: 150 }
  ],
  error: null,
  loading: true
}

//create createContext
export const GlobalContext = createContext(initialState);

//provers component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions (actions make a call to the reducer)
  async function getTransactions() {
    try {
      //dont need localhost:5000 here as added the proxy already
      const res = await axios.get('/api/v1/transactions');
      //res.data gives entire tranactions object from backend, but only need data object inside that
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      })
    } catch(err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id //payload is any data we are going to send to it, eg id
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      await axios.post(`/api/v1/transactions`, transaction, config);
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

//to access any of these in the components
  return (<GlobalContext.Provider value={{ //to use state (from the reducer), need to pass it down to the provider:
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    getTransactions,
    deleteTransaction,
    addTransaction,
  }}>
    {children}
  </GlobalContext.Provider>);
}
