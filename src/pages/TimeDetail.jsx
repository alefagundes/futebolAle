import style from './TimeDetail.module.css'

import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { dataMok } from './Home.stub'

const TimeDetail = () => {
  const url = import.meta.env.VITE_URL
  const token = import.meta.env.VITE_TOKEN
  const { id } = useParams()
  const [times, setTimes] = useState([])

  useEffect(() => {
    const reqTimes = async () => {
      const req = await fetch(`${url}/campeonatos/10/tabela`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const res = await req.json()
      setTimes(res)
    }
    //reqTimes()
    setTimes(dataMok)
  }, [id])

  console.log(times)

  const teamFinal = times.filter((t) => t.time.time_id == id)
  console.log(teamFinal[0])

  return (
    <div className={style.view}>
      {!teamFinal && <p>Carregando</p>}
      {teamFinal &&
        teamFinal.map((t) => (
          <>
            <h1>{t.time.nome_popular}</h1>
            <img src={t.time.escudo} alt={t.time.nome_popular} />
            <div className={style.containerDados}>
              <div>
                <h3>
                  Posicao n: <span>{t.posicao}</span>
                </h3>
                <h3>
                  Aproveitamento: <span>{t.aproveitamento}</span>
                </h3>
                <h3>
                  Derrotas: <span>{t.derrotas}</span>
                </h3>
                <h3>
                  Vitorias: <span>{t.vitorias}</span>
                </h3>
              </div>
              <div>
                <h3>
                  Gols contra: <span>{t.gols_contra}</span>
                </h3>
                <h3>
                  Gols pro: <span>{t.gols_pro}</span>
                </h3>
                <h3>
                  Sigla: <span>{t.time.sigla}</span>
                </h3>
              </div>
            </div>
            <Link to="/" className={style.back}>
              Voltar
            </Link>
          </>
        ))}
    </div>
  )
}

export default TimeDetail
