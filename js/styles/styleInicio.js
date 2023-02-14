const styleInicio =()=>{
    return(`
        .div__DilLI{  
            position: relative;
            display: flex;
            min-width: 100%;
            height: 100%;  
            padding: 20px;
            scroll-snap-align: center;
        } 
        
        .div__n6ewe{
            margin: auto;
            display: grid;
            grid-template-columns: 1fr; 
            gap: 20px;
        
            width: min( 100%, 350px );
        }
        
        
        .button__Uwcw5{
            background: none;
            position: relative;
            color: #ffffff;
            outline: none;
            border: none;
            border-radius: 40px;
            box-shadow:  0 0 0 1.25px #ffffff;
        
            display: flex;
            gap: 20px;
        
            padding: 20px 40px;
            text-align: 16px;
            font-weight: bold;
        
            overflow: hidden;
            cursor: pointer;
            text-decoration: none;
            
        }   .button__Uwcw5:hover{ opacity: .5; box-shadow:  0 0 5px 1.25px #ffffff; }
            .button__Uwcw5::after{ content: ''; position: absolute; inset: 0; }
    `)
}

export default styleInicio