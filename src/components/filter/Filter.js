import React, { Component } from 'react';
import Recipe from "./../recipe/Recipe";
import './Filter.css';

class Filter extends Component{
 
    filterCriteria = recipe => {
      const {title, rateMin, rateMax, calories, category} = this.props;
      // console.log(title);
      // console.log(rateMin);
      // console.log(recipe.title);
      
      // console.log(recipe.title.toString().toLowerCase().includes(title.toString().toLowerCase()));
      if (!recipe.title.toString().toLowerCase().includes(title.toString().toLowerCase())) return false;

      if (rateMin<rateMax) {
        //console.log(recipe.rating<rateMin);
        //console.log(recipe.rating>rateMax);
        if (recipe.rating<rateMin) return false;
        if (recipe.rating>rateMax) return false;
        
      } else {
        //console.log(recipe.rating<rateMax);
        //console.log(recipe.rating>rateMin);
        if (recipe.rating<rateMax) return false;
        if (recipe.rating>rateMin) return false;
        
      }

      if (calories === "0") {
        //console.log("calories == 0");
      }
      if (calories === "1") {
        //console.log("<400");
        //console.log((recipe.calories > 400));
        if (recipe.calories > 400) return false;
      }
      if (calories === "2") {
        //console.log("400-800");
        //console.log((recipe.calories < 401));
        //console.log((recipe.calories > 800));
        if (recipe.calories < 401) return false;
        if (recipe.calories > 800) return false;
      }
      if (calories === "3") {
        //console.log("800-1200");
        //console.log((recipe.calories < 801));
        //console.log((recipe.calories > 1200));
        if (recipe.calories < 801) return false;
        if (recipe.calories > 1200) return false;
      }
      if (calories === "4") {
        //console.log("1200+");
        //console.log((recipe.calories < 1201));
        if (recipe.calories < 1201) return false;
      }
      
      if (category !== "Any") {
        //console.log("category: " + (recipe.recipeCategory !== category));
        if (recipe.recipeCategory !== category) return false;
      }
      return true;
    }

     render() {
      const filteredRecipes = this.props.recipes.filter(this.filterCriteria);
      const recipeComponent = filteredRecipes.map( recipe => {
        return <Recipe key={recipe.title} recipe={recipe} recipeClicked={(showRecipe) => this._countClicks(showRecipe)}/>
      })
      // console.log("Props received from apps" + this.props);
      // console.log("title:" + this.props.recipes.getElement );
     
      return (
         <div className="filter">
           <br/>
            <div>
              {recipeComponent}
            </div>
         </div>
       )
     }
}
   
export default Filter;