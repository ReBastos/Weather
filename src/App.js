import { useState } from 'react';
import './App.css';
import Temperature from './components/Temperature';

const api = {
  key: 'aca47f15695cd58e099a5d0aa14fa926',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [query, setQuery] = useState('');
  const [tempo, setTempo] =useState({});

  const search = async evt => {
    if (evt.key == 'Enter') {
      const response = fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
      const tempoJson = await response.json();
      setTempo(tempoJson);
      setQuery('');
    }
  }

  return (
    <>
    <div className='app'>
      <main>
        <div className='search-box'>
          <input 
          type='text'
          className='search-bar'
          placeholder='Pesquisar...' 
          onKeyPress={search}
          />
          
        </div>
        <Temperature
        cidade = {tempo.name}
        pais={tempo.sys.country}
        temperature={tempo.main.temp}
        weather={tempo.weather[0].main}
        />
      </main>
    </div>
    </>
  );
}

export default App;
