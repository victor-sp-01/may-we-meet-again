export const getData =async( _path )=>{ 
    return await fetch( _path )
                    .then( respuesta => respuesta.json() )
                    .catch( error => error )
}  