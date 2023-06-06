import { Route, Switch, NavLink, Link } from 'react-router-dom'


const SearchPage = () => {
    const Equipos = [
      "Madrid",
      "Barcelona",
      "Bayer",
      "Juventus",
      "Inter",
      "Milan",
      "PSG",
    ];
  
    return (
      <div>
        <h2>Search page</h2>
  
        <ul>
          {Equipos.map((Equipo, index) => (
            <li key={index}>
              <Link to={`/Equipos/${Equipo}`}>{Equipo} </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
export default SearchPage