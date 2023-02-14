import OptionGame from "../components/OptionGame.js";
import triggerPuzzle from "../triggers/triggerPuzzle.js";

const eventPuzzle =( _elemento )=>{   
    
    const { level } = JSON.parse( sessionStorage.getItem( 'Puzzle' ) ) 

    const Data = { 
        element1    : '',
        element2    : '',

        parent1     : '',
        parent2     : '',
 
        items       : [],
        data        : [],
 
        timeShowOrginalItems    : '',
        timeHideItems : '',
        timeShowItems : '',
        timeDeleteItems : ''
    }  

    for (let index = level * level; index > 0; index--)  Data.items.push(index)   

    const _dragOver = e => e.preventDefault()
    const _dragStart = e =>{ 
        Data.element1   = e.target
        Data.parent1    = e.target.parentElement 
    }

    const _drop = e =>{
        Data.element2   = e.target
        Data.parent2    = e.target.parentElement   

        triggerPuzzle( 'play' , Data )
    }

    const handleClick =({ target })=>{
        if( target !== _elemento.children.button__833bHa25Jr ) return
        triggerPuzzle( 'start' , Data )
    }
 
    const OptionGames =( { target } )=>{
        const buttons = div__6J6U345B17.children[0].children 

        if( target === buttons.button__b9NzC47swr )         triggerPuzzle( 'start' , Data )
        else if( target === buttons.button__Ilq0gZki03 )    triggerPuzzle( 'repeat' , Data )
        else if( target === buttons.button__IS9o48298p )    triggerPuzzle( 'help' , Data )
        else if( target === buttons.button__T46EIPkBXF )    triggerPuzzle( 'lista' , Data )
  
        if( target !== div__6J6U345B17 ) return OptionGame()
    }

    _elemento.addEventListener( 'dragstart', _dragStart )
    _elemento.addEventListener( 'dragover', _dragOver )
    _elemento.addEventListener( 'drop', _drop )
    _elemento.addEventListener( 'click', handleClick )


    const div__6J6U345B17 = document.getElementById( 'div__6J6U345B17' )
    div__6J6U345B17.addEventListener( 'click', OptionGames )
}

export default eventPuzzle








