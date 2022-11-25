import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { petIncrement, petDecrement } from './actions';

function App() {
  const petCounter = useSelector(state => state.petCounter);
  const petFavorite = useSelector(state => state.petFavorite);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>Welcome to Old Redux Saga</h1>
      <button onClick={() => dispatch(petIncrement(2))}>Add Pet</button>
      <button onClick={() => dispatch(petDecrement(5))}>Remove Pet</button>
      <h1>Pet Counter {petCounter}</h1>
      <h1>No of Favorite Pet so far {petFavorite}</h1>
    </div>
  );
}

export default App;
