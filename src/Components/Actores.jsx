//Lista es el hijo de Actores, el listado de <li> que vamos a llenar con géneros <ul>
import Lista from "./Lista"

const actoresArray = ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Will Smith", "Julia Roberts", "Angelina Jolie", "Meryl Streep", "Scarlett Johansson"]

function Actores() {
const actores = () => actoresArray.map((actor, index) =>
<Lista key={index} props={actor}/>
)

return (
    <ul>{actores()}</ul>
)
}

export default Actores;