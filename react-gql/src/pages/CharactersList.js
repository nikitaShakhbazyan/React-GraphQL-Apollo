import React from 'react'
import "./CharactersList.css"
import { useCharacters } from '../hooks/useCharacters'
import {Link} from 'react-router-dom'


export default function CharactersList() {

    const {error,loading,data} = useCharacters()

    if(loading) {return <h1>Loading...</h1>}
    
    if(error) {return <h1>Error!!!</h1>}

  return (
    <div className='CharactersList'>
        {data.characters.results.map((character) => {
            return(
            <Link to={`${character.id}`}>
                <img src={character.image} alt={character.name + "'s image"}/>
                <h2>{character.name}</h2>
            </Link>
            );
        })}
    </div>
  )
}
