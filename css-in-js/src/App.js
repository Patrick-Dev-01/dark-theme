import React from 'react';
import './App.css';

import { Title, TitleSmall } from './styles';

function App() {
  return (
    <div className="App">
      {/* passando um parametro */}
      <Title fontSize={20}>
        Hello World
        <span>texto menor</span>
      </Title>

      <TitleSmall>Menor</TitleSmall>
    </div>
  );
}

export default App;
