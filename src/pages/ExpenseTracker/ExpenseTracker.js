
import {useAddTransaction} from "../../Hoocks/useAddTransaction"
import {useState} from "react"
import {useGetTransaction} from "./../../Hoocks/useGetTransaction"

import GetInformactionTraker from "../../Hoocks/GetInformactionTraker"

export function ExpenseTracker() {
const {AddTransaction} = useAddTransaction()
const {getTransactions} = useGetTransaction()
const [description,setDescription] = useState("")
const [transactionAmount,settransactionAmount] = useState(0)
const [transactionType,settransactionType] = useState("expense")
  const {transaction} = useGetTransaction()
  const handlerMandaData =(e)=>{
    e.preventDefault()
    console.log(`click`);
    AddTransaction({
      description,
      transactionAmount,
      transactionType
    })
    console.log(transaction);
  } 

  return (
    <>
    <div classNamee="Expense-tracker">
      <div className="container">
        <h1>Expense Tracker</h1>
        <div className="balance">
          <h3>You Blanca</h3>
          <h2>0.00</h2>
        </div>
        <div className="Summary">
          <div className="income">
            <h4>Income</h4>
            <p>0.00</p>
          </div>
          <div className="expenses">
            <h4>expenses</h4>
            <p>0.00</p>
          </div>
        </div>
        <form className="add-transaction" onSubmit={(e)=>handlerMandaData(e)}> 
          <input type="text" placeholder="descripcion" required onChange={(e)=>setDescription(e.target.value)} />
          <input type="number" placeholder="Amount" required onChange={(e)=>settransactionAmount(e.target.value)}></input>
          <label htmlFor="expense">expense </label>
          <input 
          type="radio" 
          id="expense" 
          value="expense" 
          onChange={(e)=>settransactionType(e.target.value)}
          checked={transactionType ==="expense"}  ></input>
          <label htmlFor="Income">Income </label>
          <input 
          type="radio" 
          id="Income" 
          value="income" 
          onChange={(e)=>settransactionType(e.target.value)}
          checked={transactionType ==="income"}  ></input>

          <button type="submit">Add Tracsaction</button>
        </form>
      </div>
    </div>    
    <div className="transaction">
      <h3>Transaction</h3>
      <ul>
        {transaction.map((transaction)=>{
          const {description,transactionAmount, transactionType} = transaction
          return <li>
            <h4>{transaction.description}</h4>
            <p>${transaction.transactionAmount}. <label>{transaction.transactionType}</label></p>
            
            </li>
        })}
      </ul>
      <h3>Transactions</h3>
      <ul>
              <GetInformactionTraker></GetInformactionTraker>
      </ul>

    </div>
    </>

  )
}

