import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native'

import firebase from 'firebase'
require('firebase/firestore')
import { connect } from 'react-redux'

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function Feed(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let posts = [];
        if(props.usersLoaded == props.following.length){
            for (let i = 0; i < props.following.length; i++){
                const user = props.users.find(el => el.uid === props.following[i]);
                if(user != undefined){
                    posts = [...posts, ...user.posts];
                }
            }

            posts.sort(function(x,y) {
                return x.creation - y.creation;
            })

            setPosts(posts);
        }

    }, [props.usersLoaded])

    return (
        <View style={styles.container}>
            <View style={styles.containerGallery}>
                <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={posts}
                    renderItem={({ item }) => (
                        <View
                            style={styles.containerImage}>
                            
                            <Image
                                style={styles.image}
                                source={{ uri: item.downloadURL }}
                            />
                        
                            <Text style={styles.captionText}><B>Publicante:</B> {item.user.name} </Text>
                            <Text style={styles.captionText}><B>Ciudad:</B> Bogotá</Text>
                            <Text style={styles.captionText}><B>Descripción:</B> {item.caption}</Text>
                            <Text style={styles.captionText}><B>Sexo:</B> {item.sexo}</Text>       
                            <Text style={styles.captionText}><B>Edad: </B>{item.edad}</Text>
                            <Text style={styles.separation}></Text>
                            <View style={styles.fixToText}>
                            <Button
                            title="Solicitar Adopción"
                            onPress={() => 
                                props.navigation.navigate('Solicitud', { postId: item.id, uid: item.user.uid })
                            }
                            
                            />
       
                             </View>
                        </View>

                    )}

                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e3192ff'
    },
    containerInfo: {
        margin: 20
    },
    containerGallery: {
        flex: 1
    },
    containerImage: {
        flex: 1 / 3

    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1
    },
    captionText: {
        fontSize: 18,
        paddingLeft:  14,
        paddingTop:  14,
        backgroundColor: '#2e3192ff',
        color: '#F9F9F9'
    },
    btnMargin: {
        flex: 1,
        fontSize: 18,
        paddingLeft:  18,
        paddingRight:  18,
        marginTop:  0,
        marginBottom:  0,
        backgroundColor: '#2e3192ff',
        color: '#F9F9F9'
    },
    userText: {
        fontSize: 18,
        paddingLeft:  14,
        paddingTop:  14,
        fontWeight: 'bold',
        backgroundColor: '#2e3192ff',
        color: '#F9F9F9'
    },
    button: {
        backgroundColor: '#00aeef',
        borderColor: 'red',
        borderWidth: 5,
        borderRadius: 15       
     },
     fixToText: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2e3192ff',
        paddingTop:  0,
        marginTop:  0,
    },
    separation: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2e3192ff',
        color: '#F9F9F9',
        paddingTop:  0,
        marginTop:  0,
    }
})
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    following: store.userState.following,
    users: store.usersState.users,
    usersLoaded: store.usersState.usersLoaded,


})
export default connect(mapStateToProps, null)(Feed);
