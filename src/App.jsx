import './App.css';
import ExpenseItem from './components/ExpenseItem.jsx';

const App = () => {
  const data = {
    date: new Date(2024, 10,12),
    title: 'New book',
    price: 30.99
  }

  return(
    <div className="App">
    <ExpenseItem data={data}/>
    </div>
  );
}

export default App;
