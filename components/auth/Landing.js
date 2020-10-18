import React from 'react'
import { Text, View, Button } from 'react-native'

export default function landing({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <Button 
                title="Registro"
                onPress={() => navigation.navigate("Registro")} />
            <Button 
                title="Inciar Sesion"
                onPress={() => navigation.navigate("Login")} />

        </View>
    )
}
