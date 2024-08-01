import ButtonComponent from "./ButtonComponent";
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from './CounterComponent';


export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light barra">  
            <div className="container-fluid">
                <ButtonComponent nombre="Nosotros" tipo="Nosotros" />
                <ButtonComponent nombre="Productos" tipo="Productos" />
                <ButtonComponent nombre="Home" tipo="Home" />
                <CounterComponent />
            </div>
        </nav>
    );
}
