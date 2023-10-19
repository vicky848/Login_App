// Write your code here
const Logout = props => {
  const {logout} = props

  return (
    <button type="button" className="button-action" onClick={logout}>
      Logout
    </button>
  )
}
export default Logout
