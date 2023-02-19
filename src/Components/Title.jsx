function Title (props) {
    return ( 
        <>
        <h1>{props.titulo}</h1>
        <h2>{props.descripcion}</h2>
        <p>{props.children}</p>
        </>
    );
}

export default Title;