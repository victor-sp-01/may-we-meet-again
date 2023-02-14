import Aviso from "../components/Aviso.js"
import ListPuzzle from "../components/ListPuzzle.js"
import randomNumber from "../functions/randomNumbers.js"

const triggerPuzzle =( accion, Data = false )=>{
    // 
    const getData =( _data )=> JSON.parse( sessionStorage.getItem( _data ) )
    const setData =( _key, _data )=> sessionStorage.setItem( _key, JSON.stringify(_data) ) 
    const samePageCount =()=> PageCount === sessionStorage.getItem( 'PageCount' )

    const Game = getData( 'Game' ) 
    const PageCount = sessionStorage.getItem( 'PageCount' ) 
 
    const GameSart =()=>{ 
        if( Game.start ) return
        Game.start  = true 
        setData( 'Game', Game ) 

        hideItems()

        document.querySelector( '.div__KZ8vSh9' ).classList.add( 'starGame' )
        document.getElementById( 'button__833bHa25Jr' ).classList.add( 'starGame' )
        document.querySelector( '.div__KZ8vSh9' ).classList.add( 'win' )
    }
    
    const GamePlay =()=>{  
        if( Game.over ) return
        if( !Game.play ) return 

        console.log( 'mmanis' )
        replaceItem()
    }
 
    const GameRepeat =()=>{   
        if( !Game.play ) return
        Game.play = false 
        Game.over = false 
        setData( 'Game', Game )
 
        hideItems()

        document.querySelector( '.div__KZ8vSh9' ).classList.add( 'win' )
    } 

    const GameHelp =()=>{ 
        if( !Game.play ) return
        Game.play  = false 
        setData( 'Game', Game )

        showOriginalItem() 
    } 
 
    //

    const replaceItem =()=>{ 
        if( Data.element1 === Data.element2 ) return  
        if( Data.element2.classList[0] !== 'img__a9vn3h9' ) return 

        Data.parent2.replaceChild( Data.element1, Data.element2 )
        Data.parent1.append( Data.element2 )

        validatePuzzle()
    }

    const hideItems =()=>{ 
        const items = randomNumber( Data.items.length )

        const elements = document.querySelector( '.div__j888966' )
        let index = 0 

        return Data.timeHideItems = setInterval(()=>{
            if( !samePageCount() ) return clearInterval( Data.timeHideItems )
            if( index < elements.children.length ) elements.children[ items[index] - 1 ].classList.add( 'hide' )
            else {
                console.log( 'siguiente' )
                deleteItems()
                return clearInterval( Data.timeHideItems )
            }
            index++
        }, 100)
    }

    const deleteItems=()=>{
        return Data.timeDeleteItems = setTimeout(()=>{
            if( !samePageCount() ) return clearTimeout( Data.timeDeleteItems )
            ListPuzzle( true )
            showItems()
        }, 500)
    }

    const showItems =()=>{ 
        const items = randomNumber( Data.items.length )

        const elements = document.querySelector( '.div__j888966' )
        let index = 0

        return Data.timeShowItems = setInterval(()=>{
            if( !samePageCount() ) return clearInterval( Data.timeShowItems )
            if( index < elements.children.length ) elements.children[ items[index] - 1 ].classList.remove( 'hide' )
            else {
                Game.play = true
                setData( 'Game', Game )

                document.querySelector( '.div__KZ8vSh9' ).classList.remove( 'win' )
                return clearInterval( Data.timeShowItems )
            }
            index++
        }, 100)
    }

    const showOriginalItem =()=>{
        return Data.timeShowOrginalItems = setTimeout(()=> { 
            if( !samePageCount() ) return clearTimeout( Data.timeShowOrginalItems )
            Game.play = true; 
            setData( 'Game', Game ) 
        } , 2000)
    } 

    const validatePuzzle =()=>{
        const elements = document.querySelector( '.div__j888966' )

        for (let index = 0; index < elements.children.length; index++) 
                Data.data.push(Number(elements.children[ index ].children[0].dataset.id)) 

        if( JSON.stringify( Data.items ) !== JSON.stringify( Data.data ) ) return Data.data = []

        console.log( 'felicidades' )

        Game.start  = false 
        Game.play = false 
        Game.over = false 
        setData( 'Game', Game )
 
        document.querySelector( '.div__KZ8vSh9' ).classList.add( 'win' )
        Aviso({ message : 'YEAH, SO GOODDDD, JAJAJAJJA VAMOS BEIN' } )
    }
2
    //

    if( accion === 'start' ) return GameSart()
    if( accion === 'play' ) return GamePlay()
    if( accion === 'repeat' ) return GameRepeat()
    if( accion === 'help' ) return GameHelp()
}

export default triggerPuzzle