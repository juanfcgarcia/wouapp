import React from 'react'
import { StyleSheet, View, Text, ScrollView,Image, Dimensions, TouchableOpacity } from 'react-native'
// import Image from 'react-native-scalable-image'
import {createStacknavigator} from '@react-navigation/stack'

export default function Tips({navigation}) {
    return (
        <ScrollView>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={() => navigation.navigate('tip1')
                        
                    }>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../static/images/Tip1.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../static/images/Tip2.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../static/images/Tip3.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../static/images/Tip4.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../static/images/Tip5.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../static/images/Tip6.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../static/images/Tip7.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../static/images/Tip8.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../static/images/Tip9.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../static/images/Tip10.png')
                        }/>
                    </TouchableOpacity>
                </View>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation: 3,
        shadowOffset: {width:1, height:1},
        shadowColor: '#333',
        margin: 20,
        
    },
    cardContent:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    images:{
        
        width:400,
        height:200
        
    }
})