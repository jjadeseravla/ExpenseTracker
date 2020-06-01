import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

function Balance() {

  const { transactions } = useContext(GlobalContext);

  //each transaction is an object with an id, text and amount.  here we are mapping through to get all amounts into an array
  const amounts = transactions.map(transaction => transaction.amount);
  // to get the total we use reduce to add them all together and toFixed to get 2 decimal places
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>£{numberWithCommas(total)}</h1>
    </>
  );
}

export default Balance;
