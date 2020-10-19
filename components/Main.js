import React, { Component } from 'react'
import { View, Text } from 'react-native' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

import FeedScreen from './main/Feed'
import ReporteScreen from './main/Reportes'

import ProfileScreen from './main/Profile'
import HogaresScreen from './main/Hogares'



const EmptyScreen = () => {
    return(null)
}
const Tab = createBottomTabNavigator();

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Publicaciones" component={FeedScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="dog" color={color} size={36}/>
                    ),
                }}/> 
                <Tab.Screen name="Reportes" component={ReporteScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="bullhorn" color={color} size={36}/>
                        ),
                    }}/> 
                <Tab.Screen name="ContainerAdd" component={EmptyScreen} 
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add")
                        }
                    })}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={36}/>
                        ),
                    }}/> 
                  <Tab.Screen name="Hogares" component={HogaresScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home-group" color={color} size={36}/>
                        ),
                    }}/> 
                <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account" color={color} size={36}/>
                    ),
                }}/> 
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
