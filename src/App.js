import './App.css';
import answers from './answers';
import colors from './colors';
import EightBall from './EightBall';
import BoxContainer from './BoxContainer'

function App() {
  return (
    <div className="App">
      <EightBall
        answers={answers}
      />
      <BoxContainer
      colors={colors} 
      numBoxes={24}
      />
    </div>
  );
}

export default App;
