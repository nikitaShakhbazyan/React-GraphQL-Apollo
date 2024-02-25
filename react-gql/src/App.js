import './App.css';
import Character from './pages/Character';
import CharactersList from './pages/CharactersList';
import {Routes,Route} from 'react-router-dom'

// https://rickandmortyapi.com/graphql

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/List' element={<CharactersList/>} />
        <Route path='/List/:id' element={<Character/>} />
      </Routes>

    </div>
  );
}

export default App;
