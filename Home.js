import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import Adddata from './AddDataBio';
import UpdateDataBio from './UpdateDataBio';

const Stack = createStackNavigator();

export class Home extends Component {
    render() {
        return (
                <NavigationContainer>
                    <Stack.Navigator> 
                        <Stack.Screen 
                        name="App" 
                        component={App}/>
                        <Stack.Screen 
                        name="AddDataBio" 
                        component={Adddata}/>
                        <Stack.Screen 
                        name="UpdateDataBio" 
                        component={UpdateDataBio}/>
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

export default Home