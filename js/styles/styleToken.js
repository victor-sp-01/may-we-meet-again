const styleToken =()=>{
    return( 
    `.form__v7QSy{   
        position:relative;
        display:flex;
        min-width:100%;
        height:100%;
        scroll-snap-align: center;
    }  

    .div__v87eK{
        margin:  auto; 
        display: grid;
        grid-template-columns: 1fr;
        width: min( 100%, 300px );
        gap: 20px; padding: 20px;   
    }
    
    .input__FGbsT{ 
        background: none;
        color: #ffffff;
        outline: none;
        border: none;
        text-align: center;
        box-shadow:  0 0 0 1.25px #ffffff;
        border-radius: 40px;
    
        
        padding: 20px 40px;
        text-align: 16px;
        font-weight: bold;
    
    }   .input__FGbsT:focus{ box-shadow: 0 0 5px 1.2px #ffffff }
        .input__FGbsT.error{ box-shadow: 0 0 5px 1.2px #bb1818 }
        .input__FGbsT.validate{ box-shadow: 0 0 5px 1.2px #18bb2e }
    
    .button__i5lqF{
        background: #ffffff;
        outline: none;
        border: none;
        border-radius: 40px;
        box-shadow:  0 0 0 1.25px #ffffff;
    
        padding: 20px 40px;
        text-align: 16px;
        font-weight: bold;
    
        cursor: pointer;
    }   .button__i5lqF:hover{ opacity: .5; }
    `)
}

export default styleToken