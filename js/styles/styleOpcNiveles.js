const styleOpcNiveles =()=>{
    return(`
        .div__Z50rq{
            background: rgb(0 0 0 / .3); 
            backdrop-filter: blur(2.5px);
            position: fixed; z-index: 999; inset: 0;
        }
        
        .div__ghzZC{
            position: absolute; inset: 0;
            cursor: pointer;
        }
        
        .div__oFseH{
            background: #000000;
            position: absolute; inset: 0; left: initial;
            width: min( 100%, 450px );
            display: flex; flex-direction: column;
        
            overflow-y: auto;
        }   .div__oFseH::-webkit-scrollbar{ display: none; }
        
        .header__1IMCm{ 
            position: sticky; top: 0; z-index: 10; 
            width: 100%; 
            height: auto;
        }
        
        .span__fv49t{
            background: #000000; 
            color: #ffffff;
            display: flex; justify-content: center; align-items: center;
            font-size: 25px; font-weight: bold;
            width: 100%;
            height: 80px;
        }
        
        .div__CjND3{ 
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            width: 100%; 
            padding: 20px; gap: 20px; 
        }
        
        .a__195rR{   
            position: relative; 
            display: block;
            height: 60px;
            text-decoration: none; 
        }   .a__195rR span{ 
                background: #000000;
                color: #ffffff;
                position: absolute; inset: 0; width: 100%; height: 100%;
                display: flex; justify-content: center; align-items: center; 
                font-size: 17px; font-weight: bold;  
                transition:  bottom .1s ease-in-out;
        
                border-radius: 60px;
                box-shadow: 4px 4px 4px 0 rgb(255 255 255 / .9 );
            }
            .a__195rR:hover span{ inset: initial; bottom: 5px; opacity: .5; }
        `)
}

export default styleOpcNiveles