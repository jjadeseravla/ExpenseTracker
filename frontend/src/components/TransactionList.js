import React, {useContext, useEffect} from 'react';
//if you make any http request from a component, need to use useEffect
//getTransactions is an async call, so need to do it in useEffect hook
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionList() {

  const { transactions, getTransactions } = useContext(GlobalContext); //bringing this in from our global state/context
  //then below we are mapping through this and for each one rendering a transaction component and pass in a prop

  useEffect(() => {
    getTransactions();
    //this may fire a warning in console
  }, []); //put empty array here or will run an infinite loop

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
     </ul>
    </div>
  );
}

export default TransactionList;
