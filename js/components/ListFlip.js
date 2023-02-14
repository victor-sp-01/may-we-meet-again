import urlParams from "../functions/urlParams.js"
import randomNumbers from "../functions/randomNumbers.js"
import mixContent from "../functions/mixContent.js"

import { getSessionStorage } from "../api/getSessionStorage.js"

const ListFlip =()=>{

    const [ , typeGame, idGame ] = urlParams() 
 
    const element = document.querySelector( '.div__e2teE' )
    const list_element = document.createDocumentFragment()
    element.textContent = ''

    const { items } = JSON.parse( getSessionStorage( 'Game' ) ) 
    const number1 =  randomNumbers( items / 2 )
    const number2 = mixContent( [ ...number1, ...number1] )    

    for (let index = 0; index < items; index++) { 
        const dataID = number2[ index ] 
        const button = document.createElement( 'button' )
                button.setAttribute( 'class', 'button__k6OOV' )
                button.setAttribute( 'data-id', dataID )
                button.innerHTML = `
                <img class="img__Pms28" src="./img/iconos/cuadrado.png" alt="">
                <div class="div__p8D1J back" ><img class="img_cm9CU"  class="img__QL62c" src="./img/iconos/anonimo (1).png" alt=""></div>
                <div class="div__p8D1J front" > <img class="img__FD8kE" src="./img/games/${ typeGame+'/'+idGame+'/1_'+dataID }.jpeg" alt=""> </div>
                `  
        
        list_element.append(button )
    }

    element.append( list_element )
}

export default ListFlip














/*import CreateElement from "../helpers/CreateElement.js";

const ListFlip =()=>{
    const _hash = location.hash.slice( 1 )   
    const nivel = Number( _hash.split('/')[ 2 ] )  

    const d = document
    const _parentElement = d.getElementById( 'div__5UzS552A2n' )
    const div__43B952XnYD   = d.getElementById( 'div__43B952XnYD' )
    const listButton = d.createDocumentFragment()

    _parentElement.textContent = ''
    div__43B952XnYD.textContent = ''

    const mezclarFlip =( numero )=>{
        const flip1 = []
        const flip2 = []
 
        for (let index = 1; index <= numero; index++) {
            flip1.push( index )
            flip2.push( index )   
            const span__KK9C8rM = d.createElement( 'span' )
            span__KK9C8rM.setAttribute( 'class', 'span__KK9C8rM' )
            span__KK9C8rM.innerHTML = `<i class="fa-solid fa-heart"></i>`
            div__43B952XnYD.append( span__KK9C8rM ) 
            
        }
        const flip3 = flip1.concat(flip2); 
        const flip4 = [] 

        while( flip3.length ) flip4.push(flip3.splice( Math.floor(Math.random() * flip3.length), 1 )[0]) 
        return flip4
    } 

    const flip = mezclarFlip( nivel )
  
    for (let index = 0; index < flip.length; index++) {  
        const button__Hm599Hu = CreateElement({
            _type   : 'button',
            _class  : 'button__Hm599Hu',
            _html   : `
                <div class="div__550b835 back" ><img class="img_izI7A8M"  class="img__QL62c" src="./img/iconos/anonimo (1).png" alt=""></div>
                <div class="div__550b835 front" ><img class="img__2ny90WP" src="./img/flip/1_${ flip[ index ] }.jpeg" alt=""></div>
            `
        })

        button__Hm599Hu.setAttribute( 'data-id', flip[ index ] )
        listButton.append( button__Hm599Hu ) 
    }

    _parentElement.append( listButton )
    d.querySelector( '.contenido__oC5c1vZ' ).append( _parentElement )
}
export default ListFlip*/