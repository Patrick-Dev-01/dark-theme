import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import { Parcelas, Parcela } from './styles/styles';
import './styles/styles.ts';

const App = () => {

  const [parcelas, setParcelas] = useState([
    {
      id: 1,
      value: 100,
      vencimento: "23/10/2020"
    },
    {
      id: 2,
      value: 200,
      vencimento: "23/10/2020"
    },
    {
      id: 3,
      value: 300,
      vencimento: "24/10/2020"
    },

    {
      id: 4,
      value: 400,
      vencimento: "25/10/2020"
    },

     {
      id: 5,
      value: 500,
      vencimento: "26/10/2020"
    },
  ])

  const [selecionados, setSelecionados] = useState<number[]>([]);
  const [selected, setSelected] = useState(false);
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  function handleSelecionados(index: number){
    const alreadySelected = selecionados.findIndex(id => id === index);

    if(alreadySelected >= 0){
      const filteredSelecionados = selecionados.filter(id => id !== index)
      setSelecionados(filteredSelecionados)
      console.log('ja foi selecionado')
    }

    else{
      setSelecionados([...selecionados, index]);
      console.log('não foi selecionado')
    }
  }

  function showSelecionados(){
    console.log(selecionados);
  }

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>

        <Parcelas>
        {parcelas.map((parcela) => (
          <Parcela key={parcela.id} onClick={() => handleSelecionados(parcela.id)} selected={selected}>
            <div>
              <p>Valor: </p>
              <span>{parcela.value}</span>
            </div>

            <div>
              <p>Vencimento: </p>
              <p>{parcela.vencimento}</p>
            </div>
          </Parcela>
        ))}
        <button type="button" onClick={showSelecionados}>Mostrar selecionados</button>
        </Parcelas>
      </div>
    </ThemeProvider>
  );
}

export default App;
