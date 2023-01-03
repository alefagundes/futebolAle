import style from './Home.module.css'

//hooks
import { useState, useEffect } from 'react'
import CardTime from '../components/CardTime'

//token
const token = import.meta.env.VITE_TOKEN
const url = import.meta.env.VITE_URL

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const reqData = async () => {
      const data = await fetch(`${url}/campeonatos/10/tabela`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const res = await data.json()
      setData(res)
    }
    reqData()
  }, [])

  return (
    <div className={style.fundo}>
      <h1>Campeonato Brasileiro 2022</h1>
      <div className={style.container}>
        {!data && <p>Carregando...</p>}
        {data.length > 0 && data.map((d) => <CardTime time={d} />)}
      </div>
    </div>
  )
}

export default Home
