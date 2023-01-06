import style from './CardTime.module.css'

import { Link } from 'react-router-dom'

const CardTime = ({ time }) => {
  const url = import.meta.env.VITE_URL

  console.log(time)
  return (
    <div className={style.card}>
      <h2>{time.time.nome_popular}</h2>
      <p>Total pontos: {time.pontos}</p>
      <p>Colocação: {time.posicao}</p>
      <img src={time.time.escudo} alt={time.time.nome_popular} />
      <Link to={`/times/${time.time.time_id}`}>Ver mais</Link>
    </div>
  )
}

export default CardTime
