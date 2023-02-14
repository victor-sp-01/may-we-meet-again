import urlParams from "../functions/urlParams.js";
import { getData } from "../api/getData.js";
import { getLocalStorage } from "../api/getLocalStorage.js";
import { setSessionStorage } from "../api/setSessionStorage.js";
import OptionGame from "./OptionGame.js";
import eventFlip from "../events/eventFlip.js";
import styleFlip from "../styles/styleFlip.js";
import ListFlip from "./ListFlip.js";
 
const Flip =async()=>{    
    const [ , typeGame, idGame, level ] = urlParams() 
    const Token = getLocalStorage( 'Token' )
    const Level = await getData( `http://localhost/api_mayWeMeetAgain/get/games/${ typeGame }/${ idGame }/${ level }?token=${ Token }` )

    if( Level.length === 0 ) return console.log( 'modo no econtrado' )  
    
    const _level = Number( Level[0].level )
    const _items = Number( Level[0].items )

    const Game = {
        start : false,
        play  : false,
        over  : false,

        help  : _level - 1,
        life  : _level,
        level : _level,
        items : _items
    } 

    setSessionStorage( 'Game', JSON.stringify( Game ) )

    document.getElementById( 'styles' ).innerHTML += styleFlip()
    document.querySelector( '.div__6Ex2R' ).innerHTML = `<div class="div__e2teE" ></div>`

    eventFlip()
    ListFlip()
    OptionGame()
} 

export default Flip


/*
    const eventFlip=()=>{

        const handleClick =()=>{
            
        }

        document.querySelector( '.div__e2teE' ).addEventListener( 'click', handleClick )
    } */

/*const Game = {
        start : false,
        play  : false,
        over  : false
    }

    const setData =( _key, _data )=> sessionStorage.setItem( _key, JSON.stringify( _data ) )
    setData( 'Game', Game )  

    const element = CreateElement({
        _type   : 'div',
        _class  : 'div__ktffVx9',
        _id     : 'div__5UzS552A2n',
        _append : document.querySelector( '.contenido__oC5c1vZ' ), 
        _style  : styleFlip()
    })

    eventFlip( element )

    ListFlip()*/