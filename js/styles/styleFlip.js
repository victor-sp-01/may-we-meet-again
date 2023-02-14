import { getSessionStorage } from "../api/getSessionStorage.js"
import randomNumbers from "../functions/randomNumbers.js"

const styleFlip =()=>{

    const { items } = JSON.parse( getSessionStorage( 'Game' ) )

    const _grid = items / 2 
    const maxGrid = _grid <= 7 ? _grid : 7 
 
    const array = randomNumbers( 4 )
    let i = 0  

    return(`
        .div__e2teE{ 
            margin: auto; 
        
            display: grid;
            justify-content: center; 
            align-content: center;
        
            grid-template-columns: repeat(${ maxGrid }, minmax(50px, 250px));    
        
            width: 100%; 
            height: 100%;
            gap: 20px;
        }   .div__e2teE.active .button__k6OOV .div__p8D1J.back{ transform: rotatey(-180deg) } 
            .div__e2teE.active .button__k6OOV .div__p8D1J.front{ transform: rotatey(0deg) }
            .div__e2teE.over::after{
                content: ''; 
                position: absolute; inset: 0;
            }
        
        .button__k6OOV{
            background: none;
            position: relative;
            outline: none;
            border: none; 
            perspective: 1000px;    
            transform-style: preserve-3d;
            cursor: pointer;
            pointer-events: initial;
        
            animation: _active 1s
        }   .button__k6OOV:hover{ opacity: .5 }  
            .button__k6OOV.active { pointer-events: none; }
            .button__k6OOV.finish { opacity: .75; }
            .button__k6OOV.active .div__p8D1J.back{ transform: rotatey(-180deg) }  
            .button__k6OOV.active .div__p8D1J.front{ transform: rotatey(0deg) }
            .div__e2teE .button__k6OOV:nth-child( 4n + ${ array[ i++ ] } )::after{ animation: _top 1s }
            .div__e2teE .button__k6OOV:nth-child( 4n + ${ array[ i++ ] } )::after{ animation: _bottom 1s } 
            .div__e2teE .button__k6OOV:nth-child( 4n + ${ array[ i++ ] } )::after{ animation: _left 1s }
            .div__e2teE .button__k6OOV:nth-child( 4n + ${ array[ i++ ] } )::after{ animation: _right 1s }
            .button__k6OOV::after{
                content: '';
                background: #ffffff;
                position: absolute; inset: 0;
                display: flex;
                border-radius: 5px; 
                opacity: 0;
            }
        
        .div__p8D1J{
            position: absolute; inset: 0;
            display: flex; justify-content: center; align-items: center; 
        
            backdrop-filter: 30px;
            backface-visibility: hidden;
            transform-style: preserve-3d; 
            transition: .5s cubic-bezier( .4, .2, .2, .1 ); 
        
            border-radius: 5px;
            overflow: hidden;
        
            box-shadow: 0 0 10px 0 rgb( 181 178 178 / .25);
            opacity: 1;
            animation: _deactive 1s
        
        }   .div__p8D1J.back{ background: #ffffff; transform: rotatey(0deg); }
            .div__p8D1J.front{ background: none; transform: rotatey(180deg); }
        
        .img__Pms28{ opacity: 0; width: 100%; }
        .img__FD8kE{
            width: 100%;
            height: 100%;
        }
     
        
    
        @keyframes _top{
            from{
                top: -1000px;
                opacity: 0;
                transform: scale(0);
            }
            to{ 
                top: 0;
                opacity: 1;
                transform: scale(1);
            }
        }
    
        @keyframes _left{
            from{
                left: -1000px;
                opacity: 0;
                transform: scale(0);
            }
            to{ 
                left: 0;
                opacity: 1;
                transform: scale(1);
            }
        }
    
        @keyframes _right{
            from{
                right: -1000px;
                opacity: 0;
                transform: scale(0);
            }
            to{ 
                right: 0;
                opacity: 1;
                transform: scale(1);
            }
        }
    
        @keyframes _bottom{
            from{
                bottom: -1000px;
                opacity: 0;
                transform: scale(0);
            }
            to{ 
                bottom: 0;
                opacity: 1;
                transform: scale(1);
            }
        }
    
        @keyframes _active{
            0%{ pointer-events: none; }
            100%{ pointer-events: none; } 
        }
    
        @keyframes _deactive{
            0%{ opacity: 0; }
            100%{ opacity: 0; } 
        }
        
     
        @media only screen and (max-width: 1000px)  { 
            .div__e2teE{
                grid-template-columns: repeat(4, minmax(50px, 1fr));
            }
             
        }

        @media only screen and (max-width: 500px)  { 
            .div__e2teE{
                grid-template-columns: repeat(3, minmax(50px, 1fr));
            }
             
        }
    `)
}   

export default styleFlip 