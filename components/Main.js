import React, { Component } from 'react'
import { View, Text } from 'react-native' 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser, fetchUserPosts } from '../redux/actions/index'

import FeedScreen from './main/Feed'
import ReporteScreen from './main/Reportes'

import ProfileScreen from './main/Profile'
import HogaresScreen from './main/Hogares'



const EmptyScreen = () => {
    return(null)
}
const Tab = createMaterialBottomTabNavigator();

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
        this.props.fetchUserPosts();
    }

    render() {
        return (
            <Tab.Navigator initialRouteName="Feed" labeled={false}>
                <Tab.Screen name="Publicaciones" component={FeedScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="dog" color={color} size={32}/>
                    ),
                }}/> 
                <Tab.Screen name="Reportes" component={ReporteScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="bullhorn" color={color} size={32}/>
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
                            <MaterialCommunityIcons name="plus-box" color={color} size={32}/>
                        ),
                    }}/> 
                  <Tab.Screen name="Hogares" component={HogaresScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home-group" color={color} size={32}/>
                        ),
                    }}/> 
                <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account" color={color} size={32}/>
                    ),
                }}/> 
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser, fetchUserPosts}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
