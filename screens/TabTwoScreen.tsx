/*

File: Create a New Deck.js

Desc: File to Add a New Deck to the System/Quiz 

Author: Gene Da Rocha

Project3: Udacity Mobile Flash Cards Project 

Date: August 31st  2020

*/



import React, { Component } from 'react'
import {  StyleSheet, TextInput,TouchableOpacity } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo';
import { withNavigation } from 'react-navigation'
import { Text, View } from '../components/Themed';

import { CreateANewDeck } from '../utils/api'
import { connect } from 'react-redux'
import { AddAdditionalDeck } from '../actions'


class CreateNewDeck extends Component {

  state = {
    title: ''
}

handleSubmit = () => {
const {title} = this.state
CreateNewDeck(title)
this.props.dispatch(AddAdditionalDeck(title))
this.props.navigation.navigate('Deck',{deckId: title})
this.setState({title: ""})

}

render() {
  return (
      <View>
          <Text style={styles.paragraph}>Create A Deck </Text>
          <TextInput 
              style={styles.input}
              placeholder = "Enter the title of deck "
              placeholderTextColor = '#d6d7da'
              onChangeText={( title ) => this.setState({ title })}
              value={this.state.title} 
              />
      
          <TouchableOpacity style={styles.button} 
          onPress={this.handleSubmit}>
          <Text style={styles.btnTitle}> Make a New Deck </Text>
      </TouchableOpacity>
      </View>
  )
}
}

function mapStateToProps (decks){
  return{
      decks
  }
}
export default withNavigation(connect(mapStateToProps)(CreateNewDeck))


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    paragraph: {
      padding: 20,
      margin: 10,
      marginTop:150,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black'
  },
  button: {
      alignItems: 'center',
      backgroundColor:'#00FF00',
      padding: 15,
      margin: 10,
      width: 370,
      height:60,
      borderRadius:6,
      justifyContent:'center',
  },
  input: {
      margin: 15,
      height: 60,
      borderColor:'#00FF00',
      borderWidth: 1,
      borderRadius:6
  },
  btnTitle :{
      fontSize: 20,
      textAlign: 'center'
      }
  },
});
