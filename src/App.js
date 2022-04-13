

import { useState} from 'react'
import './index.css'

const App = () => {

  const [numero, setNumero] = useState(0);

  const handleMinus = () => {
    setNumero(numero - 1);
  }

  const handlePlus = () => {
    setNumero(numero + 1);
  }

  return (

      <div className='container'>
      <button onClick={handleMinus}>-</button>
      <div className='numero'>{numero}</div>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

export default App;
