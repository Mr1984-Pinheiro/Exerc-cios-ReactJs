import React, { useState} from "react";

const App = () => {

  const [name, setName] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName ( event.target.value);
  }

  const handleSobrenome = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSobrenome ( event.target.value);
  }

  const handleIdade = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIdade ( event.target.value );
  }


  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleName} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={sobrenome} onChange={handleSobrenome} />
      </div>

      <div>
        Idade:
        <input type="text" value={idade} onChange={handleIdade} />
      </div>

      <hr/>

      Olá {name} {sobrenome}, tudo bem?<br/>
      Você tem {idade} anos.
    </div>
  );
}

export default App;