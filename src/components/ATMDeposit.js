const ATMDeposit = ({ onChange, transactionState }) => {
  return (
    <label className="label huge">
      <input type="number" onChange={onChange} value={transactionState} />
      <input type="submit" value="Submit" />
    </label>
  );
};

export default ATMDeposit;
