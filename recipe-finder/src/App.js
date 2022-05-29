import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const API_KEY='b9714173355b90480adb5ada8c4ba96d	';
  const APP_ID='17e545f0';
  
  const[ingredientList,updateingredientList]=useState([]);
  const[loading,setLoadig]=useState(false);
  const inputRef=useRef(null);

  const search=()=>{
    searchForRecipe(inputRef.current.value);
    inputRef.current.value="";
  }

  const searchForRecipe=(query)=>{
    setLoadig(true);
    let url=`search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;
    fetch(url,{mode:"no-cors"}).then((response)=>{
      return response.json();
    })
    .then((res)=>{
      console.log(res.hits);
      updateingredientList(res.hits);
      setLoadig(false);
    })
    .catch((err)=>{
      console.log("error",err);
      setLoadig(false);
    })
  }

  useEffect(()=>{
    searchForRecipe('chicken');
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='InputWrapper'>
          <input ref={inputRef} type="text" placeholder='Search for recipe' />
          <button onClick={search}>Search</button>
        </div>
        {loading&&<p>Loading...</p>}
        <div className="Wrapper">
         {ingredientList.map((item)=>{
           return (
             <div key={item.recipe.label} className='Ingredient'>
               <span>{item.recipe.label}</span>
               <img src={item.recipe.image}/>
               <div className="Steps">
               {item.recipe.ingredientLines.map((step,index)=>{
                 return <p key={index}>{step}</p>
               })}
               </div>
             </div>
           );
         })}
        </div>
      </header>
    </div>
  );
}

export default App;
