import './App.css'
import TituloComponente from './components/TituloComponente'

function App() {
  const misEstilos = {
    color:'#887766', 
    fontFamily:'monospace'
  }


  return (
    <>
      <h1 style = {misEstilos}> Hola React </h1>
      {/* Instanciar componente */}
      <TituloComponente texto = 'Tetris'/>
      <p className='lorem'>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Alias nostrum nesciunt 
        minus ab dicta pariatur, aspernatur, 
        quibusdam voluptatum culpa, doloribus 
        temporibus! Exercitationem quidem 
        repellendus minima! Perspiciatis 
        cumque repellat sunt nisi!
      </p>
    </>
  )
}

export default App
