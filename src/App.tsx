import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Transaction, getAllTransactions } from './endpoints/GetTransactions';
import TransactionItem from './components/Transaction';

function App() {
  const [transactionList, setTransactionList] = useState<Transaction[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      const { data: transactions } = await getAllTransactions();
      console.log(transactions)
      setTransactionList(transactions);
    }
    fetchData();
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {transactionList.map(({ id, date, description, amount }) => <TransactionItem description={description} id={id} amount={amount} date={date} />)}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
