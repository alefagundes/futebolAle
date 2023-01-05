import style from './Home.module.css'
//impor data moke api
import { dataMok } from './Home.stub.jsx'

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
    //reqData()
    setData(dataMok)
  }, [])

  console.log(data)

  return (
    <div className={style.fundo}>
      <h1>Campeonato Brasileiro 2022</h1>
      <div className={style.container}>
        {!data && <p>Carregando...</p>}
        {data.length > 0 &&
          data.map((d) => <CardTime key={d.posicao} time={d} />)}
      </div>
    </div>
  )
}

export default Home
