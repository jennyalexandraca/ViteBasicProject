import './App.css'
import Title from "./Components/Title"
import Generos from "./Components/Generos"
import Actores from './Components/Actores'

function App() {


  function handleClick() {
    alert("Comming soon!")
  }

  return (
    <div className="App">
      <Title titulo= "Best action movies" descripcion="Choose the best one by genre or actors"/>
      <Title children="Genres"/>
        <Generos />
      <Title children="Actors"/>
        <Actores />
      <button onClick={handleClick} className="button">Next</button>
    </div>
  
  )
}

export default App;