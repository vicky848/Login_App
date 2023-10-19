import './index.css'

// Write your code here

const Message = props => {
  const {isLoggedIn} = props

  const message = isLoggedIn ? 'Welcome User' : 'Please Login'

  return <h1 className="heading">{message}</h1>
}
export default Message
