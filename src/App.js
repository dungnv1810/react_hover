import React from 'react';
import ReactHover, {Hover, Trigger} from 'react-hover';
import TriggerComponent from './TriggerComponent/TriggerComponent';
import HoverComponent from './HoverComponent/HoverComponent';
import './App.css';

function App() {
  const options = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
  }
  return (
    <div className="App">
        <ReactHover options={options}>
          <Trigger type="trigger">
            <TriggerComponent/>
          </Trigger>
          <Hover type="hover">
            <HoverComponent/>
          </Hover>
        </ReactHover>
    </div>
  );
}

export default App;
