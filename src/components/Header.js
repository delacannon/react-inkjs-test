import React, { Component } from 'react';
import {Story} from 'inkjs'
import history from '../story.json'
import glamorous from 'glamorous'
import Anime from 'react-anime'
import {css} from 'glamor'

const fadeIn = css.keyframes({ 
  '0%': { transform: 'scale(1)', opacity: 0 },
  '100%': { transform: 'scale(1)', opacity: 1 }
})

const Wrapper = glamorous.div({
	maxWidth:640,
	margin:'0px auto',
})

const TextBlock = glamorous.p({
	
	textAlign:'left'
})

const Choice = glamorous.p({
	animation: `${fadeIn} 1.25s`,
	textAlign:'center'
})

class Header extends Component {

  constructor(props){
  	super(props)
  	this.story = null
  	this.state = {
  		text:``,
  		choices:[]
  	}
  	this.getLink.bind(this)
  }

  componentDidMount(){
  	this.story = new Story(history)
  	this.continueStory(this.story)
  }

  continueStory(story){
  	let paragraphText = null
    while(story.canContinue) {
       paragraphText = story.Continue();
       this.setState({text:paragraphText})
    }
  }

  getLink(story,index){
     story.ChooseChoiceIndex(index);
  	 this.continueStory(story)
  }

  spawnChoices(story){
    return story.currentChoices.map((choice) =>{
    	return <Choice key={choice.text}><a href="#" onClick={() => this.getLink(this.story,choice.index) }>{choice.text}</a></Choice>
    })
  }
  //Shoot Left
  render() {
    return (
      <Wrapper>
      	<h1>Story Text</h1>
       	<TextBlock>{this.state.text}</TextBlock>
       	<div>{this.story && this.spawnChoices(this.story)}</div>
      </Wrapper>
    );
  }
}

export default Header;
