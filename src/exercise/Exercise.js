import {useState} from 'react';




function Exercise (){
    
    const [num, setNum] = useState(1);
    const addNum =() => setNum(num + 1);
        

    return (
        <div>
            <button onClick={()=>alert(`Congratulations! you clicked the button`)}>Click Here</button>
            <button onClick={addNum}>STATE</button>
            <h1>{num}</h1>
        </div>
    )
 
}



export default Exercise;