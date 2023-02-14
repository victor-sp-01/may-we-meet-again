import Auth from "../auth/auth.js"

import Token from "../pages/Token.js"
import Games from "../pages/Games.js" 
import Inicio from "../pages/Inicio.js" 
import Introduce from "../pages/Introduce.js"
import Moments from "../pages/Moments.js"

const Routes =async()=>{

    const auth = await Auth() 
    
    const _hash = location.hash.slice(1) 
    const [ pagina = '' ] = _hash.split('/')
 
    const rPrivate =( App )=>{ 
        if( auth ) return App() 
        history.pushState( null, null, `${ location.pathname }#token` )
        Token()
    }

    const rPublic =( App )=>{ 
        if( !auth ) return App() 
        history.pushState( null, null, `${ location.pathname }#inicio` )
        Inicio()
    }

    if( pagina === '' ) return rPrivate( Inicio ) 
    if( pagina === 'inicio' ) return rPrivate( Inicio )
    //if( pagina === 'games') return rPrivate( Games )
    //if( pagina === 'inicio-sesion' ) return console.log( 'pagina de iniciar sesion' )
    //if( pagina === 'crear-cuenta' ) return console.log( 'pagina de crear cuenta' ) 
    if( pagina === 'token' ) return rPublic( Token ) 
    if( pagina === 'introduce' ) return rPrivate( Introduce ) 
    if( pagina === 'momentos' ) return rPrivate( Moments ) 



    else return console.log( 'pagina no encontrada' )
}

export default Routes