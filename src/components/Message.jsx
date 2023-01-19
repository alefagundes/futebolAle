import style from './Message.module.css'

export const Message = ({ msg, type }) => {
  return (
    <div className={`${style.message} ${style[`${type}`]}`}>
      <p>{msg}</p>
    </div>
  )
}
