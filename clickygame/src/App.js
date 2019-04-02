import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
import imgs from "./img.json";
import "./components/style.css";
var clicked = [];
var score = 0;
class App extends Component {
  // Setting this.state.imgs to the imgs json array
  state = {
    imgs
  };

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    console.log("shuffled")
    console.log(this.state.imgs)
    this.setState({ imgs });
    return a;
  }

//store clicked image 
  removeimg = name => {
    //check if image already clicked
    for (let i = 0; i < clicked.length ; i++) {
      if(name === clicked[i]){
        alert("You lost!");
        score = 0;
        clicked = [];
        this.shuffle(this.state.imgs);
        return 0;
      }
    }
    //store clicked image
    clicked.push(name);
    score++;
    console.log(clicked);
    console.log(score);
    this.shuffle(this.state.imgs)
  }

  
  // removeimg = id => {
  //   // Filter this.state.imgs for imgs with an id not equal to the id being removed
  //   const imgs = this.state.imgs.filter(img => img.id !== id);
  //   // Set this.state.imgs equal to the new imgs array
  //   this.setState({ imgs });
  // };

  // Map over this.state.imgss and render a imgsCard component for each imgs object
  render() {
    return (
       <div className="body">
         <Header>{score}</Header>
         <div className="container">
          <div className="row">
            {this.state.imgs.map(img => (
              <ImageCard
                removeimg={this.removeimg}
                shuffle = {this.shuffle}
                id={img.id}
                key={img.id}
                name={img.name}
                image={img.image}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

