import { useState } from 'react';
import axios from 'axios';  // Import Axios
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Update acessar function to take a URL as a parameter
async function acessar(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data); // You can handle the response data here
  } catch (error) {
    console.error('Error accessing the URL:', error);
  }
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        {/* Attach acessar function to onClick event */}
        <button onClick={() => acessar('http://example.com/entrar')}>
          Entrar {count}
        </button>
        <button onClick={() => acessar('http://example.com/sair')}>
          SAIR {count}
        </button>
      </div>
    </>
  );
}

export default App;
