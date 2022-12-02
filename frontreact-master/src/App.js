import RootElement from './router';
import { ContextApi } from './context/contextApi';


function App() {
  return (
    <ContextApi.Provider value={{'sujestao':['Ouvir Música', 'Tocar Violão']}}>  
        <RootElement />
    </ContextApi.Provider>
  );
}

export default App;
