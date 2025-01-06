import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, { ...colaborador, id: uuidv4(), favorito: false }])
  }

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const mudarCorTime = (cor, id) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }

      return time
    }))
  }

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  const favoritarColaborador = (id) => {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        return { ...colaborador, favorito: !colaborador.favorito }
      }

      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {times.map(time =>
        <Time
          key={time.id}
          id={time.id}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorTime}
          aoFavoritar={favoritarColaborador}
        />
      )}

      <Rodape />
    </div>
  )
}

export default App;