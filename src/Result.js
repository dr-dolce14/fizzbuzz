import React from 'react'

class Result extends React.Component {

  

   renderedResults = () => {
       return this.props.results.map((result, index) => {
           return (
           <div key={index} className='item'>
               <div className='content'>
                   <div className='header' style={result === 'fizz' || result === 'buzz' ? {color: 'red'} : {color: 'purple'}}>
                       {result}
                       
                   </div>
               </div>

           </div>
           )
       })
   }



    render() {

        return (
            <h1>{this.renderedResults()}</h1>
        )
    }
}

export default Result;
