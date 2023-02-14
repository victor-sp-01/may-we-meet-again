import { api } from "../global/api.js"
import { setData } from "../api/setData.js"
import styleToken from "../styles/styleToken.js" 
const Token =()=>{

    const eventToken =( element )=>{
 
        const urlApi = api()
        
        const validateToken =(e)=>{
 
            const _target   = e.target 
            const limite    = 25

            //const ejemploToken = 'uV6HP055iu2dwn31CppsF7bCX'

            _target.value = _target.value.slice( 0, limite ) 
            if( _target.classList.contains( 'error' ) ) _target.classList.remove( 'error' ) 
            if( _target.classList.contains( 'validate' ) ) _target.classList.remove( 'validate' ) 
            if( _target.value.length !== limite ) return 

            const data = new FormData( element ) 
            setData( data, `${ urlApi }/token/verify` ).then( respuesta =>{ 
                if( !respuesta ) return _target.classList.add( 'error' ) 

                _target.classList.add( 'validate' )
                _target.setAttribute( 'readonly', 'true' )

                const button1 = document.createElement( 'button' )
                            button1.setAttribute( 'class', 'button__i5lqF' )
                            button1.setAttribute( 'type', 'button' )
                            button1.textContent = 'siguiente'

                element.children[0].append( button1 )
                

                localStorage.setItem( 'Token', _target.value ) 
            } )
        }

        const handleClick =( { target } )=>{ 
            if( target.classList[0] !== 'button__i5lqF' ) return  
            
            location.href = '#introduce'/*
            document.querySelector( '.div__DilLI' ).scrollIntoView({block: "end", behavior: "smooth"}) 
            history.pushState(null, null, `${location.pathname}#inicio` )  
            const _setTimeout = setTimeout(()=> document.getElementById( 'main' ).removeChild( element ), 800 )*/
        }


        element.addEventListener( 'click', handleClick )
        element.addEventListener( 'input', validateToken )
    }

    const element = document.createElement( 'form' )
            element.setAttribute( 'class', 'form__v7QSy' )
            element.setAttribute( 'autocomplete', 'off' )
            element.innerHTML = `<div class="div__v87eK" ><input type="text" class="input__FGbsT" name="token" placeholder="codigo" ></div>`

    
    eventToken( element )  
    document.getElementById( 'styles' ).innerHTML += styleToken()
    document.getElementById( 'main' ).append( element )
}

export default Token