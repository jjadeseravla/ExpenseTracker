import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionList() {

  const { transactions } = useContext(GlobalContext); //bringing this in from our global state/context
  //then below we are mapping through this and for each one rendering a transaction component and pass in a prop

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
