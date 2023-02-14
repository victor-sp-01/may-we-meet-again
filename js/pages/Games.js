 import styleGames from "../styles/styleGames.js"
 
import ListTypeGame from "../elements/ListTypeGame.js"
import ListGames from "../elements/ListGames.js"
import urlParams from "../functions/urlParams.js"
import ListLevels from "../elements/ListLevels.js"
import Game from "../elements/Game.js"

const Games =()=>{ 

    const path = urlParams() 
    
    document.getElementById( 'styles' ).innerHTML += styleGames()
    document.getElementById( 'main' ).innerHTML = `<div class="contenedor__oC5c1vZ" ></div> `
  
    if( path.length === 2 ) return ListGames()
    else if( path.length === 3 ) return ListLevels()
    else if( path.length === 4 ) return Game()
    else return ListTypeGame()
}

export default Games



/*

/*
    const _element = CreateElement({
        _type   : 'div',
        _class  : 'contenedor__oC5c1vZ',
        _append : document.getElementById( 'main' ), 
        _style  : styleGames()
    }) 
 

Data.before = Data.nivel > 2
    Data.after  = Data.niveles > Data.nivel
    <header class="header__oC5c1vZ" >
                <div class="div__3xk183g">
                    <button class="button__t01E76S"><i class="fa-solid fa-user"></i></button>
                    <span class="span__G52Hrnr" >nivel ${ Data.nivel }</span>
                </div>
                
                <div class="div__cK9x3uh" id="div__43B952XnYD" > </div>
            </header>

            <div class="contenido__oC5c1vZ"></div>

            ${ Data.before ? `<a href="#games/${ game }/${ idGame }/${ Data.nivel - 1 }" class="button__oC5c1vZ before" ><i class="fa-solid fa-angle-left"></i></a>` : '' }
            ${ Data.after ? `<a href="#games/${ game }/${ idGame }/${ Data.nivel + 1 }" class="button__oC5c1vZ after" ><i class="fa-solid fa-angle-right"></i></a>` : '' }
            
            <footer class="footer__iRG26lI" id="footer__iRG26lI" > 
                <div class="div__wIEhWBO" id="div__6J6U345B17" style="display:none" ></div>
                <button class="button__oC5c1vZ opc" id="button__6U1s0EFVna" ><i class="fa-solid fa-bars"></i></button>
            </footer>
*/