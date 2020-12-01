import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button, TextInput, StyleSheet, Dimensions } from 'react-native'

const width_proportion = '80%';

import firebase from 'firebase'
require('firebase/firestore')

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUsersData } from '../../redux/actions/index'

function Solicitud(props) {
    const [solicitudes, setSolicitudes] = useState([])
    const [postId, setPostId] = useState("")
    const [text, setText] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [telefono, setTelefono] = useState("")
    const [id, setId] = useState("")

    useEffect(() => {

        function matchUserToComment(solicitudes) {
            for (let i = 0; i < solicitudes.length; i++) {
                if (solicitudes[i].hasOwnProperty('user')) {
                    continue;
                }

                const user = props.users.find(x => x.uid === solicitudes[i].creator)
                if (user == undefined) {
                    props.fetchUsersData(solicitudes[i].creator, false)
                } else {
                    solicitudes[i].user = user
                }
            }
            setSolicitudes(solicitudes)
        }
        
        console.log(props.route.params.postId);
        if (props.route.params.postId !== postId) {
            firebase.firestore()
                .collection('posts')
                .doc(props.route.params.uid)
                .collection('userPosts')
                .doc(props.route.params.postId)
                .collection('solicitudes')
                .get()
                .then((snapshot) => {
                    let solicitudes = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        return { id, ...data }
                    })
                    matchUserToComment(solicitudes)
                })
            setPostId(props.route.params.postId)
        } else {
            matchUserToComment(solicitudes)
        }
    }, [props.route.params.postId, props.users])


    const onSolicitudSend = () => {
        firebase.firestore()
            .collection('posts')
            .doc(props.route.params.uid)
            .collection('userPosts')
            .doc(props.route.params.postId)
            .collection('solicitudes')
            .add({
                creator: firebase.auth().currentUser.uid,
                text,
                ciudad,
                telefono
            })
            props.navigation.navigate('Feed')        
    }

    return (
        <View style={styles.prueba}>
            
                <TextInput
                    placeholder='Nombre'
                    style={styles.btn}
                    onChangeText={(text) => setText(text)} />
                     <TextInput
                    placeholder='Ciudad'
                    style={styles.btn}
                    onChangeText={(ciudad) => setCiudad(ciudad)} />
                    <TextInput
                    placeholder='Telefono'
                    style={styles.btn}
                    onChangeText={(Telefono) => setTelefono(Telefono)} />
                <Button
                    onPress={() => onSolicitudSend()}
                    title="Realizar Solicitud"
                />
          

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


const mapStateToProps = (store) => ({
    users: store.usersState.users
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUsersData }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Solicitud);