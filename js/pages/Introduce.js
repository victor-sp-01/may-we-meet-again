import { api } from "../global/api.js"
import { getData } from "../api/getData.js"
import { getLocalStorage } from "../api/getLocalStorage.js"

const Introduce =async()=>{
    const urlApi = api()

    const Token = getLocalStorage( 'Token' )
    const Introduce = await getData( `${ urlApi }/get/introduceuser?token=${Token }` )
 
    const _word = 'HELLO...' 
    const _word2 = Introduce[0].userName 

    let _html = '' 
    let _time = 0

    for (let index = 0; index < _word.length; index++) { 
        
        _html +=`<span class="span__85uV9" data-text="${_word[index]}" style="--i: ${ _time }s" >${_word[index]}</span>`
        _time += 1 
    } 

    const _page2 = Introduce[0].words 

    const _page3 = `
        FELIZ 14
    `

    const element = document.createElement('div')
            element.classList.add( 'div__13gSQ' )

            element.innerHTML = `
                <span class="span__3BAPC" ></span>
                <div class="div__8D1Yg">
                    <div class="div__0PqF4" >
                        <div class="div__k8aqm">
                            <div class="div__C98Lw" >${ _html }</div> 
                            <div class="div__9P6y5" >
                                <span class="span__WH4fN one" >${_word2}</span>
                                <span class="span__WH4fN two" >${_word2}</span>
                            </div>
                        </div>
                    </div>

                    <div class="div__0PqF4" > 
                        <div class="div__8Ps66" >
                            <div class="div__uoPN9c74Cn" ><img src="./img/icons/dayFriendShip.jpg" alt=""></div> 
                        </div>
                    </div> 

                    <div class="div__0PqF4" > 
                        <div class="div__8Ps668" >
                            <span class="span__0zNTd" >${ _page2 }</span>
                        </div> 
                        <a class="a__Lfsrr" href="#momentos" >momentos</a>
                    </div> 
                </div>  

                <div class="div__3BAPC" > </div>

            `

    document.getElementById( 'main' ).append( element )



    const childrens = document.querySelector( '.div__8D1Yg' ).children 


    let _htmlFocus = ''

    for (let index = 0; index < childrens.length; index++) 
        _htmlFocus += ` <span data-id="${ index }" class="span__9oO9E ${ index === 0 ? 'focus' : '' }"></span> `


    const div__3BAPC = document.querySelector( '.div__3BAPC' )
    div__3BAPC.innerHTML = _htmlFocus

    div__3BAPC.addEventListener( 'click', (e)=>{
        if( e.target.classList[0] !== 'span__9oO9E' ) return
        childrens[ e.target.dataset.id ].scrollIntoView({block: "end", behavior: "smooth"})
        
        for (let index = 0; index < div__3BAPC.children.length; index++)
            if( div__3BAPC.children[ index ].classList.contains( 'focus' ) ) div__3BAPC.children[ index ].classList.remove( 'focus' )
            e.target.classList.add( 'focus' )
 
    } )
 
}

export default Introduce

//<></>