const urlParams =()=>{
    const hash = location.hash.slice( 1 )
    const arrayPath = hash.split( '/' ) 
    const path = []
    
    for (let index = 0; index < arrayPath.length; index++) { 
        if( arrayPath[ index ] === '' ) break
        path.push( arrayPath[ index ]  )
    }

    return path
}

export default urlParams