import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView,Image, Dimensions, TouchableOpacity, Button, TextInput } from 'react-native'
import firebase from 'firebase'

const width_proportion = '80%';



export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={styles.prueba}>
                <TextInput
                    placeholder="Correo"
                    onChangeText={(email) => this.setState({ email })}
                    style={styles.btn}
                />
                <TextInput
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    style={styles.btn}
                    onChangeText={(password) => this.setState({ password })}
                />

                <Button
                    onPress={() => this.onSignUp()}
                    title="Iniciar"
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    prueba: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2e3192ff'
    },
    btn: {
      borderRadius: 18,
      backgroundColor: '#FFFFFF',
      marginBottom:5,
      fontSize: 19,
      width: width_proportion,
      height: 40
    },
    card:{
        borderRadius: 6,
        elevation: 3,
        shadowOffset: {width:1, height:1},
        shadowColor: '#333',
        margin: 20,
        
    },
    cardContent:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    images:{
        
        width:200,
        height:140
        
    }
  
  })
  

export default Login
