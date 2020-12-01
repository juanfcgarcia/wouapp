import React from 'react'
import { StyleSheet, View, Text, ScrollView,Image, Dimensions, TouchableOpacity } from 'react-native'
// import Image from 'react-native-scalable-image'

export default function Hogares(props) {
    
    const btn = (key) =>{
        console.log(key);
        return(props.navigation.navigate('Hogar',{keyTip: key}))
    }
    return (
        <ScrollView>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={() =>
                        btn(0)
                    }>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../hogares/images/Hogar1.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={() =>
                        btn(1)
                    }>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../hogares/images/Hogar2.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={() =>
                        btn(2)
                    }>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../hogares/images/Hogar3.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={() =>
                        btn(3)
                    }>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../hogares/images/Hogar4.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={() =>
                        btn(4)
                    }>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../hogares/images/Hogar5.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={() =>
                        btn(5)
                    }>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../hogares/images/Hogar6.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={() =>
                        btn(6)
                    }>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../hogares/images/Hogar7.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={() =>
                        btn(7)
                    }>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../hogares/images/Hogar8.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={() =>
                        btn(8)
                    }>
                        <Image width={Dimensions.get('window').width}
                        style={styles.images}
                        source={require('../../hogares/images/Hogar9.png')}
                        />
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
        height:400
        
    }
})