import style from './CardRodadas.module.css'

const CardRodadas = ({ rod, fase }) => {
  return (
    <>
      {rod.map((e) => (
        <div key={e.partida_id} className={style.card}>
          <p className={style.fase}>{fase}</p>
          <h4>
            {e.time_mandante.nome_popular} X {e.time_visitante.nome_popular}
          </h4>
          <p>
            <span>Local:</span>
            {e.estadio.nome_popular}
          </p>
          <p>
            <span>Horário:</span>
            {e.hora_realizacao}
          </p>
          <p>
            <span>Res:</span>
            {e.placar}
          </p>
          <div className={style.confronto}>
            <img
              src={e.time_mandante.escudo}
              alt={e.time_mandante.nome_popular}
            />
            <h2>X</h2>
            <img
              src={e.time_visitante.escudo}
              alt={e.time_visitante.nome_popular}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default CardRodadas
