export default (state, action) => {
  switch(action.type) {
    case: 'GET_TRANSACTIONS':
    return {
      ...state,
      loading: false,
      transactions: action.payload
    }
    case 'DELETE_TRANSACTION':
    return {
      ...state,
      //send all transactions down apart from the one that was deleted
      transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
    }
    case 'ADD_TRANSACTION':
    return {
      ...state,
      transactions: [...state.transactions, action.payload]
    }
  case 'TRANSACTION_ERROR':
    return {
      ...state,
      error: action.payload
    }

    default:
    return state;
  }
}
//how we specify app state changes in response to certain actions to our store/GlobalContext

//reducer is just a way to change your state and send it down to your component
//by creating a new state and sending it down, not just changing it

//we are dispatching an action with a type and payload, type is DELETE_TRANSACTION
