const styleGames =()=>{
    return(`
        .contenedor__oC5c1vZ{ 
            position: relative;
            display: grid; 
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;  
        
            width: 100%;
            height: 100%;
        }
        
        .div__owkDj{  
            display: flex; flex-direction: column;
            
        }   .div__owkDj::-webkit-scrollbar{ display: none; }
        
        .header_TdG0I{ 
            background: #000000;
            position: fixed; z-index: 999; inset: 0; height: 100px;
            display: flex; align-items: center; justify-content: center;
            padding: 0 20px;
            text-align: center;
        } 
        
        .span__T3ZLH{
            font-size: 25px; font-weight: bold;
            color: #ffffff;
            overflow: hidden;
        
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        
        .div__m9Qc1{ 
            margin-top: 100px; 
            display: flex;
            flex-wrap: wrap; justify-content: center;
            padding: 20px; gap: 20px; padding-top: 1.25px;
        }
        
        .a__8HRRN{
            background: #000000;
            color: #ffffff;
            position: relative;
            display: flex;
            justify-content: center; align-items: center;
        
            min-width: min( 100%, 250px );
            height: 250px;
            
            text-decoration: none;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 0 0 1.25px #ffffff;
            }.a__8HRRN::before{
                content: '';
                position: absolute;
                background: #ffffff;
                width: 1px;
                height: 1px;
                border-radius: 50%;
                transition: transform .3s ease-in-out; 
            }
            .a__8HRRN:hover::before{  transform: scale( 500 ) }
            .a__8HRRN:hover .span__1Yu7x{  color: #000000 }
        
        .span__1Yu7x{
            position: relative;
            font-size: 20px;
            font-weight: bold;
            color: #ffffff;
            transition: color .3s ease-in-out;
        }
        
        .header_JGkaY{ 
            background: #000000;
            position: fixed; z-index: 999; inset: 0; height: 100px;
            display: flex; justify-content: space-between; align-items: center; 
            padding: 0 40px; gap: 20px;  
        } 
        
        .div__jkSb0{
            display: flex;
            gap: 20px;
        }
        
        .button__D3mwG{
            position: relative;
            background: none;
            color: #ffffff;
            outline: none;
            border: none; 
        
            display: flex; justify-content: center;
            align-items: center;
        
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
        }   .button__D3mwG i{ position: relative; font-size: 15px; }
            .button__D3mwG:hover{ opacity: .5; } 
            .button__D3mwG::before{
                content: '';
                background: #ffffff;
                position: absolute; bottom: 0; left: 15%;
                width: 75%;
                height: 1.25px;
                border-radius: 1.25px;
            }
            .button__D3mwG:hover::before{ left: 0; width: 100%; }
            
            .button__D3mwG::after{ content: ''; position: absolute; inset: 0 }
            .button__D3mwG.game{ animation: _game  var(--i); }
            .button__D3mwG.disable{ pointer-events: none; opacity: .5 }
            .button__D3mwG.icon{ pointer-events: none; color: red; } 
            .button__D3mwG.icon::before{ background: red; }
        
        .span__Ra8WS{
            background: #000000;
            position: absolute; bottom: 60%; left: 60%;
        
            font-size: 15px;
            min-width: 20px;
            height: 17px;
        }
        
        .div__6Ex2R{ 
            display: flex;
            width: 100%;
            height: 100%; 
            padding: 120px 20px 100px;
        }
        
        .footer__KZJcb{ 
            background: #000000;
            position: fixed; z-index: 999; inset: 0; top: initial; 
            display: flex; justify-content: center; gap: 20px; padding: 20px;
        }
        
        .button__Lh6hK{
            background: #ffffff;
            outline: none;
            border: none;
        
            color: #000000;
            overflow: hidden;
            
            display: flex; justify-content:center; align-items:center;

            width: 120px;
            height: 40px;
            border-radius: 40px;
        
            cursor: pointer;
            font-size: 20px; font-weight: bold;
            text-decoration:none;
        }   .button__Lh6hK:hover{ opacity: .5; }

        @keyframes _game{
            0%{ pointer-events: none; opacity: .5; } 
            100%{ pointer-events: none; opacity: .5; }
        }
     
    `)
}

