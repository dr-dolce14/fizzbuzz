import React, {useState, useEffect} from 'react'
import Result from './Result'

const Form = () => {
    const [term, setTerm] = useState(0)
    const [results, setResults] = useState([])

//   const finalResults = (e) => {
//       e.preventDefault()
//       for (let i = 1; i <= term; i++) {
//         //is the number a multiple of 3 and 5?
//         if (i % 3 === 0 && i % 5 === 0) {  //could also just do i % 15 === 0
//             console.log('fizzbuzz');
//             //  if we meet this case, we don't any execute any other code inside the for loop...so we use else if statements instead of separate if statements
//         } else if (i  % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
//   }

function fizzBuzz(n) {
    let arr = []
    // can't do (let x of y) because there isn't anything to iterate over
    for (let i = 1; i <= n; i++) {
        //is the number a multiple of 3 and 5?
        if (i % 3 === 0 && i % 5 === 0) {  //could also just do i % 15 === 0
            arr.push('fizzbuzz');
            //  if we meet this case, we don't any execute any other code inside the for loop...so we use else if statements instead of separate if statements
        } else if (i  % 3 === 0) {
            arr.push('fizz');
        } else if (i % 5 === 0) {
            arr.push('buzz');
        } else {
            arr.push(i);
        }
    }
    setResults(arr)
}
    const finalResults = (e) => {
        e.preventDefault()
        return fizzBuzz(term)
    }

   

  


    return (
        <div>
            <div className="ui form">
            <div className="field" >
                <form onSubmit={(e) => finalResults(e)}>
                <label>Enter Search Term</label>
                <input 
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  
                  className="input"/>
                  </form>
            </div>
        </div>
        <div className="ui celled list">
            <Result results={results}/>
            
        </div>
        </div>
        )

}

export default Form;
