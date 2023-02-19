//Lista es el hijo de Géneros, el listado de <li> que vamos a llenar con géneros <ul>
import Lista from "./Lista" 

const generosArray = ["Action", "Romance", "Suspense"];

function Generos(){
    const generos = () => generosArray.map((genre, index) => 
    <Lista key={index} props= {genre}/>
    )    

    return (
        // <>
            <ul>{generos()}</ul>
        // </>
    )
}

export default Generos;