import { getLocalStorage } from "../api/getLocalStorage.js"
import { getData } from "../api/getData.js"
import urlParams from "../functions/urlParams.js"
import styleOpcNiveles from "../styles/styleOpcNiveles.js"

const OpcNiveles =async()=>{

    const [ ,typeGame, idGame, level ] = urlParams() 
    const Token = getLocalStorage( 'Token' )
    const niveles = await getData( `http://localhost/api_mayWeMeetAgain/get/games/${ typeGame+'/'+idGame+'?token='+ Token }` )
    
    console.log( niveles ) 

    const styles = document.getElementById( 'styles' )
    const root = document.getElementById( 'root' )

    const oldStyles = styles.innerHTML

    const eventOpcNiveles =(element)=>{
        const handleClick =()=>{
            styles.innerHTML = oldStyles
            root.removeChild( element ) 
        }
        document.getElementById( 'div__yqv3l2G' ).addEventListener( 'click' , handleClick )
    }

    styles.innerHTML += styleOpcNiveles()
    const element = document.createElement( 'div' )
        element.classList.add( 'div__Z50rq' )
        element.innerHTML = `
            <div class="div__ghzZC" id="div__yqv3l2G" ></div>
            <div class="div__oFseH" >
                <header class="header__1IMCm" >
                    <span class="span__fv49t">niveles</span>
                </header>

                <div class="div__CjND3" >
                     
                </div> 
            </div>
        `
    
    root.append( element )
    eventOpcNiveles( element )

    const listDiv__CjND3 = document.createDocumentFragment() 

    listDiv__CjND3.innerHTML = niveles.map( (niveles)=>{ 
        return( `${ niveles.level === level ? '' : `<a class="a__195rR" href="#games/${ typeGame }/${ idGame }/${ niveles.level }" ><span>${ niveles.level }</span> </a>`}` ) 
    }).join('')
    document.querySelector( '.div__CjND3' ).innerHTML = listDiv__CjND3.innerHTML
}
export default OpcNiveles


//<></>

/*<a class="a__195rR" href > <span>1</span> </a>
                    <a class="a__195rR" href > <span>2</span> </a>
                    <a class="a__195rR" href > <span>3</span> </a> 
                    <a class="a__195rR" href > <span>4</span> </a>
                    <a class="a__195rR" href > <span>5</span> </a>
                    <a class="a__195rR" href > <span>6</span> </a> 
                    <a class="a__195rR" href > <span>7</span> </a> */