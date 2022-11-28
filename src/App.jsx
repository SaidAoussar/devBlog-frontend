import Home from './Home'
import { ContextWrapper } from './context/AppContext';



function App() {
  return (
      <ContextWrapper>
        <Home></Home>
      </ContextWrapper>
  );
}

export default App;