export default styleGames
/*
    button__Lh6hK
const styleGames =()=>{
    return( `
        .contenedor__oC5c1vZ{ 
            display: grid;
            grid-template-columns: 200px 1fr 200px;
            grid-template-rows: auto 1fr auto; 
            grid-template-areas:    "header header header"
                                    "contenido contenido contenido"
                                    "before footer after"
            ;
        
            gap: 20px;
            width: 100%;
            height: 100%; 
            padding: 20px; 
        
            overflow: hidden; 
        }
        
        .header__oC5c1vZ{
            grid-area: header;
            position: relative; z-index: 50;
            display: flex; justify-content: space-between; align-items: center;
            height: auto; 
        }
        
        .div__3xk183g{  
            position: relative;
            display: flex; align-items: center; gap: 20px;
            height: 50px;
            width: auto;   
        } 
        
        .button__t01E76S{
            background: #000000;
            color: #ffffff;
            
            outline: none;
            border: none;
            border-radius: 50%;
        
            width: 40px;
            height: 40px;
            cursor: pointer;
        }   .button__t01E76S:hover{ opacity: .5; }
        
        .span__G52Hrnr{ font-size: 16px; font-weight: bold; }
        
        .div__cK9x3uh{
            display: flex; justify-content: right;
            gap: 5px;
            pointer-events: none;
        }
        .span__KK9C8rM{ font-size: 20px; } 
        
        .contenido__oC5c1vZ{ 
            grid-area: contenido;
            display: flex;  
            overflow-y: auto;
            height: calc(100vh - (4 * 20px) - (60px + 50px));
        
        }   .contenido__oC5c1vZ::-webkit-scrollbar{ display: none; } 
        .button__oC5c1vZ{
            background: #ffffff;
            position:relative;
            display:flex; justify-content: center; align-items:center;
            color: #000000; 
            text-decoration: none;
            margin: auto;
        
            width: 60px;
            height: 60px;
            font-size: 16px; font-weight: bold;
        
            outline: none;
            border: none;
            border-radius: 50%;
            box-shadow: 0 0 3px 0 rgb(0 0 0 / .25);
            cursor: pointer;
        }   .button__oC5c1vZ.before{ grid-area: before }
            .button__oC5c1vZ.after{ grid-area: after }
            .button__oC5c1vZ.opc{ margin: auto; position: relative; }
            .button__oC5c1vZ:hover{ box-shadow: 0 0 7.5px 0 rgb(0 0 0 / .25); }
            .button__oC5c1vZ::after{ content: ""; position: absolute; top: 0; bottom: 0; left: 0; right: 0; }
            
            
        .footer__iRG26lI{
            grid-area: footer; 
        
            position: relative; z-index: 5;
            display: flex; justify-content: center;
        }  
        .div__wIEhWBO{
            background: #ffffff;
            position: absolute; bottom: 30px; 
            display: flex;
        
            width: 300px;
            height: auto;
            padding-top: 20px ;
            box-shadow: 0 0 2.5px 0 rgb(181 178 178);
            border-radius: 10px;
            opacity: 1;
            transition: bottom .3s ease-in-out;
        }    
            .div__wIEhWBO::before{ content: ""; position: absolute; top: 0; bottom: 0; left: 0; right: 0; }
        
        .div__82F7Wb8{  
            margin: 0 auto;
            margin-bottom: 15px; 
        
            display: flex; flex-direction: column;
            width: 50px;
            max-height: 350px;
            gap: 20px;
            overflow-y: auto;
        }   .div__82F7Wb8::-webkit-scrollbar{ display: none; }
        
        .button__Ah0jHZK{
            background: #000000; 
            color: #ffffff;
            position: relative;
            outline: none;
            border: none;
            border-radius: 50%;
            box-shadow: 0 0 2.5px 0 rgb(0 0 0 / .25);
        
            width: 50px; min-height: 50px; 
            font-size: 16px; font-weight: bold;
        
            cursor: pointer;
            overflow: hidden;
        }   .button__Ah0jHZK:hover{ opacity: .5; }
            .button__Ah0jHZK::after{ content: ""; position: absolute; top: 0; bottom: 0; left: 0; right: 0;  }
            
        .div__5LGP2Dh{
            background: #3cb371;
            position: absolute; top: 50px; left: 50%;
            transform: translateX(-50%);
            width: min( 100%, 500px );
            padding: 20px;
        
            border-radius: 5px;
            text-align: center;
            color: #ffffff;
            opacity: 1;
        
            animation: aviso 4s;
        }   .div__5LGP2Dh.error{ background:red }
        
        @keyframes aviso{
            0%{
                top: -500px;
                opacity: 0;
            }
            20%{
                top: 50px;
                opacity: 1;
            }
            80%{
                top: 50px;
                opacity: 1;
            }
            100%{
                top: -500px;
                opacity: 0;
            }
        }
        
        @media only screen and (max-width: 890px)  { 
            .header__oC5c1vZ{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
            }
            .contenedor__oC5c1vZ{ 
                grid-template-columns: repeat(3, 1fr);
                grid-template-areas:    "header header header"
                                        "contenido contenido contenido"
                                        "before footer after";
            } 
        }
    ` )
}

export default styleGames*/