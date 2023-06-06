import React from 'react'
import { Navigate } from 'react-router-dom';
import { Dashboard } from './Dashboard';

const Home = ({user}) => {
  //esta comprobacion se puede hacer, pero no es escalable ya que si se tiene muchos compenetes se tendria que repetir es
 /*  if(!user){
   return Navigate({to:"/login"})
    
  }  */
  
  return (
      <div>
        <h1>Home</h1>

        <Dashboard />
      </div>
    );
  };
  

export default Home