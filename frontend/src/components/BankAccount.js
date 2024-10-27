import React, { useState } from 'react';

const BankAccount = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [transactionName, setTransactionName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (transactionName && transactionAmount && transactionDate) {
      const newTransaction = {
        name: transactionName,
        amount: `$${transactionAmount}`,
        date: transactionDate,
        status: 'Deposited', // or 'Withdrawn' based on your logic
      };

      setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

      // Reset form fields
      setTransactionName('');
      setTransactionAmount('');
      setTransactionDate('');
    }
  };

  return (
    <div className="bg-indigo-950 text-white p-5 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold">Add Bank Account Details</h2>
      <form onSubmit={handleAddTransaction} className="flex flex-col space-y-4 mb-5">
        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          className="p-2 rounded-md bg-gray-800 placeholder-gray-400 outline-none"
        />
        <input
          type="text"
          placeholder="Transaction Name"
          value={transactionName}
          onChange={(e) => setTransactionName(e.target.value)}
          className="p-2 rounded-md bg-gray-800 placeholder-gray-400 outline-none"
        />
        <input
          type="text"
          placeholder="Amount"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
          className="p-2 rounded-md bg-gray-800 placeholder-gray-400 outline-none"
        />
        <input
          type="date"
          value={transactionDate}
          onChange={(e) => setTransactionDate(e.target.value)}
          className="p-2 rounded-md bg-gray-800 outline-none"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded-md">
          Add Transaction
        </button>
      </form>

      {/* Transaction Table */}
      <h2 className="text-lg font-semibold">Transaction History</h2>
      <table className="min-w-full bg-gray-800 rounded-2xl mt-4">
        <thead>
          <tr className="bg-indigo-700 p-2  text-white">
            <th className="p-2">Transaction Name</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="p-2">{transaction.name}</td>
              <td className="p-2">{transaction.amount}</td>
              <td className="p-2">{transaction.date}</td>
              <td className="p-2">{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankAccount;
