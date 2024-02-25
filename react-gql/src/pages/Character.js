import React from 'react'
import { useCharacter } from '../hooks/useCharacter'
import './Character.css'
import {useParams} from 'react-router'

const Character = () => {
  const {id} = useParams()

  const {error,data,loading} = useCharacter(id)

  if(error){
    return  <h1>Errorr!</h1>
  }
  
  if(loading){
    return <h1>Loading...</h1>
  }

  console.log({data,error,loading})
  return <div className='Character'>
      <img src={data.character.image} alt={data.character.name} width={750} height={750} />
      <div className='CharacterContent'>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className='CharacterEpisode'>
          {data.character.episode.map((episode) =>{
            return <div>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          })}
        </div>
      </div>
    </div>

}

export default Character