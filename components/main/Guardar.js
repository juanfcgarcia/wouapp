import React, { useState } from 'react'
import { View, TextInput, Image, Button, StyleSheet, Dimensions } from 'react-native'

import firebase from 'firebase'
import { NavigationContainer } from '@react-navigation/native'
require("firebase/firestore")
require("firebase/firebase-storage")

const width_proportion = '90%';


export default function Guardar(props) {
    const [caption, setCaption] = useState("")
    const [edad, setEdad] = useState("")
    const [raza, setRaza] = useState("")
    const [sexo, setSexo] = useState("")

    const uploadImage = async () => {
        const uri = props.route.params.image;
        const childPath = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
        console.log(childPath)

        const response = await fetch(uri);
        const blob = await response.blob();

        const task = firebase
            .storage()
            .ref()
            .child(childPath)
            .put(blob);

        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                savePostData(snapshot);
                console.log(snapshot)
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted);
    }

    const savePostData = (downloadURL) => {

        firebase.firestore()
            .collection('posts')
            .doc(firebase.auth().currentUser.uid)
            .collection("userPosts")
            .add({
                downloadURL,
                caption,
                edad,
                raza,
                sexo,
                creation: firebase.firestore.FieldValue.serverTimestamp()
            }).then((function () {
                props.navigation.popToTop()
            }))
    }
    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: props.route.params.image }} />
            <View style={styles.prueba}>
            <TextInput
                placeholder="Descripción . . ."
                onChangeText={(caption) => setCaption(caption)}
                style={styles.btn}
            />
            <TextInput
                placeholder="Edad . . ."
                onChangeText={(edad) => setEdad(edad)}
                style={styles.btn}
            />
            <TextInput
                placeholder="Sexo del animal . . ."
                onChangeText={(sexo) => setSexo(sexo)}
                style={styles.btn}
            />
            <TextInput
                placeholder="Raza . . ."
                onChangeText={(raza) => setRaza(raza)}
                style={styles.btn}
            />
            <Button title="Publicar" onPress={() => uploadImage()} />
            </View>
        </View>
    )
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