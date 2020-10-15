import React, { Component } from 'react';
import "./Recipe.css";
import Popup from '../popup/Popup';  

class Recipe extends Component{
    constructor(props){
        super(props);
        this.state={
            showPopup: false
        }
    }
    
    togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
    }    

    render(){
        return(
            <div className="recipe" onClick={this.togglePopup.bind(this)}>
                <img src={this.props.recipe.image} alt=""/>
                <h3>{this.props.recipe.title} | Calories: {this.props.recipe.calories} | Servings: {this.props.recipe.servings}  </h3>
                <h4>{this.props.recipe.recipeCategory} - {this.props.recipe.dietLabel} </h4>
                <h4>Ratings: {this.props.recipe.rating} stars</h4>
                {
                this.state.showPopup ?
                    <div>
                    <Popup
                    title = {this.props.recipe.title}
                    prepTime = {this.props.recipe.prepTime}
                    cookingMethod = {this.props.recipe.cookingMethod}
                    description = {this.props.recipe.description}
                    text='Click "Close Me" to hide popup'  
                    closePopup={this.togglePopup.bind(this)}/>  
                    </div>
                :
                null  
                }  
            </div>
        );        
     }
}

export default Recipe;