const countPages =()=>{
    //console.log( 'mamanis' )
    const getData =()=> sessionStorage.getItem( 'PageCount' )
    const setData =( data )=> sessionStorage.setItem( 'PageCount', data )
    
    if( !getData() ) setData(0)  
    setData( Number(getData()) + 1 )
}

export default countPages