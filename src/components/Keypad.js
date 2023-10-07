// Code Keypad Component Here

function Keypad (){
    function changeHandler(event){
        console.log('Entering password...' )
    }
    return (
        <div>
            <input type="password"
            onChange={changeHandler}  /> 
        </div>
    )
}

export default Keypad;