import React, { Component } from 'react';
import "./SearchBox.css";

class SearchBox extends Component{
    constructor() {
        super();
        this.state= {
          title : "",
          rateMin : 0,
          rateMax : 5,
          calories: 0,
          category: "Any",
          showResults: false
        };
        this._updateState = this._updateState.bind(this);
        this._search = this._search.bind(this);
        
      }
    
      _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          console.log("success");
          this._search();
        }
      }

      _updateState({ target }) {
        this.setState({
          [target.name]: target.value
        });
      }

      _search() {
        this.setState({ showResults: true});
        this.props._search(this.state);
      }    

    render(){
   
            return(
                <div className="searchBox">
                    <h1> "Enoy our recipes!"</h1>
                    <div>
                    <input
                    type="text"
                    name="title"
                    id="inputTitle"
                    placeholder="Search for recipes..."
                    value={this.state.title}
                    onChange={this._updateState}
                    onKeyDown={this._handleKeyDown}/>
                    <button onClick={this._search}>Search</button>
                    </div>
                    <h3>Advanced Search Options (Optional)</h3>
                   
                    <div>
                    <label for="inputRateMin">Ratings: </label>
                    <input
                    type="number"
                    name="rateMin"
                    id="inputRateMin"
                    placeholder="0"
                    min="0"
                    max="5"
                    value={this.state.rateMin}
                    onChange={this._updateState}/>
                    
                    <label for="inputRateMax"> to </label>
                    <input
                    type="number"
                    name="rateMax"
                    id="inputRateMax"
                    placeholder="0"
                    min="0"
                    max="5"
                    value={this.state.rateMax}
                    onChange={this._updateState}/>     

                    <label for="calories"> Calories:</label>
                    <select name="calories" id="calories" onChange={this._updateState}>
                        <option value="0">Any</option>
                        <option value="1">Less than 400</option>
                        <option value="2">401-800</option>
                        <option value="3">801-1200</option>
                        <option value="4">1201+</option>
                    </select>
                    </div>

                    <p>Please select a category: </p>
                    <div onChange={this._updateState}>
                        <input type="radio" id="any" name="category" value="Any" defaultChecked/>Any
                        <input type="radio" id="appetizer" name="category" value="Appetizer"/>Appetizer
                        <input type="radio" id="entree" name="category" value="Entree"/>Entree
                        <input type="radio" id="dessert" name="category" value="Dessert"/>Dessert
                    </div>   
                </div>
            );        
    }
}

export default SearchBox;