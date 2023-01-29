import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const InputSearch = () => {

  const router = useRouter()

  const submit = e => {
    e.preventDefault()
    router.push(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <form onSubmit={submit}>
      <input 
      id="search"
      type="text"
      placeholder="Search Pokemon..." />
      <button 
      type='button'
      >
       <Image
       alt='POKEBALL-BUTTON'
       src='/IMG/RTpokeballBW.png'
       quality={50}
       width={50}
       height={50}
       />
      </button>
    </form>
  )
}

export default InputSearch