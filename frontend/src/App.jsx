import { useState } from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const [response, setResponse] = useState('');

  const handleTest = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/mvc'); // ajuste a URL se necessário
      setResponse(res.data.response);
    } catch (error) {
      console.error('erro',error);
      setResponse('Erro na requisição');
    }
  };
  return (
    <>
      <button onClick={handleTest}>Testando</button>
      {response && <p>{response}</p>}
    </>
  )
}

export default App
