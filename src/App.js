import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Team';

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
      <Time nome='Programação' />
      <Time nome='Frontend' />
      <Time nome='Data Science' />
    </div>
  );
}

export default App;
