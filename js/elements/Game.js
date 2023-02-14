import { getLocalStorage } from "../api/getLocalStorage.js"
import { getData } from "../api/getData.js"
import urlParams from "../functions/urlParams.js" 
import Flip from "../components/Flip.js" 
const Game =async()=>{

    const [ ,typeGame, idGame, level ] = urlParams() 
    const Token = getLocalStorage( 'Token' )
    const Games = await getData( `http://localhost/api_mayWeMeetAgain/get/games/${ typeGame+'/'+idGame+'?token='+ Token }` )
 
    if( Games.length === 0 ) return 

    const _levelFirst = Number( Games[0].level )
    const _levelEnd = Number( Games.pop().level)
    const _level = Number( level )  

    const btnBefore = _level < _levelFirst || _level > _levelEnd ? _levelEnd : Number(level) - 1
    const btnAfter = _level < _levelFirst || _level > _levelEnd ? _levelFirst : Number(level) + 1

    const before = _levelFirst === _level
    const after = _levelEnd === _level
 
    document.querySelector( '.contenedor__oC5c1vZ' ).innerHTML = `
        <div class="div__owkDj" >   
            <header class="header_JGkaY">
                <span class="span__T3ZLH" >entrenamiento</span>
                <div class="div__jkSb0" ></div>
            </header>
            <div class="div__6Ex2R">
            </div>  
            <footer class="footer__KZJcb" >
                ${ before ? ''  : `<a class="button__Lh6hK" href="#games/${ typeGame }/${ idGame }/${ btnBefore }" ><i class="fa-solid fa-angle-left"></i></a>` }
                ${ after ? ''  : `<a class="button__Lh6hK" href="#games/${ typeGame }/${ idGame }/${ btnAfter }" ><i class="fa-solid fa-angle-right"></i></a>` }     
            </footer>  
        </div>
    `
    Flip()
}
export default Game