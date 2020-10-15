import React from 'react';  
import './Popup.css';  

class Popup extends React.Component {  
  render() {  
    return (  
      <div className='popup'>  
          <div className='popup\_inner'> 
              <h1>{this.props.title}</h1>
              <h2>Cooking Method: {this.props.cookingMethod} | Prep Time: {this.props.prepTime} mins</h2>
              <h2>Description: {this.props.description}</h2>
              <h3>{this.props.text}</h3>  
              <button onClick={this.props.closePopup}>Close Me</button>  
          </div>  
      </div>  
    );  
  }  
}  

export default Popup;