import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  return (
    <div className="flex flex-col flex-wrap gap-2 justify-center items-center h-[100vh] bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div>
        <Header />
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
}

export default App;
