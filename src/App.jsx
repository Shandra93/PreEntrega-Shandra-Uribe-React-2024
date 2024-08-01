import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {    

  return (
    <div className="container">
      <div className='Contenedor'>
        <h1>Bienvenido a Super@lex</h1>
      </div>
      <NavBar />
      <ItemListContainer />
    </div>
  )
}

export default App
