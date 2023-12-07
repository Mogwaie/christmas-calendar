import React, {useState} from 'react';
import { HatchType, createCalendar } from './helpers';
import Hatch from './components/Hatch/Hatch';

// Styles
import { StyledApp } from './App.styles';

const App: React.FC = () => {
  const [hatches, setHatches] = useState<HatchType[]>(createCalendar());

  const handleClick = () => console.info("click!");

  return (
    <StyledApp>
      {hatches.map(hatch => (
        <Hatch key={hatch.nr} hatch={hatch} handleClick={handleClick} />
      ))}
    </StyledApp>
  );
};

export default App;

