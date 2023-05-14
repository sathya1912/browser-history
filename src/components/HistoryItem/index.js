import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <div>
        <div>
          <p>{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="image" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
