import urlParams from "../functions/urlParams.js"

import { getData } from "../api/getData.js"
import { getLocalStorage } from "../api/getLocalStorage.js"
const ListLevels =async()=>{ 
    
    const [ ,typeGame, idGame ] = urlParams() 
    const Token = getLocalStorage( 'Token' )
    const games = await getData( `http://localhost/api_mayWeMeetAgain/get/games/${ typeGame+'/'+idGame+'?token='+ Token }` )
  
    document.querySelector( '.contenedor__oC5c1vZ' ).innerHTML = `
        <div class="div__owkDj" >   
            <header class="header_TdG0I">
                <span class="span__T3ZLH" >Levels</span>
            </header>
            <div class="div__m9Qc1"></div>  
        </div>
    `


    const html = games.map(({ level } )=> `
        <a class="a__8HRRN" href="#games/${ typeGame+'/'+idGame + '/' + level }" >
            <span class="span__1Yu7x" >${ level }</span>
        </a>
    ` ).join( '' ) 

    document.querySelector( '.div__m9Qc1' ).innerHTML = html

    
}
export default ListLevels


/*const listDiv__m9Qc1 = document.createDocumentFragment()

    Games.map(({ levels }, index) => { 

        const games = document.createElement('a')
        games.setAttribute( 'class', "a__8HRRN" )
        games.setAttribute( 'href', `#games/${ typeGame+'/'+idGame + '/' + levels }` )
        games.innerHTML = `<span class="span__1Yu7x" >${ index + 1 }</span>`  
        listDiv__m9Qc1.append( games )  
    });
    //games/917oy9Tx/OG5JdTQ7/4?token=O3pQxbaO5WYFMX3mjBb8TvH7Z
    document.querySelector( '.div__m9Qc1' ).append( listDiv__m9Qc1 ) */