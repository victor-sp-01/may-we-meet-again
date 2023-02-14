const randomNumbers =( Number )=>{
    const _entrada = []
    const _salida = []
    for (let index = Number; index > 0; index--)  _entrada.push(index)
    while( _entrada.length ) _salida.push(_entrada.splice( Math.floor(Math.random() * _entrada.length), 1 )[0])
    return _salida 
}
 
export default randomNumbers 