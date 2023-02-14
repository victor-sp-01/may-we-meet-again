const Aviso =( { message, type = false } )=>{ 
        const PageCount = sessionStorage.getItem( 'PageCount' )  

        const div__5LGP2Dh = document.createElement( 'div' )
                div__5LGP2Dh.setAttribute( 'class', 'div__5LGP2Dh' )

                if( type ) div__5LGP2Dh.classList.add( type )
                
                div__5LGP2Dh.innerHTML = `<h3>${ message }</h3>`

        const root = document.getElementById( 'root' )
                root.append( div__5LGP2Dh ) 
        const  _setTimeout = setTimeout(()=> {
                if( PageCount !== sessionStorage.getItem( 'PageCount' ) ) return clearTimeout( _setTimeout )
                root.removeChild( div__5LGP2Dh )
        } , 3000 )
}
export default Aviso  