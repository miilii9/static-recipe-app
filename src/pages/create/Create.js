import React from "react";
import {  useRef } from "react";

import { useState } from "react";
// import { useFetch } from "../../hooks/useFetch";
import { projectFirestore } from "../../firebase/config";
// import { useNavigate } from "react-router-dom";

// style
import "./Create.css";

export default function Create() {
  const [newGredient, setNewGredient] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [cookTime, setCookTime] = useState("");
  const [method, setMethod] = useState("");
  const ingredientInput = useRef(null);
  // const navigate = useNavigate
  // const { postData, data, isPending, error } = useFetch(
  //   "http://localhost:3000/recipes",
  //   "POST"
  // );
  
  // adding ingredient to a list
  const addNew = (e) => {
    e.preventDefault();
    const ing = newGredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevState) => [...prevState, ing]);
    }
    setNewGredient("");
    ingredientInput.current.focus();
  };
  // submiting form
  const handlSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      ingredients,
      method,
      cookingTime: `${cookTime} minutes`,
    };
    await projectFirestore.collection('recipes').add(data);
    //  navigate('/home')
  };

  return (
    <div className='create'>
      <h1 className='page-title'>Add a recipe</h1>

      <form onSubmit={handlSubmit}>
        <label>
          <span>Name of the recipe</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <label>
            <span>Recipe Method:</span>
            <textarea
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              required
            />
          </label>
        </label>

        <label>
          <span>Add new ingredient</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewGredient(e.target.value)}
              required
              value={newGredient}
              ref={ingredientInput}
            />
            <button className='btn' onClick={addNew}>
              add
            </button>
          </div>
        </label>
        {
          <p>
            Current Ingredients :
            {ingredients.map((ing) => (
              <em key={ing}>{ing}, </em>
            ))}
          </p>
        }
        <label>
          <span>cooking time ?</span>
          <input
            type='number'
            onChange={(e) => setCookTime(e.target.value)}
            value={cookTime}
            required
          />
          <button className='btn'>submit</button>
        </label>
      </form>
    </div>
  );
}
