import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CardPoke = ({ url }) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then( res => setPokemon(res.data))
      .catch( err => console.log(err))
  }, [])

  
  return (
    <article>
      <Link href={`/pokedex/${pokemon?.id}`} >
      <div>
      <header>
        <Image 
          src={pokemon?.sprites.other.home.front_default}
          alt='POKEMON IMAGE'
          width={50}
          height={50}
          quality={50}
        />
      </header>
      <section>
        <div>
        < Image 
          src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} 
          alt="POKEMON FRONT"
          width={50}
          height={50}
          quality={50} 
        />
        <h3>{pokemon?.name}</h3>
        < Image 
          src={pokemon?.sprites.versions["generation-v"]["black-white"].back_default} 
          alt="POKEMON BACK" 
          width={50}
          height={50}
          quality={50}
        />
        </div>
        <ul>
          {
            pokemon?.types.map(type => (
              <li
                key={type.slot}
              >
                {type.type.name}
              </li>
            ))
          }
        </ul>
        <p>Type</p>
      </section>
      <ul >
      {
        pokemon?.stats.map(stat => (
            <li>
              <span>{stat.stat.name}</span>
              <span>{stat.base_stat}</span>
            </li>
        ))
      }
      </ul>
      </div>
      </Link>
    </article>
  )
}

export default CardPoke