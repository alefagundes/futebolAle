import style from './CardCampeonato.module.css'

const CardCampeonato = ({ obj: e }) => {
  return (
    <div className={style.card} key={e.campeonato_id}>
      {!e && <p>Carregando</p>}
      <h1>{e.nome} 2022</h1>
      <h2>Nome popular: {e.nome_popular}</h2>
      <h2>Estatus: {e.status}</h2>
      <h2>Tipo: {e.tipo}</h2>
      <h2>Campeonato {e.regiao}</h2>
      <img src={e.logo} alt={e.nome_popular} />
    </div>
  )
}

export default CardCampeonato
