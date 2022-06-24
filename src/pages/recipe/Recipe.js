import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { projectFirestore } from "../../firebase/config";
import useTheme from '../../hooks/useTheme';
// style
import './Recipe.css';

export default function Recipe() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();
  
  useEffect(() =>  {
    
    projectFirestore.collection('recipes').doc(id).get().then(doc => {
      if (doc.exists) {
        setIsPending(false)
        setData(doc.data())
      } else {
        setIsPending(false)
        setError("no doc with this id here")
      }
  })
  } , [id])
  
  return (
    <div >
      {isPending && <h1> Loading page </h1>}
      {error && <h1>error came up loading page . 404</h1>}
      {data && <div className='recipe' key={data.id}> 
        <h1>{data.title}</h1>
        
        <ul>
          {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
        </ul>

        <p>{data.method}</p>
      </div>}
    </div>
  )
}
