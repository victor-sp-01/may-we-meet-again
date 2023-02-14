const stylePuzzle =()=>{

    const { level } = JSON.parse( sessionStorage.getItem( 'Puzzle' ) ) 

    //const _hash = location.hash.slice( 1 )
    //const nivel = Number( _hash.split('/')[ 3 ] ) ? Number( _hash.split('/')[ 3 ] ) : 3 

    return(`
        .div__KZ8vSh9{ 
            margin: auto; 
            position: relative;
            display: flex; justify-content: center; align-items: center;

            width: min( 100%, 750px );
            border-radius: 5px;
            overflow: hidden;  
        }   .div__KZ8vSh9::after{
                content: '';
                position: absolute; top: 0; bottom: 0; left: 0; right: 0; 
                background: rgb( 0 0 0 / .5 );
                backdrop-filter: blur( 5px );
            }
            .div__KZ8vSh9.starGame::after{ display: none; }
            .div__KZ8vSh9.win::after{ 
                display: flex;
                background: rgb( 0 0 0 / .1 );
                backdrop-filter: blur( 0 );
            }
        
        .div__j888966{  
            position: absolute; top: 0; bottom: 0; left: 0;right: 0;

            background: #ffffff;
            display: grid;
            grid-template-columns: repeat(${ level },1fr);
            grid-template-rows: repeat(${ level },1fr);
        }

        .div__2ZD16pN{
            background: black;
            position: relative;
            transition: opacity .8s ease-in-out;
        }   .div__2ZD16pN.hide{ opacity: 0;  } 

        .img__a9vn3h9{
            position: absolute; top: 0; left: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }   .img__a9vn3h9:hover{ opacity: .7; } 

        .img__DO0Gp5c{ 
            position: relative;
            display: block;
            width: 100%;
            opacity: 0; 
            pointer-events: none; 
        }

        .button__1vRjJwq{
            position: absolute; z-index: 9;
            background: none;
            color: #ffffff;
            border: none;
            outline: none;
            box-shadow: 0 0 0 1.25px #ffffff;
            border-radius: 48px;
            
            padding: 16px 48px;
            font-size: 16px;
            cursor: pointer; 
        }   .button__1vRjJwq:hover{ opacity: .5; }
            .button__1vRjJwq.starGame{ display:none }
    `)
}
export default stylePuzzle