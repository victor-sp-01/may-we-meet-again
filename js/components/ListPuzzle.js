import urlParams from "../functions/urlParams.js"


import CreateElement from "../helpers/CreateElement.js"
import randomNumber from "../functions/randomNumbers.js"
const ListPuzzle =( _ramdom = false )=>{

    const path = urlParams()

    console.log( path )

    const { typeGame, idGame, level } = JSON.parse( sessionStorage.getItem( 'Puzzle' ) ) 
    const items = randomNumber( level * level )  

    const element = document.querySelector( '.div__j888966' )
            element.textContent = ''
    
    const htmlElement = document.createDocumentFragment()

    for (let index = 1; index <= items.length; index++) {
        const data = _ramdom ? items[ index - 1 ] : index
        
        const div__2ZD16pN = CreateElement( { 
            _type   : 'div', 
            _class  : 'div__2ZD16pN',
            _prepend : htmlElement,
            _html   : `<img class="img__a9vn3h9" data-id="${ data }"  src="./img/${ typeGame }/${ idGame }/${ level }/${ data }.jpg" alt="">`
        } )

        if( _ramdom ) div__2ZD16pN.classList.add( 'hide' )
    }

    element.append( htmlElement )
}
export default ListPuzzle 