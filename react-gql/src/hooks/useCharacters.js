import { useQuery,gql } from '@apollo/client'


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

export const useCharacters = () => {
    const {loading,error,data} = useQuery(GET_CHARACTERS)

    return {
        error,
        data,loading
    }
}