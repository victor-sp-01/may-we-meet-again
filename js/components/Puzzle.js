import CreateElement from "../helpers/CreateElement.js"
import stylePuzzle from "../styles/stylePuzzle.js"
import ListPuzzle from "./ListPuzzle.js"
import eventPuzzle from "../events/eventPuzzle.js"

const Puzzle =()=>{ 

    const _hash = location.hash.slice( 1 )  
    const gameLevel = Number(_hash.split('/')[ 3 ]) 

    const Game = {
        start : false,
        play  : false,
        over  : false
    }

    const Puzzle = {
        typeGame : _hash.split('/')[ 1 ],
        idGame : _hash.split('/')[ 2 ],
        level : Number( gameLevel ) ? gameLevel : 3
    }
  
    const setData =( _key, _data )=> sessionStorage.setItem( _key, JSON.stringify( _data ) )
    setData( 'Game', Game )
    setData( 'Puzzle', Puzzle ) 


    const element = CreateElement({
        _type   : 'div',
        _class  : 'div__KZ8vSh9', 
        _append : document.querySelector( '.contenido__oC5c1vZ' ),
        _style  : stylePuzzle(),
        _html   : ` 
            <img class="img__DO0Gp5c" src="./img/puzzle/${ Puzzle.idGame }/1/1.jpeg" alt="">
            <button class="button__1vRjJwq" id="button__833bHa25Jr" >empezar</button>
            <div class="div__j888966" draggable="true" ></div>
        `
    })
 
    if( Puzzle.level < 2 ) return

    ListPuzzle()
    eventPuzzle( element )
}

export default Puzzle