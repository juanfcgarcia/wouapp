import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { View, Text } from 'react-native'

import * as firebase from 'firebase'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Registro'
import LoginScreen from './components/auth/Login'
import MainScreen from './components/Main' 
import AddScreen from './components/main/Add'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

const firebaseConfig = {
  apiKey: "AIzaSyDCkClsSgDUjm7RhSiZc6Jdhts59srQTdM",
  authDomain: "wouapp-dff12.firebaseapp.com",
  databaseURL: "https://wouapp-dff12.firebaseio.com",
  projectId: "wouapp-dff12",
  storageBucket: "wouapp-dff12.appspot.com",
  messagingSenderId: "409643801970",
  appId: "1:409643801970:web:5c456e591b2ec0a23e91eb"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();


export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded:  false,
    }
  }


  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
       
    })

  }

  render() {
    const { loggedIn, loaded } = this.state;
    if(!loaded){
      return(
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Cargando</Text>
        </View>
      )
    }

    if(!loggedIn){
      return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Registro" component={RegisterScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
      ); 
    }  

    return (
      <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Add" component={AddScreen} />
            </Stack.Navigator> 
            </NavigationContainer>
      </Provider>    
    )
  }
}

export default App




