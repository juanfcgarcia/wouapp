import React from 'react'
import { StyleSheet, View, Text, ScrollView,Image, Dimensions, TouchableOpacity, Button } from 'react-native'
import { Linking } from 'react-native';


export default function Landing({ navigation }) {
    const sendEmail = async () => {
        await Linking.openURL("mailto:u1201610@unimilitar.edu.co?subject=ASUNDO PRUEBA&body=este es el contenido")
    }
    return (
        
        <View style={styles.prueba}>
            <View style={styles.cardContent}>
                    
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../static/images/logo.png')}
                        />
                  
                </View>
                <Text> </Text>
            <Button
                title="Registrarse"
                onPress={() => navigation.navigate("Registro")} />
            <Button style={styles.btn}
                title="Iniciar sesión"
                onPress={() => navigation.navigate("Login")} />        
        </View>
        
    )
}

const styles = StyleSheet.create({
    prueba: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2e3192ff'
    },
    btn: {
      borderRadius: 25,
      flex: 1,
      aspectRatio: 1
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
  