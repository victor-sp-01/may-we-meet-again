const mixContent =( array )=>{
    const entrada = [ ...array ]
    const salida = [] 
    while( entrada.length ) salida.push(entrada.splice( Math.floor(Math.random() * entrada.length), 1 )[0])
    return salida 
}

export default mixContent