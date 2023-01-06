import style from './Campeonato.module.css'
import { useState, useEffect } from 'react'

//dataMok api
import { dataMok } from './Campeonato.sub'
import CardCampeonato from '../components/CardCampeonato'

const Campeonato = ({ url }) => {
  const token = import.meta.env.VITE_TOKEN
  const [data, setData] = useState([])

  useEffect(() => {
    const reqData = async () => {
      const req = await fetch(`${url}/campeonatos/10`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const res = await req.json()
      setData(res)
    }
    //reqData()
    setData(dataMok)
  }, [])

  return (
    <div>
      {!data && <p>CArregando...</p>}
      {data && (
        <div className={style.container}>
          <CardCampeonato obj={data} />
        </div>
      )}
    </div>
  )
}

export default Campeonato
