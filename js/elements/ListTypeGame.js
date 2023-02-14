import { getLocalStorage } from "../api/getLocalStorage.js"
import { getData } from "../api/getData.js"

const ListTypeGame =async()=>{

    const Token = getLocalStorage( 'Token' )
    const games = await getData( `http://localhost/api_mayWeMeetAgain/get/games?token=${ Token }` ) 

    document.querySelector( '.contenedor__oC5c1vZ' ).innerHTML = `
        <div class="div__owkDj" >   
            <header class="header_TdG0I">
                <span class="span__T3ZLH" >Games</span> 
            </header>
            <div class="div__m9Qc1">  </div>  
        </div>
    `
 
    const html = games.map(({ id, tgName })=> `
        <a class="a__8HRRN" href="#games/${ id }" >
            <span class="span__1Yu7x" >${ tgName }</span>
        </a>
    ` ).join( '' ) 

    document.querySelector( '.div__m9Qc1' ).innerHTML = html
 
}

export default ListTypeGame

/*
    const listDiv__m9Qc1 = document.createDocumentFragment()

    Games.map(({ id, nombre }) => {
        const games = document.createElement('a')
        games.setAttribute( 'class', "a__8HRRN" )
        games.setAttribute( 'href', `#games/${ id }` )
        games.innerHTML = `<span class="span__1Yu7x" >${ nombre }</span>`  
        listDiv__m9Qc1.append( games )  
    });
 
    document.querySelector( '.div__m9Qc1' ).append( listDiv__m9Qc1 ) */

/*<a class="a__8HRRN" href="#games/preguntas" >
                    <span class="span__1Yu7x" >Preguntas</span>
                </a>
                <a class="a__8HRRN" href="#games/Flip" >
                    <span class="span__1Yu7x" >Flip</span>
                </a>
                <a class="a__8HRRN" href="#games/Puzzle" >
                    <span class="span__1Yu7x" >Puzzle</span>
                </a> */
/*<div class="div__zzf4c" ><a class="a__mT3Zx" href="#games/preguntas" >preguntas</a></div> 
            <div class="div__zzf4c" ><a class="a__mT3Zx" href="#games/flip">flip</a></div> 
            <div class="div__zzf4c" ><a class="a__mT3Zx" href="#games/puzzle" >puzzle</a></div>  
            <div class="div__zzf4c" ><a class="a__mT3Zx" href="#games/otros" >otros</a></div> */