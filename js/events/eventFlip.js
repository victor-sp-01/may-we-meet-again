import OpcNiveles from "../components/OpcNiveles.js"
import triggerFlip from "../triggers/triggerFlip.js" 

const eventFlip =()=>{

    const Data = {
        element     : '',
        element1    : '',
        element2    : '',

        elements    : [],
        data        : [],

        life        : 5,
        items       : 5, 

        timeStart   : '',
        timeHelp    : '',
        timeFlips   : '',
        timeBackFlip    : '',
        timeBackFlips   : '',
        timeRepeatFlip  : ''
    }

    const handleClick =( { target } )=>{
        const _class = target.classList[0]

        Data.element = target

        if( _class !== 'button__k6OOV' )return
        return triggerFlip( 'start', Data )
    }

    const handleClick2 =( { target } )=>{ 
        const _id = target.id  

        if( _id === 'btn__d8TfrLn' ) return triggerFlip( 'start', Data )
        if( _id === 'btn__47f36T1' ) return triggerFlip( 'repeat', Data )
        if( _id === 'btn__UGGD21P' ) return triggerFlip( 'help', Data ) 
        if( _id === 'btn__UGGD21P' ) return triggerFlip( 'help', Data ) 
        if( _id === 'btn__jC2ovic' ) return OpcNiveles()
 
    }


    const element = document.querySelector( '.div__e2teE' )
    element.addEventListener( 'click', handleClick )

    const element2 = document.querySelector( '.div__jkSb0' )
    element2.addEventListener( 'click', handleClick2 )

    
}
export default eventFlip




/*
    const _hash = location.hash.slice( 1 )   
    const nivel = Number( _hash.split('/')[ 2 ] )

    const Data = {
        element     : '',
        element1    : '',
        element2    : '',

        elements    : [],
        data        : [],

        life        : nivel,
        items       : nivel, 

        timeStart   : '',
        timeHelp    : '',
        timeFlips   : '',
        timeBackFlip    : '',
        timeBackFlips   : ''
    } 

    const getGame =()=> JSON.parse( sessionStorage.getItem( 'Game' ) ) 

    const OptionGames =( { target } )=>{
        const buttons = div__6J6U345B17.children[0].children 

        if( target === buttons.button__b9NzC47swr )         triggerFlip( 'start' , Data )
        else if( target === buttons.button__Ilq0gZki03 )    triggerFlip( 'repeat' , Data )
        else if( target === buttons.button__IS9o48298p )    triggerFlip( 'help' , Data )
        else if( target === buttons.button__T46EIPkBXF )    triggerFlip( 'lista' , Data )
  
        if( target !== div__6J6U345B17 ) return OptionGame()
    }

    const PlayGame =( { target } )=>{
        const Game = getGame()
        Data.element = target

        if( div__6J6U345B17.children.length !== 0 ) OptionGame()
        if( !Game.start ) return triggerFlip( 'start', Data  ) 
        if( target.classList[0] !== 'button__Hm599Hu' ) return
        if( Game.over ) return
        triggerFlip( 'play', Data )
    } 

 
    const div__6J6U345B17 = document.getElementById( 'div__6J6U345B17' )
    div__6J6U345B17.addEventListener( 'click', OptionGames )
 
    element.addEventListener( 'click', PlayGame )*/
