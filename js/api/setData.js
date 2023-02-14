export const setData =async( _data, _path )=>{
    return await fetch(_path, { method : 'POST', body : _data, Headers : { "Content-Type" : "application/json" } })
                .then(respuesta => respuesta.json())
                .catch(error => console.log(error))
} 
 