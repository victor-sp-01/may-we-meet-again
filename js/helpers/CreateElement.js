const CreateElement =( _value )=>{
    const { 
        _type = false, 
        _class = false, 
        _id = false, 
        _html = false, 
        _style = false, 
        _prepend = false, 
        _append = false,
    } = _value
    
    const _styles = document.getElementById( 'styles' )
    //const _appends = document.getElementById( _append )
    const _element = document.createElement( _type )
            
    if( _class )    _element.setAttribute( 'class', _class )
    if( _id )       _element.setAttribute( 'id', _id )
    if( _html )     _element.innerHTML = _html
    if( _style )    _styles.innerHTML += _style
    if( _append )   _append.append( _element )
    if( _prepend )  _prepend.prepend( _element )

    return _element
}
export default CreateElement