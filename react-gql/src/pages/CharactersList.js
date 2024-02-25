import React from 'react'
import { useQuery,gql } from '@apollo/client'
import "./CharactersList.css"

const GET_CHARACTERS = gql`
query {
  characters{
    results{
      id
      name
      image
      type
    }
  }
}`

export default function CharactersList() {

    const {loading,error,data} = useQuery(GET_CHARACTERS)
    console.log({loading,error,data})

    if(loading) {return <h1>Loading...</h1>}
    
    if(error) {return <h1>Error!!!</h1>}

  return (
    <div className='CharactersList'>
        {data.characters.results.map(character => {
            return <div>
                <img src={character.image} alt={character.name + " image"}/>
                <h2>{character.name}</h2>
            </div>
        })}
    </div>
  )
}
