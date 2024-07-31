import ButtonComponent from "./ButtonComponent";
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light barra">  
            <div className="container-fluid">
                <ButtonComponent nombre="About us" tipo="about" />
                <ButtonComponent nombre="Product" tipo="product" />
                <ButtonComponent nombre="Contact" tipo="contact" />
            </div>
        </nav>
    );
}
