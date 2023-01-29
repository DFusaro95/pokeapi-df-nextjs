
import { useRouter } from 'next/router';
import React from 'react';
import variable from '../../styles/variable.module.scss'

const FormHome = () => {
  const router = useRouter()
  const handleClick = e => {
    e.preventDefault()
    router.push('/pokedex')
  }

  return (
    <form className={variable.form}>
      <input
      className={variable.startInput} 
      type="text" 
      placeholder='Enter Your Name..'/>
      <button type='button' className={variable.startBtn} onClick={handleClick} >Gotta catch'em all</button>
    </form>
  )
}

export default FormHome