import './App.css';
import{BrowserRouter,Routes,Route,} from"react-router-dom"
import Hero from './components/hero/Hero';
import Register  from './components/register/Register';

function App() {
  return (
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/register' element={<Register/>}/>
            </Routes>
    </BrowserRouter>
  );
}

export default App;
