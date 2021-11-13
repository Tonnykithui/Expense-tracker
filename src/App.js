import './App.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import Transaction from './components/transactions/Transaction';
import AddBtn from './components/addBtn/AddBtn';
import { GlobalProvider } from './context/GlobalContext';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header />
      <Card />
      <Transaction />
      <AddBtn />
      </GlobalProvider>
    </div>
    
  );
}

export default App;
