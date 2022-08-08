import { useState } from "react";
import ATMDeposit from "./ATMDeposit";
const Account = () => {
  // To-do
  // Use React state to track Total Account Balance and Total Transaction Amount
  // Make ATMDeposit and controlled component for user Amount input

  let totalState = 0; // Account total at Bank
  let transactionState = 0;

  let status = `Account Balance: $${totalState}`;

  const handleChange = (event) => {
    console.log(`handleChange ${Number(event.target.value)}`);
    transactionState = Number(event.target.value);

    console.log(`Transaction state is now: ${transactionState}`);
  };

  // Notice how state is being set at the parent level, i.e. ATMDeposit
  // and not at the child level
  const handleSubmit = (e) => {
    status = `Account Balance $ ${totalState}`;
    document.getElementById("total").innerHTML = status;
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2 id="total">{status}</h2>
      {/* Passing handleChange function as prop */}
      {/* How can we make this a 'controlled' component? */}
      <ATMDeposit onChange={handleChange}>Deposit</ATMDeposit>
    </form>
  );
};

export default Account;
