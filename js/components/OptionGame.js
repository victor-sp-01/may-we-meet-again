import { getSessionStorage } from "../api/getSessionStorage.js"

const OptionGame =( _delay = false )=>{ 
    const { start, play, help, life } = JSON.parse( getSessionStorage( 'Game' ) ) 
    const _classGame = play ? '' : 'game'
    const _time = `${ _delay ? 2 : 1}s` 

    document.querySelector( '.div__jkSb0' ).innerHTML = `
        <button class="button__D3mwG" id="btn__jC2ovic" ><i class="fa-solid fa-list-ol"></i></button> 
        ${ start ?
            ` 
            <button class="button__D3mwG ${ _classGame }" style="--i:${ _time };" id="btn__47f36T1" ><i class="fa-solid fa-repeat"></i></button>
            <button class="button__D3mwG ${ help <= 0 ? 'disable' : _classGame }" style="--i:${ _time };" id="btn__UGGD21P" ><span class="span__Ra8WS" >${ help }</span><i class="fa-solid fa-eye"></i></button>
            <button class="button__D3mwG icon" id="btn__M20D14o" ><span class="span__Ra8WS" >${ life }</span><i class="fa-solid fa-heart"></i></button>
            `
            :
            `<button class="button__D3mwG ${ _classGame }" style="--i:${ _time };" id="btn__d8TfrLn"><i class="fa-solid fa-play"></i></button>`
        }
    `
}
export default OptionGame











/*const getGame =()=> JSON.parse( sessionStorage.getItem( 'Game' ) )
    const div__6J6U345B17 = document.getElementById( 'div__6J6U345B17' )
    
    if( div__6J6U345B17.children.length === 0 ){
        const Game = getGame() 

        div__6J6U345B17.innerHTML = `
        <div class="div__82F7Wb8">
            ${ Game.start ? '' : `<button class="button__Ah0jHZK" id="button__b9NzC47swr" ><i class="fa-solid fa-play"></i></button>` }
            ${ Game.play ? `<button class="button__Ah0jHZK" id="button__Ilq0gZki03" ><i class="fa-solid fa-repeat"></i></button>` : ''  }
            ${ Game.play ? `<button class="button__Ah0jHZK" id="button__IS9o48298p" ><i class="fa-solid fa-eye"></i></button>` : '' }
            <button class="button__Ah0jHZK" id="button__T46EIPkBXF" ><i class="fa-solid fa-list-ol"></i></button>
        <div class="div__82F7Wb8">
        `
    } else div__6J6U345B17.textContent = ''


    div__6J6U345B17.style.display = ( div__6J6U345B17.children.length === 0 ) ? 'none' : 'flex'*/
 