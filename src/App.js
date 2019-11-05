import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

// import FriendTest from './components/TestFriend'


class App extends Component {
  // Setting this.state.friends to the friends json array

  state = {
    friends,
    score:0,
    highScore:0,
    selectCardId:0
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
    console.log('id is ', id)
    let selectId=id
    let previousCardSelect=this.state.selectCardId
    let shuffledFriends = this.shuffleFriends(friends);
    let highScoreChange=this.state.highScore
    let scoreChange=this.state.score
    if(selectId !== previousCardSelect){
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
        highScore:highScoreChange})
    }else{
      this.setState({
        friends:shuffledFriends,
        selectCardId:selectId,
        score:0,
        highScore:highScoreChange})
    }
  };

  testClick =()=> {
    // e.preventDefault()
    console.log ('test test')
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highScore={this.state.highScore}>Clicky-Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
            handleShuffle={this.handleShuffle}
          />
        ))}
      </Wrapper>
      
    );
  }
}
export default App;
