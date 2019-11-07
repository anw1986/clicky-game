import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar"

// import FriendTest from './components/TestFriend'


class App extends Component {
  // Setting this.state.friends to the friends json array

  state = {
    friends,
    score:0,
    highScore:0,
    selectCardId:0,
    msg:['Click an image to begin!','You guessed correctly!','You guessed incorrectly!'],
    showMsg:false,
    correctGuess:false
  };

  shuffleFriends=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  handleShuffle = (id) => {
    //copying all properties in a variable
    let selectId=id
    let previousCardSelect=this.state.selectCardId
    let shuffledFriends = this.shuffleFriends(friends);
    let highScoreChange=this.state.highScore
    let scoreChange=this.state.score
    let updateMsg=this.state.msg
    let correctAnswer=this.state.correctGuess

    if(selectId !== previousCardSelect){
      updateMsg=true  
      correctAnswer=true
      if(scoreChange===highScoreChange){
          scoreChange++
          highScoreChange++
          
        }else{
          scoreChange++
        }
      this.setState({
        friends:shuffledFriends,
        selectCardId:selectId,
        score:scoreChange,
        highScore:highScoreChange, 
        showMsg:updateMsg, 
        correctGuess:correctAnswer})
    }else{
      updateMsg=true
      correctAnswer=false
      this.setState({
        friends:shuffledFriends,
        selectCardId:selectId,
        score:0,
        highScore:highScoreChange, 
        showMsg:updateMsg, 
        correctGuess:correctAnswer})
    }
  };

  testClick =()=> {
    // e.preventDefault()
    console.log ('test test')
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    let displayMsg
    if(this.state.showMsg===false){
      displayMsg=this.state.msg[0]
    } else if(this.state.correctGuess){
      displayMsg=this.state.msg[1]
    }else{
      displayMsg=this.state.msg[2]
    }


    return (
      <div>
        <Navbar score={this.state.score} highScore={this.state.highScore} msg={displayMsg}></Navbar>
        <Jumbotron></Jumbotron>
        <div className="container">
          {this.state.friends.map(friend => (
            <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleShuffle={this.handleShuffle}
            />
            ))}

        </div>
      </div>
     
    );
  }
}
export default App;
