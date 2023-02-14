import App from "../App.js"
import { api } from "../global/api.js"
import styleInicio from "../styles/styleInicio.js"
import { getLocalStorage } from "../api/getLocalStorage.js"
import { getData } from "../api/getData.js"

const Inicio =()=>{
    const urlApi = api()
    const eventInicio =()=>{

        const logOut =()=>{
            getData( `${ urlApi }/auth/logout?token=${ getLocalStorage( 'Token' ) }` )
            .then( respuesta => { 
                if( !respuesta )  return
                localStorage.removeItem( 'Token' )
                App()  
            } ) 
        }

        //document.getElementById( 'button__CkgIBN8' ).addEventListener( 'click', logOut )
    }
 

    const element = document.createElement( 'div' )
            element.setAttribute( 'class', 'div__DilLI' ) 
            element.innerHTML = `
                <div class="div__n6ewe" >
                    ${ false ? `<a class="button__Uwcw5" href="#user"><i class="fa-solid fa-user"></i><span>Perfil</span></a>` : '' }
                    <a class="button__Uwcw5" href="#momentos"><i class="fa-solid fa-image"></i><span>Momentos</span></a>
                    <a class="button__Uwcw5" href="#introduce"><i class="fa-solid fa-gift"></i></i><span>👀👀👀👀👀👀</span></a>
                    ${ false ? `<a class="button__Uwcw5" href="#games"><i class="fa-solid fa-dice"></i><span>Games</span></a>` : '' }
                    ${ false ? `<button class="button__Uwcw5" id="button__CkgIBN8" ><i class="fa-solid fa-right-from-bracket"></i><span>salir</span></button>` : ''} 
                </div>
            `
            
    document.getElementById( 'styles' ).innerHTML += styleInicio()
    document.getElementById( 'main' ).append( element ) 
    eventInicio()
}

export default Inicio