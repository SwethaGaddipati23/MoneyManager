import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const transactionHistory = []
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    newTransactionHistory: transactionHistory,
    income: 0,
    expenses: 0,
  }

  onChangeInputTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeInputAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeInputType = event => {
    this.setState({type: event.target.value})
  }

  addTransactionItem = event => {
    event.preventDefault()
    const {title, amount, type, income, expenses} = this.state
    const transactionItem = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      newTransactionHistory: [
        ...prevState.newTransactionHistory,
        transactionItem,
      ],
      income: type === 'Income' ? prevState.income + amount : prevState.income,
      expenses:
        type === 'Expenses' ? prevState.expenses + amount : prevState.expenses,
      title: '',
      amount: '',
      type: '',
    }))
  }

  render() {
    const {
      newTransactionHistory,
      title,
      amount,
      type,
      income,
      expenses,
    } = this.state

    return (
      <div>
        <div>
          <h1>Hi Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <MoneyDetails balance={(income, expenses)} />

        <div>
          <form>
            <h1>Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={this.onChangeInputTitle}
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              id="amount"
              type="text"
              value={amount}
              onChange={this.onChangeInputAmount}
            />
            <select onChange={this.onChangeInputType} value={type}>
              {transactionTypeOptions.map(eachItem => (
                <option key={eachItem.optionId}>{eachItem.displayText}</option>
              ))}
            </select>
            <button type="submit" onClick={this.addTransactionItem}>
              Add
            </button>
          </form>
          <div>
            <ul>
              <h1>History</h1>

              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>

              {newTransactionHistory.map(eachItem => (
                <TransactionItem eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
