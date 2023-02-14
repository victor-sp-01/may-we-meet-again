import { api } from "../global/api.js"
import { getData } from "../api/getData.js"
import { getLocalStorage } from "../api/getLocalStorage.js"

const Moments =async()=>{
    const urlApi = api()

    document.getElementById( 'main' ).innerHTML = `
        <div class="div__8OzbL">
            <header class="header__dZY5h" >
                <i class="fa-solid fa-image"></i>
                <h2>momentos</h2>
            </header>
            <div class="div__EV7L0" > </div>
        </div>
    ` 
    const Token = getLocalStorage( 'Token' )
    const moments = await getData( `${ urlApi }/get/moments?token=${Token }` )
 
    const html = moments.map(( moment )=>{
        return(`
            <div class="div__384v4" >
                <span class="span__HT2rz" >${ moment.muName }</span>
                <div class="div__s2hM7" id="div__${ moment.id }" ><h2 style="color:white;" >cargando...</h2></div> 
            </div>
        `)

            
    }).join( '' )
    
    document.querySelector( '.div__EV7L0' ).innerHTML = html  
    
    moments.forEach(({id}) => {  
        
        const element = document.getElementById( 'div__'+id )   
        element.textContent = '' 
        
        getData(`${ urlApi }/get/moments/${ id }?token=${Token }`)
        .then((respuesta)=>{ 
            const html = respuesta.map(({ idImage })=> `<img src="${ urlApi }/img/picture/${ idImage }.jpg" alt="">` ).join( '' )
            element.innerHTML = html
        })
    });
    
 
    





    /*
    const loadPictures =(index)=>{
        console.log( index )
        /*
        getData(`http://localhost/api_mayWeMeetAgain/get/moments/${ moment.id }?token=${Token }`)
        .then((respuesta)=>{
        console.log( respuesta )
        const html = respuesta.map(({ idImage })=> `<img src="./img/pictures/${ idImage }.jpeg" alt="">` ).join( '' )
        element.textContent  = ''
            
        element.innerHTML = html
        console.log( element.innerHTML )
        }, 2000 ) 

        return ''
    }*/
    /*
    moments.map(async( moment )=>{
        const pictures = await getData( `http://localhost/api_mayWeMeetAgain/get/moments/${ moment.id }?token=${Token }` )
        const html = pictures.map(({ idImage })=> `<img src="./img/pictures/${ idImage }.jpeg" alt="">` ).join( '' )

        const element = document.createElement( 'div' )
        element.classList.add( 'div__384v4' )

        element.innerHTML = `
            <span class="span__HT2rz" >${ moment.muName }</span>
            <div class="div__s2hM7" >
                ${ html }
            </div>
        `

        document.querySelector( '.div__EV7L0' ).append( element )
    })


    /*
    const loadContent =async()=>{
        const pictures = await getData( `http://localhost/api_mayWeMeetAgain/get/moments/${ moment.id }?token=${Token }` )
        const html = pictures.map(({ idImage })=> `<img src="./img/pictures/${ idImage }.jpeg" alt="">` ).join( '' )
    }
 
    const html = await moments.map(async( moment )=>{
        const pictures = await getData( `http://localhost/api_mayWeMeetAgain/get/moments/${ moment.id }?token=${Token }` ) 
        const html = pictures.map(({ idImage })=> `<img src="./img/pictures/${ idImage }.jpeg" alt="">` ).join( '' ) 

        return(`
                <div class="div__384v4" >
                    <span class="span__HT2rz" >${ moment.muName }</span>
                    <div class="div__s2hM7" >
                        ${ html }
                    </div>
                </div>
            `)
    }).join('')

    console.log( html )
    
    document.getElementById( 'main' ).innerHTML = `
        <div class="div__8OzbL">
            <header class="header__dZY5h" >
                <i class="fa-solid fa-image"></i>
                <h2>momentos</h2>
            </header>
            <div class="div__EV7L0" ></div>
        </div>
    `*/
}
export default Moments

//<></><img src="./img/iconos/heart.png" alt="">

/*              <div class="div__384v4" >
                    <span class="span__HT2rz" >corazones</span>
                    <div class="div__s2hM7" >  
                        <img src="./img/moments/fernanda/1.jpeg" alt="">
                        <img src="./img/moments/fernanda/2.jpeg" alt="">
                        <img src="./img/moments/fernanda/3.jpeg" alt="">
                        <img src="./img/moments/fernanda/5.jpeg" alt="">
                        <img src="./img/moments/fernanda/7.jpeg" alt=""> 
                        <img src="./img/moments/fernanda/8.jpeg" alt="">
                        <img src="./img/moments/fernanda/11.jpeg" alt="">
                        <img src="./img/moments/fernanda/18.jpeg" alt="">
                        <img src="./img/moments/fernanda/20.jpeg" alt=""> 
                    </div>
                </div>
                <div class="div__384v4" >
                    <span class="span__HT2rz" >grupo</span>
                    <div class="div__s2hM7" >    
                        <img src="./img/moments/fernanda/4.jpeg" alt=""> 
                        <img src="./img/moments/fernanda/6.jpeg" alt=""> 
                        <img src="./img/moments/fernanda/9.jpeg" alt="">
                        <img src="./img/moments/fernanda/10.jpeg" alt="">
                        <img src="./img/moments/fernanda/12.jpeg" alt="">
                        <img src="./img/moments/fernanda/13.jpeg" alt="">
                        <img src="./img/moments/fernanda/14.jpeg" alt=""> 
                        <img src="./img/moments/fernanda/15.jpeg" alt="">
                        <img src="./img/moments/fernanda/16.jpeg" alt="">
                        <img src="./img/moments/fernanda/17.jpeg" alt="">
                        <img src="./img/moments/fernanda/19.jpeg" alt="">
                    </div>
                </div> */