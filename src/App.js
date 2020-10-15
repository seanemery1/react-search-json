import React, { Component } from 'react';
import './App.css';
import recipesJson from "./assets/data/recipes.json";
import SearchBox from './components/searchBox/SearchBox';
import Filter from "./components/filter/Filter";

console.log(recipesJson);
const recipes = recipesJson.recipes;
console.log(recipes);

class App extends Component{
  constructor() {
    super();
    this.state= {
      title : "",
      rateMin : 0,
      rateMax : 5,
      calories: 0,
      category: "any",
      showPopup: false
    };
  }

  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
  } 

  _search(param) {
    this.setState( {
      title : param.title,
      rateMin : param.rateMin,
      rateMax : param.rateMax,
      calories: param.calories,
      category: param.category,
      showResults: true
    })
    // console.log(this.state.title);
    // console.log(this.state.rateMin);
    // console.log(this.state.rateMax);
    // console.log(this.state.calories);
    // console.log(this.state.category);
    // console.log(this.state.showResults);
  }

  render(){
      
    return (
      <div className="App">
        {!this.state.showResults ?
        <div className="mainPage">
          <img id="logo"
          src="https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg"
          alt="[Insert Logo Here]"
          />
          <SearchBox _search={this._search.bind(this)}
          />
        </div>
        :
        <div>
          <br/>
          <button onClick={() => this.setState({
          showResults: !this.state.showResults})}>Back to Search Page</button>
          <br/>
          <Filter
          recipes={recipes}
          title={this.state.title}
          rateMin={this.state.rateMin}
          rateMax={this.state.rateMax}
          calories={this.state.calories}
          category={this.state.category}
          onClick={this.togglePopup.bind(this)}/> 
        </div>
        }
      </div>
    );
  }
}

export default App;
