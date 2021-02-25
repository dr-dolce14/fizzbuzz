import React, {useState, useEffect} from 'react'

const Form = () => {
    const [term, setTerm] = useState(0)
    const [results, setResults] = useState([])

  const finalResults = (e) => {
      e.preventDefault()
      console.log(parseInt(term) + 2)
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
        </div>
        </div>
        )

}

export default Form;
