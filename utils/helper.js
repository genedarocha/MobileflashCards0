/*

File: helper.js

Desc: File to work and deal with AsynchStorage and ensure notification is in place. 

Author: Gene Da Rocha

Project3: Udacity Mobile Flash Cards Project 

Date: 02nd September 2020

*/
import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'flashCards:notification'

export function clearLocalNotification () {
return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
return {
    title: 'Welcome to MobileFlashCards - Pls Study Now',
    body: "👋 Test Your Stuff when you are ready..",
    ios: {
    sound: true,
    },
    android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
    }
}
}

export function setLocalNotification () {
AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
    if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
            if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(12)
            tomorrow.setMinutes(0)

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
        })
    }
    })
}