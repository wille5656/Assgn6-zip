import React, { Component } from 'react';
import './App.css';


function City(props) {
  return (
    <>
      <div>{props.city}</div>
      <div>{props.state}</div>
      <div>{props.population}</div>
      <div>{props.latitud}</div>
    </>
    
    );
}

class App extends Component {
  constructor(){
    super()
    this.state ={
        data: []
    }
  }
 



   ZipSearchField(event) {
    event.preventDefault();
    fetch('http://ctp-zip-api.herokuapp.com/zip/'+ event.target.zip.value)
    .then(response => response.json())
    // we get a response and then we use to convert the response into json data    

    //missing code
    .then(data => {
      this.setState({
        data:data
      })
    })    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ZIP CODE SEARCH</h2>
        </div>         
        <form onSubmit= {(e)=>this.ZipSearchField(e)}>
          <input type="submit" value="Search" />
          <input id="zip" name="zip" type="text" pattern="[0-9]*"></input>
        </form>
        <div>
          {
            
            this.state.data.map((data) =>{
              return (
                <City city={data.City} state={data.State} population={data.EstimatedPopulation} latitud={data.Long}/>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;