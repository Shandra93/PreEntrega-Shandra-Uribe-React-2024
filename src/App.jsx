import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const misEstilos = {
    color: '#887766', 
    fontFamily: 'monospace',
    textAlign: 'center',
    marginTop: '20px'
  }

  return (
    <div className="container">
      <h1 style={misEstilos}>Welcome to my shop</h1>
      <NavBar />
    </div>
  )
}

export default App
