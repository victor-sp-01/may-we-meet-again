import urlParams from "../functions/urlParams.js"

import { getData } from "../api/getData.js"
import { getLocalStorage } from "../api/getLocalStorage.js"
const ListGames =async()=>{
    const idGame = urlParams().pop()   

    const Token = getLocalStorage( 'Token' )
    const games = await getData( `http://localhost/api_mayWeMeetAgain/get/games/${ idGame+'?token='+ Token }` ) 
    
    if( games.length === 0 ) return

    const [{ typeGameName }] = games  

    document.querySelector( '.contenedor__oC5c1vZ' ).innerHTML = `
        <div class="div__owkDj" >   
            <header class="header_TdG0I">
                <span class="span__T3ZLH" >${ typeGameName }</span>
            </header>
            <div class="div__m9Qc1"></div>  
        </div>
    `
    
    const html = games.map(( games )=> `
        <a class="a__8HRRN" href="#games/${ idGame + '/' + games.idGame }" >
        <span class="span__1Yu7x" >${ games.gameName }</span>
        </a>
    ` ).join( '' ) 

    document.querySelector( '.div__m9Qc1' ).innerHTML = html
  
}
export default ListGames


/*
    const listDiv__m9Qc1 = document.createDocumentFragment()

    Games.map(({ id }, index) => {
        const games = document.createElement('a')
        games.setAttribute( 'class', "a__8HRRN" )
        games.setAttribute( 'href', `#games/${ idGame + '/' + id }` )
        games.innerHTML = `<span class="span__1Yu7x" >${ index + 1 }</span>`  
        listDiv__m9Qc1.append( games )  
    });

    document.querySelector( '.div__m9Qc1' ).append( listDiv__m9Qc1 ) */