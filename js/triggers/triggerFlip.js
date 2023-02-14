import Aviso from "../components/Aviso.js"

import { samePageCount } from "../helpers/sameCountPages.js"

import { getSessionStorage } from "../api/getSessionStorage.js"
import { setSessionStorage } from "../api/setSessionStorage.js"

import ListFlip from "../components/ListFlip.js"
import OptionGame from "../components/OptionGame.js"

const triggerFlip =( accion, Data = false )=>{  
    const Game = JSON.parse( getSessionStorage( 'Game' ) ) 
    const Page = JSON.parse( getSessionStorage( 'PageCount' ) ) 

    
    const GameSart = ()=>{ 
        if( Game.over ) return
        if( Game.start ) return GamePlay()

        Game.start  = true
        setSessionStorage( 'Game', JSON.stringify( Game ) )
        OptionGame() 
        flips()
    }

    const GameRepeat =()=>{
        Game.start  = false
        Game.play  = false
        Game.over  = false
        Game.life  = 3
        Game.help  = 3

        setSessionStorage( 'Game', JSON.stringify( Game ) )

        ListFlip()
        OptionGame()

        clearTimeout( Data.timeFlips )
        clearTimeout( Data.timeBackFlip )

        const element = document.querySelector( '.div__e2teE' )
        element.classList.remove( 'active' ) 
        element.classList.remove( 'over' )
        
        Data.timeRepeatFlip = setTimeout( ()=>{
            if( !samePageCount( Page ) ) return clearTimeout( Data.timeFlips )
            Game.start  = false
            setSessionStorage( 'Game', JSON.stringify( Game ) )
        }, 1000  )
    }

    const GameHelp =()=> {
        if( Game.over ) return

        Game.play  = false
        Game.help  = --Game.help
        setSessionStorage( 'Game', JSON.stringify( Game ) )
        flips()
    } 

    const GamePlay =()=>{ if( Game.play ) return flip() }

    //
    const flip =()=>{
        if( Data.elements.length >= 2 ) backFlip( true )
        if( Data.elements.length === 0 ) Data.element1 = Data.element
        if( Data.elements.length === 1 ) Data.element2 = Data.element
    
        const _data = Data.element.dataset.id
    
        Data.data.push( _data ) 
        Data.elements.push( Data.element )
    
        Data.element.classList.add( 'active' )
    
        if( Data.data.length !== 2 ) return
        validateFlip()
    }   
    
    const flips =()=>{ 
        OptionGame( true )
        const element = document.querySelector( '.div__e2teE' )
        element.classList.add( 'active' )

        Data.timeFlips = setTimeout( ()=> {
            if( !samePageCount( Page ) ) return clearTimeout( Data.timeFlips )
            element.classList.remove( 'active' )
            Game.play  = true
            setSessionStorage( 'Game', JSON.stringify( Game ) )
        }, 2000 ) 
    }

 
    const backFlip =( clean )=>{ 
        Data.element1.classList.remove( 'active' )
        Data.element2.classList.remove( 'active' )
        Data.elements = [] 
        if( clean ) clearTimeout( Data.timeBackFlip )
    }

    const backFlips =()=>{
        Game.over  = true
        setSessionStorage( 'Game', JSON.stringify( Game ) )

        const element = document.querySelector( '.div__jkSb0' ).children
        element.btn__UGGD21P.classList.add( 'disable' )
        element.btn__M20D14o.classList.add( 'disable' ) 
 
        Data.timeBackFlips  = setTimeout(() => {
            const element = document.querySelector( '.div__e2teE' )
            element.classList.add( 'active' ) 
            element.classList.add( 'over' ) 

        }, 1000)
 
    }
 
    const validateFlip =()=>{
        const [ primero, segundo ] = Data.data 
        Data.data = []
        
        if( primero !== segundo ){  
            Game.life  = --Game.life
            
            setSessionStorage( 'Game', JSON.stringify( Game ) )
            OptionGame()

            if( Game.life === 0 ) return backFlips() 
            return Data.timeBackFlip = setTimeout(()=> { 
                if( !samePageCount( Page ) ) return clearTimeout( Data.timeBackFlip )
                backFlip( false ) 
            }, 1250) 
        }
    
        Data.items--
        Data.elements = [] 
        Data.element1.classList.add( 'finish' )
        Data.element2.classList.add( 'finish' )

        const element = document.querySelector( '.div__jkSb0' ).children
        element.btn__UGGD21P.classList.add( 'disable' )
        element.btn__M20D14o.classList.add( 'disable' ) 

        //if( Data.items === 0 ) return Aviso({ message : 'YEAH, SO GOODDDD, JAJAJAJJA VAMOS BEIN' } ) 
    }

    //

    if( accion === 'start' ) return GameSart()
    if( accion === 'repeat' ) return GameRepeat()
    if( accion === 'help' ) return GameHelp() 
}

