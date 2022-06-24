import React from 'react'
import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
// style
import './Menu.css';

export default function Menu({ response }) {
  const {mode} = useTheme()
  console.log(response.method)
  return (
    <div className='recipe-list'>
          
              {response.map((res) => {
                  return(
                  <div key={res.id} className={`card ${mode}`}>
                      <h3>{res.title}</h3>
                      <p>{res.cookingTime} to make.</p>
                      <div>{res.method ? res.method.substring(0 , 100) : ''}</div>
                      <Link to={`recipe/${res.id}`}>read more ...</Link>
                  </div>)
              })}
          
          
    </div>
  )
}
