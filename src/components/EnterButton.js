import React from 'react'
import { View , Text , StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native'

const EnterButton = ({signIn}) => {
    return(
        <Button title="ingresar" onPress={() => {signIn(); console.log("axios executed")}}  />
        )
}

const styles = StyleSheet.create({})

export default EnterButton;