import { useState } from 'react';
import './App.css';
import Temperature from './components/Temperature';

const api = {
  key: '647d62fd8ff8eb1b93aa0e3ab541f3db',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [query, setQuery] = useState('');
  const [tempo, setTempo] =useState({});

  const search = async evt => {
    if (evt.key === 'Enter') {
      const response = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
      const tempoJson = await response.json();
      setTempo(tempoJson);
      setQuery('');
    }
  }

  return (
    <>
    <div className={tempo.main ? ((tempo.main.temp > 16) ? "app warm" : "app") : "app"}>
      <main>
        <div className='search-box'>
          <input 
          type='text'
          className='search-bar'
          placeholder='Pesquisar...' 
          onKeyPress={search}
          onChange={e => setQuery(e.target.value)}
          />
          
        </div>
        {(typeof tempo.main != "undefined") && (
        <Temperature
        city = {tempo.name}
        country ={tempo.sys.country}
        temperature={tempo.main.temp}
        weather={tempo.weather[0].main}
        />
        )}
      </main>
    </div>
    </>
  );
}

export default App;