export default triggerFlip
































/*
            const life = document.getElementById( 'div__43B952XnYD' )
            life.removeChild( life.children[ --Data.life ] )
            if( Data.life === 0 ) return backFlips()

            return Data.timeBackFlip = setTimeout(()=> {
                if( !samePageCount() ) return clearTimeout( Data.timeBackFlip ) 
                backFlip( false ) 
            }, 1250 ) */

/* // 
    const getData =( _data )=> JSON.parse( sessionStorage.getItem( _data ) )
    const setData =( _key, _data )=> sessionStorage.setItem( _key, JSON.stringify(_data) ) 
    const samePageCount =()=> PageCount === sessionStorage.getItem( 'PageCount' )

    const Game = getData( 'Game' ) 
    const PageCount = sessionStorage.getItem( 'PageCount' ) 
 
    const GameSart =()=>{
        if( Game.start ) return
        Game.start  = true 
        setData( 'Game', Game )

        Data.timeStart = setTimeout(()=> { 
            if( !samePageCount() ) return clearTimeout( Data.timeStart )
            Game.play = true
            setData( 'Game', Game )
        } , 2000)


        

        return flips()
    }
    
    const GamePlay =()=>{
        if( Game.over ) return
        if( !Game.play ) return
        flip()
    }

    const GameOver =()=> backFlips()

    const GameRepeat =()=>{ 
        Game.start  = false 
        Game.play = false 
        Game.over = false 
        setData( 'Game', Game ) 
        ListFlip()
    } 
    const GameHelp =()=>{
        if( !Game.play ) return
        Game.play  = false 
        setData( 'Game', Game ) |
        flips()
        return Data.timeHelp = setTimeout(()=> { 
            if( !samePageCount() ) return clearTimeout( Data.timeHelp )
            Game.play = true; 
            setData( 'Game', Game )  
        } , 2000)
    }
 
    //
    const flip =()=>{
        if( Data.elements.length >= 2 ) backFlip( true )
        if( Data.elements.length === 0 ) Data.element1 = Data.element
        if( Data.elements.length === 1 ) Data.element2 = Data.element
    
        const _data = Data.element.dataset.id
    
        Data.data.push( _data ) 
        Data.elements.push( Data.element )
    
        Data.element.classList.add( 'active' )
    
        if( Data.data.length !== 2 ) return
        validateFlip()
    }   
    
    const flips =()=>{
        const elements = document.getElementById( 'div__5UzS552A2n' ) 
        elements.classList.add( 'active' )

        return Data.timeFlips = setTimeout(() => { 
            if( !samePageCount() ) return clearTimeout( Data.timeFlips ) 
            elements.classList.remove( 'active' ) 
        } , 2000); 
    }

 
    const backFlip =( clean )=>{
        Data.element1.classList.remove( 'active' )
        Data.element2.classList.remove( 'active' )
        Data.elements = [] 
        if( clean ) {
            clearTimeout( Data.timeBackFlip ) 
        }
    }

    const backFlips =()=>{
        Aviso( { message : 'te falta odio', type    : 'error' } ) 

        return Data.timeBackFlips  = setTimeout(() => { 
            if( !samePageCount() ) return clearTimeout( Data.timeBackFlips )

            const elements = document.getElementById( 'div__5UzS552A2n' )
            for ( let index = 0; index < elements.children.length; index++ ) {
                const element = elements.children[index]; 
                if( !element.classList.contains( 'active' ) ) element.classList.add( 'active' )
            }
        }, 1000 );
    }

    const validateFlip =()=>{
        const [ primero, segundo ] = Data.data 
        Data.data = []
        
        if( primero !== segundo ){ 
            const life = document.getElementById( 'div__43B952XnYD' )
            life.removeChild( life.children[ --Data.life ] )
            if( Data.life === 0 ) return GameOver( Data )

            return Data.timeBackFlip = setTimeout(()=> {
                if( !samePageCount() ) return clearTimeout( Data.timeBackFlip ) 
                backFlip( false ) 
            }, 1250 ) 
        }
    
        Data.items--
        Data.elements = [] 
        Data.element1.classList.add( 'finish' )
        Data.element2.classList.add( 'finish' ) 

        if( Data.items === 0 ) return Aviso({ message : 'YEAH, SO GOODDDD, JAJAJAJJA VAMOS BEIN' } ) 
    }/*/