import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const toTheNewContributorAdded = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario theRegisteredEmployee={colaborador => toTheNewContributorAdded(colaborador)} />
    </div>
  );
}

export default App;
