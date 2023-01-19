import { useState } from 'react'
import style from './Search.module.css'
import { FaFutbol } from 'react-icons/fa'
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from 'react-icons/bs'
import { MdOutlineSettingsBackupRestore } from 'react-icons/md'
import { Message } from './Message'

const Search = ({ setRodadas, allrod }) => {
  const [value, setValue] = useState('')
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    filterByNameRod(value)
  }
  const handleAmount = () => {
    let arr = []
    if (counter >= 38) {
      return
    } else {
      if (counter < 9) {
        arr = allrod.filter(
          (e) =>
            e[0].substring(0, 1) == counter + 1 && e[0].substring(1, 2) == 'a'
        )
        setRodadas(arr)
      } else {
        arr = allrod.filter(
          (e) =>
            e[0].substring(0, 2) == counter + 1 && e[0].substring(2, 3) == 'a'
        )
        setRodadas(arr)
      }
    }
    setCounter((prev) => prev + 1)
  }

  const handleDecrease = () => {
    console.log(counter)
    let arr = []
    if (counter - 1 === 0) {
      setCounter(0)
      setRodadas(allrod)
      return
    } else {
      if (counter <= 10) {
        arr = allrod.filter(
          (e) =>
            e[0].substring(0, 1) == counter - 1 && e[0].substring(1, 2) == 'a'
        )
        setRodadas(arr)
      } else {
        arr = allrod.filter(
          (e) =>
            e[0].substring(0, 2) == counter - 1 && e[0].substring(2, 3) == 'a'
        )
        setRodadas(arr)
      }
    }
    setCounter((prev) => prev - 1)
  }
  const backtoAll = () => {
    setRodadas(allrod)
    setCounter(0)
  }

  const filterByNameRod = (value) => {
    const arr = allrod.filter((e) => e[0] === value.toLowerCase())
    if (arr.length > 0) {
      setRodadas(arr)
      setMessage(`Resultados para: ${value}`)
      setType('sucess')
      setTimeout(() => {
        setMessage('')
      }, 3000)
    } else {
      setMessage(`Sem resultados para: ${value}, confira o ex: 1a-rodada`)
      setType('error')
      setTimeout(() => {
        setMessage('')
      }, 3000)
    }
  }

  return (
    <>
      {message.length > 0 && <Message msg={message} type={type} />}
      <div className={style.alignFormBack}>
        <form onSubmit={handleSubmit} className={style.formulario}>
          <input
            type="text"
            name="search"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Busque por Ex: 1a-rodada"
            autoComplete="off"
          />
          <button type="submit">
            <FaFutbol />
          </button>
        </form>
        <button onClick={backtoAll} className={style.back}>
          <MdOutlineSettingsBackupRestore />
        </button>
      </div>
      <div className={style.mostradores}>
        <p>Rodada n: {counter}</p>
        <div className={style.pagination}>
          <button onClick={() => handleAmount()} className={style.btnAmount}>
            <BsFillArrowRightSquareFill />
          </button>
          <button
            onClick={() => handleDecrease()}
            className={style.btnDecrease}
          >
            <BsFillArrowLeftSquareFill />
          </button>
          <p>N total de rodadas: 39</p>
        </div>
      </div>
    </>
  )
}

export default Search
