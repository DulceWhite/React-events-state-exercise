import {useState} from 'react';

// function Bonus (){
    
//     const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
//     const [letter, setLetter] = useState([letters[0]]);
   
//     function iterLet (letters) {
//        for (let i=0; i<letters.length; i++){
//            return letters[i];
//          }
        
//    }
//    const newLetter = () => setLetter({iterLet});
   
  

//     return (
//         <div>
//             <h1>{letter}</h1>
//             <button onClick={newLetter}>Next Letter</button>
            
//         </div>
//     )

// }

export default Bonus;

// Solution to Bonus

// 3b
function Bonus(){
    // 3d
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
    // 3h
    const [letterCount, setLetterCount] = useState(0);
  
    // 3e
    return(
      <div>
        <h1>{letters[letterCount]}</h1>
        <button onClick={() => (letterCount === letters.length - 1) ? setLetterCount(0) : setLetterCount(letterCount + 1)}>NEXT LETTER</button>
        {/* OR */}
        {/* <button onClick={() => (letterCount < letters.length - 1) ? setLetterCount(nextLetter + 1) : setLetterCount(0)}>NEXT LETTER</button> */}
        {/* OR */}
        {/* <button onClick={() => setLetterCount(letterCount + 1)}>NEXT LETTER</button> */}
      </div>
    );
  }