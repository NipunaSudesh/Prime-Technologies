import logo from './logo.svg';
import './App.css';
import { NavBar } from './Component/NavBar';
import { Home } from './Page/Home';
import { Services } from './Page/Services/Services';

function App() {
  return (
    <div className="flex flex-col gap-4">
      <NavBar />
      <Home />
      <Services />
    </div>
  );
}

export default App;
