import React, {useState} from 'react';
// import Hatch from './components/Hatch/Hatch';
import { HatchType, createCalendar } from './helpers';
// // Styles
// import { GlobalStyle, StyledApp } from './App.styles';

const App: React.FC = () => {
  const [hatches, setHatches] = useState<HatchType[]>(createCalendar());

  return (
      <div>
        <h1>hello there!</h1>
      </div>
  );
};

export default App;

