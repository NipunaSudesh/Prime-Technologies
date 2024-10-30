import logo from './logo.svg';
import './App.css';
import { NavBar } from './Component/NavBar';
import { Home } from './Page/Home';

function App() {
  return (
    <div className="flex flex-col gap-4">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
