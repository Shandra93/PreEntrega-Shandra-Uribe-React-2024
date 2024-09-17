# E-commerce React App

Este es un proyecto de una aplicación de e-commerce desarrollada en React que permite a los usuarios navegar por productos, ver detalles de productos, agregar artículos a un carrito y realizar una compra simulada para despues ver el resumen de la compra al finalizar la misma..

## Características

- **Página de inicio**: Muestra una vista general de los productos y opciones de navegación.
- **Página de productos**: Lista todos los productos disponibles con opción de filtrado.
- **Detalle de producto**: Permite ver la información detallada de un producto específico.
- **Carrito de compras**: Los usuarios pueden agregar productos a su carrito, modificar la cantidad y proceder a la compra.
- **Resumen de compra**: Muestra los detalles de la compra realizada con la información del comprador y los productos adquiridos.
  
## Tecnologías usadas

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/) - Manejo de rutas y navegación dentro de la aplicación.
- [Firebase](https://firebase.google.com/) - Backend para gestionar la base de datos de productos.
- [Bootstrap](https://getbootstrap.com/) - Framework de CSS para estilos responsivos.
- [CSS personalizado](./src/styles) - Para estilizar componentes y mejorar la experiencia de usuario.

## Instalación y uso

1. Clona este repositorio:
    ```bash
    git clone https://github.com/Shandra93/PreEntrega-Shandra-Uribe-React-2024
    ```

2. Entra en el directorio del proyecto:
    ```bash
    cd ecommerce-react
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia la aplicación:
    ```bash
    npm start
    ```

La aplicación estará corriendo en [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

/src 
├── /components # Componentes reutilizables 
├── /Context # Contexto de React para manejar el estado global (CarritoContext) ├── /pages # Páginas principales (Home, Productos, Carrito, Resumen de compra) 
├── App.jsx # Componente principal de la aplicación 
└── index.js # Punto de entrada del proyecto

## Contexto del Carrito

La aplicación utiliza el patrón de `Context` para manejar el estado del carrito de compras, permitiendo a los componentes acceder al mismo sin tener que pasar props innecesariamente.

## Firebase

Este proyecto utiliza Firebase para almacenar los productos y gestionar la información de las órdenes. 
