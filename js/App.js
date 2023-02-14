import Introduce from "./pages/Introduce.js"
import countPages from "./helpers/countPages.js"
import Routes from "./Routes/Routes.js"
 
const App =()=>{
    const d = document 
    const root = d.getElementById( 'root' )
    let main = d.getElementById( 'main' ) 

    if( main ) root.removeChild( main )

            main = d.createElement( 'main' )
            main.setAttribute( 'class', 'main' )
            main.setAttribute( 'id', 'main' )

    root.innerHTML = '' 
    root.append( main )
    document.getElementById( 'styles' ).innerHTML = ''
 
    Routes()
    countPages()   
}

export default App