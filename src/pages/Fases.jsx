import style from './Fases.module.css'
import { rodadasfake } from './Fases.stub.jsx'

import { useState, useEffect } from 'react'

const Fases = ({ url }) => {
  const token = import.meta.env.VITE_TOKEN

  const [rodadas, setRodadas] = useState([])

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
    setRodadas(rodadasfake.partidas)
  }, [])

  console.log(Object.entries(rodadas))

  return (
    <div>
      <h1>Fases Brasileirão 2022</h1>
      {rodadas.length === 0 && <p>Carregando...</p>}
      {rodadas &&
        Object.entries(rodadas).map((value) => (
          <div key={value[0]}>
            <p>{value[0]}</p>
            {value[1].map((e) => (
              <p key={e.partida_id}>{e.placar}</p>
            ))}
          </div>
        ))}
    </div>
  )
}

export default Fases
