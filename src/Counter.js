import { useState } from "react";


function Counter(props){

    function addValue(){
        setVal((prev)=> prev +1)
    }
    const [val, setVal] = useState(props.val);
    return (
        <>
        <h1>Counter: {val}</h1>
        <button onClick= {() => {
                addValue()
                addValue()
                addValue()
            }}>Add</button>
        </>
    );
}

export default Counter