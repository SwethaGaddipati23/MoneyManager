import './index.css'

const TransactionItem = props => {
  const {eachItem, deleteTheItem} = props
  const {id, title, amount, type} = eachItem
  const deleteItem = () => {
    deleteTheItem(id)
  }
  return (
    <li className="list-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        data-testid="delete"
        onClick={deleteItem}
      />
    </li>
  )
}
export default TransactionItem