/*



import mezclarContenido from "../functions/mezclarContenido.js"
import ListPuzzle from "../components/ListPuzzle.js"
import OptionGame from "../components/OptionGame.js"

const eventPuzzle =( _elemento )=>{

    const Data = {
        gameStart : false,
        gameFinish: false,

        element : false,
        parent  : false,

        drop    : true,
        list    : [],
        puzzle  : [9,8,7,6,5,4,3,2,1],

        timeGameStart : '',
        timeGameshuffle : '',

        shuffle : true
    } 


    const Game = {
        start : false
    }

    sessionStorage.setItem( 'Game' , JSON.stringify( Game ) )

    const _dragOver = e => e.preventDefault()
    const _dragStart = e =>{ 
        Data.element    = e.target
        Data.parent     = e.target.parentElement 
    }

    const _drop = e =>{
        const _target = e.target
        const _parent = _target.parentElement 

        
        if( Data.gameFinish === true ) return
        if( Data.element === false ) return
        
        if( Data.element === e.target ) return 
        if( _target.classList[0] !== 'img__a9vn3h9' ) return


        _parent.replaceChild( Data.element, _target )
        Data.parent.append( _target )
    
        for (let index = 0; index < _parentPuzzle.children.length; index++) 
                Data.list.push(Number(_parentPuzzle.children[ index ].children[0].dataset.id))

        if( JSON.stringify( Data.list ) !== JSON.stringify( Data.puzzle ) ) {
            Data.element = false 
            return Data.list = []
        } 

        Data.gameFinish = true 
        
        //d.getElementById('div__K9xG7uT').classList.add('none') 
        //setTimeout(()=> alert( 'felicidades' ), 500  ) 
    }

    const showPicture =()=>{
        console.log( 'mostrar imagen de referencis' )
    }

    const shuffle =( crear = true )=>{
        mezclarContenido(Data.puzzle)
        Data.shuffle = false
        let index = 0
        const _parentPuzzle = _elemento.children[2]

        Data.timeGameshuffle = setInterval(() => {
            if( index < _parentPuzzle.children.length ){
                _parentPuzzle.children[ Data.puzzle[ index ] - 1 ].classList.toggle( 'hide' ) 
            } else {
                if( crear ) setTimeout(()=>{
                                crearNuevosPuzzle()
                            }, 300)
                else Data.shuffle = true
                return clearInterval( Data.timeGameshuffle )
            }
            index++
        }, 100); 
    }

    const crearNuevosPuzzle =()=>{
        _elemento.removeChild( _elemento.children[2] )
        ListPuzzle( false )
        shuffle( false )
    }

    const gameStart =()=>{ 
        Game.start = true
        sessionStorage.setItem( 'Game' , JSON.stringify( Game ) )

        if( !Data.shuffle ) return
        shuffle() 
    }
    /*
    const handleClick =( e )=>{ 
        const _id       = e.target.id 
        const _class    = e.target.classList[0]
        if( _id === 'button__6U1s0EFVna' ) return

        console.log( 'mamanis' )

        if( _id === 'button__b9NzC47swr' ) if( Data.drop ) gameStart()
        if( _id === 'button__Ilq0gZki03' ) shuffle(e)
        if( _id === 'button__IS9o48298p' ) if( !Data.gameStart ) showPicture()


        

        const div__wIEhWBO = document.querySelector( '.div__wIEhWBO' ) 
        if( div__wIEhWBO === e.target ) return
        if( div__wIEhWBO ) footer.removeChild( div__wIEhWBO )

        //div__C2vYbrNq0y.classList.remove( 'active' )
    }

    const OptionGames =( { target } )=>{
        const buttons = div__6J6U345B17.children[0].children 

        if( target === buttons.button__b9NzC47swr )         gameStart()
        else if( target === buttons.button__Ilq0gZki03 )    console.log( 'repetir' )
        else if( target === buttons.button__IS9o48298p )    console.log( 'ayuda' )
        else if( target === buttons.button__T46EIPkBXF )    console.log( 'lista' )
  
        if( target !== div__6J6U345B17 ) return OptionGame()
    }

    //eventos
    const _parentPuzzle = document.querySelector( '.div__j888966' )

    //const _elemento = document.querySelector( '.div__KZ8vSh9' )
    _elemento.addEventListener( 'dragstart', _dragStart )
    _elemento.addEventListener( 'dragover', _dragOver )
    _elemento.addEventListener( 'drop', _drop ) 

    const div__6J6U345B17 = document.getElementById( 'div__6J6U345B17' )
    div__6J6U345B17.addEventListener( 'click', OptionGames )
    //const div__C2vYbrNq0y = document.getElementById( 'div__C2vYbrNq0y' )
    //div__C2vYbrNq0y.addEventListener( 'click', handleClick )
 
}
export default eventPuzzle


/*const mostrarMuestra =()=>{
        if( contador < 1 ) return
        const { actualizar } = JSON.parse( sessionStorage.getItem( 'puzzle' ) )
        if( actualizar === 'false' ) return
        
        document.getElementById( 'span__wKc35hS' ).textContent = --contador
        div__DeCg73U.style.opacity = '0', 
        activo = true
    }

    const _again =()=>{
        contador = 3
        document.getElementById( 'span__wKc35hS' ).textContent = contador
        mixPuzzleItems()
    }

    const Empezar =()=>{
        div__bg1q2Ky.classList.remove( 'game' )
        div__K9xG7uT.classList.add( 'opacity' )
        button_6B53qta.style.display = 'none';
        mixPuzzleItems()
    }*/