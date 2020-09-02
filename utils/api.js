/*

File: API.js

Desc: File to work and deal with AsynchStorage 

Author: Gene Da Rocha

Project3: Udacity Mobile Flash Cards Project 

Date: 01st September 2020

*/
import { AsyncStorage } from 'react-native'

export const THEDECK_STORAGE_KEY = 'AsyncStorage:flashCards'

export async function getMEAllDecks() {
    const res = await AsyncStorage.getItem(THEDECK_STORAGE_KEY);
    if (res !== null) {
        const data = JSON.parse(res);
        return data;
    }
    else{
        return null
    }  
    }

export async function  AddAdditionalDeck(title){
    return getMEAllDecks().then((decks)=>{
        AsyncStorage.mergeItem(THEDECK_STORAGE_KEY, JSON.stringify({
        [title]: {
        title : title,
        questions: []
    }
}))
})}

export async function AddnewCard( title, card){
    return getMEAllDecks().then((decks)=>{
        decks[title].questions.push(card)
        AsyncStorage.mergeItem(THEDECK_STORAGE_KEY, JSON.stringify(decks));

    })
}