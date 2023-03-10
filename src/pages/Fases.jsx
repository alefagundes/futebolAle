import style from './Fases.module.css'
import { rodadasfake } from './Fases.stub.jsx'

import { useState, useEffect } from 'react'
import CardRodadas from '../components/CardRodadas'
import Search from '../components/Search'

const Fases = ({ url }) => {
  const token = import.meta.env.VITE_TOKEN
  const [rodadas, setRodadas] = useState(Object.entries(rodadasfake.partidas))
  const [allrod, setAllrod] = useState(Object.entries(rodadasfake.partidas))

  useEffect(() => {
    const reqFases = async () => {
      const req = await fetch(`${url}/campeonatos/10/fases/168`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const res = await req.json()
      setRodadas(res.partidas)
    }
    //reqFases()
    //setRodadas(rodadasfake.partidas)
  }, [])

  return (
    <>
      <h1>Confrontos do Brasileirão 2022</h1>
      {rodadas.length === 0 && <p>Carregando...</p>}
      <Search setRodadas={setRodadas} rodadas={rodadas} allrod={allrod} />
      <div className={style.container}>
        {rodadas &&
          rodadas.map((value) => (
            <CardRodadas key={value[0]} rod={value[1]} fase={value[0]} />
          ))}
      </div>
    </>
  )
}

export default Fases
