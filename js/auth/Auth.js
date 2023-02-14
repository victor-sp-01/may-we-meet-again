import { getLocalStorage } from "../api/getLocalStorage.js"
import { getData } from "../api/getData.js"

const Auth =async()=>{
    const token = getLocalStorage( 'Token' ) 
    
    if( !token ) return false
    if( token.length < 25 ) return false  

    const validacion = await getData( `http://localhost/api_mayWeMeetAgain/token/verify?token=${ token }` )
    if( validacion ) return true
    
    localStorage.removeItem( 'Token' )
    return false
}

export default Auth