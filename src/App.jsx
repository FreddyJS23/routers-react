import "./App.css";
import {
  Route,
  Routes,
  NavLink,
  Link,
  Navigate,
  useParams,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Equipos from "./pages/Equipos";
import EquipoDetail from "./pages/EquipoDetail";
import SearchPage from "./pages/SearchPage";
import Productos from "./pages/Productos";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { PrivateRoute } from "./pages/PrivateRoute";
import { Admin } from "./pages/Admin";
import React, { useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import CrudApiRestApp from "./components/crudApiRest/CrudApiRestApp";

function App() {
  const [user, setUser] = useState(null);

  const login = () => setUser({ id: 1, name: "freddy", permiso: ["admin"] });

  const logout = () => setUser(null);

  return (
    <div>
      <h1>React Router</h1>
      <a
        href="https://reactrouter.com/en/main"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentacion
      </a>
      {/*    colocar elementos fuera de las rutas puede servir como encabezados */}
      <header>
        <nav>
          <ol>
            <li>
              {/* al usar la etiqueta a, la aplicacion no seria una spa ya que esta navegando y recargando*/}
              <span>Enlacen con etiqueta _HTML</span>
              <br />
              <a href="/">Home con etiqueta </a>
              <br />
              <a href="/SearchPage">Search page con etiqueta </a>
            </li>
            <br />
            <li>
              <span>Enlace con compenete Link de router</span>
              <br />
              <Link to="/">Home con etiqueta "Link" de react-router </Link>
              <br />
              <Link to="/SearchPage">
                {" "}
                Search page con etiqueta "Link" de react-router
              </Link>
            </li>
            <br />
            <li>
              <span>Enlace con compenete NavLink de router</span>
              <br />
              {/* de forma predeterminada cuando el enlace esta activo agrega la clase "acitve" o se le agrega una clase personalizada con className */}
              <NavLink to="/">
                Home con etiqueta "Link" de react-router{" "}
              </NavLink>
              <br />
              <NavLink
                className={({ isActive }) => (isActive ? "enlaceActivo" : "")}
                to="/SearchPage"
              >
                {" "}
                Search page con etiqueta "Link" de react-router
              </NavLink>
            </li>
            <br />
            <li>
              <span>Enlace con paso de parametros de variables</span>
              <br />

              <Link to="/productos?inicio=1&fin=20">Productos</Link>
            </li>
            <br />

            <li>
              <span>Redirecciones</span>
              <br />
              <Link to="/contact">Contactos</Link> <br />
              <Link to="/about">Acerca de</Link>
            </li>
            <br />

            <li>
              <span>Rutas privadas</span>
              <br />
              <Link to="/login">Login</Link> <br />
              <Link to="/home">Home(private)</Link> <br />
              <Link to="/admin">admin (super private / admin)</Link>
              <br />
              {user ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <button onClick={login}>Login</button>
              )}
            </li><br />

            <li><span>Crud api res</span><br />
            
            <Link to="/crudApiRest">Home</Link>
            </li>
          </ol>
        </nav>
      </header>
      <hr />

      {/* 
//Estrura de la rutas: va un contenedor routes que contiene cada route
//cada route tiene un path que seria la ubicacion, en caso de home no se coloca
//element seria el componente a renderizar
//si se quiere pasar variables por get se usa ":variable" que es un segmento dinamico 
//esto se conoce como urls limpias
*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchPage" element={<SearchPage />} />

        {/*   //rutas anidadas */}
        <Route path="/Equipos/:equipo" element={<Equipos />}>
          {/*al no usar la "/" se refiere que la ruta sera relativa a la ruta actual en este caso "Equipos/equipo/Details"*/}
          <Route path="Details" element={<EquipoDetail />} />
        </Route>

        {/* ruta no encontrada o error 404 (esto en realiada no devuelve un 404 ya que la pagina si existe y devuelve un ok, la unica forma seria desde el servidor o redirecionando a)   */}
        <Route path="*" element={<h1>Error ruta no encontrada</h1>} />

        <Route path="/productos" element={<Productos />} />

        <Route
          path="/contact"
          element={
            <>
              {" "}
              <Navigate to="/contactos" />{" "}
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              {" "}
              <Navigate to="/acerca" />{" "}
            </>
          }
        />

        <Route path="/contactos" element={<h2>Contactos</h2>} />
        <Route path="/acerca" element={<h2>Acerca de</h2>} />

        {/* rutas privada */}
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            //!!variable devuelve true o false, es un resumen de user ? true : false
            <ProtectedRoute userExiste={!!user}  redirectTo="/login">
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute
              userExiste={!!user && user.permiso.includes("admin")}
              redirectTo="/home"
            >
              <Admin />
            </ProtectedRoute>
          }
        />

          <Route path="/crudApiRest" element={<CrudApiRestApp />}  />

      </Routes>

      
    </div>
  );
}

export default App;
