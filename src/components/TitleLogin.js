import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { ceil } from 'react-native-reanimated'

const TitleLogin = () => {
    return(
    <View style={styles.container}>
        <View style={styles.ingresa}>       
            <Text style={styles.textIngresa}>
                Ingresa tus datos
            </Text>
        </View>
        <View style={styles.inicia}>       
            <Text style={styles.textInicia}>
                para iniciar seccion
            </Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
        height: 66,
        width: 233
    },
    textIngresa:{
        fontSize: 30,
        color: "#9d7c08",
        fontFamily: "Vollkorn-Medium",
    },
    textInicia: {
        fontSize: 16,
        color: "#898989",
        fontFamily: "LexendDeca-Regular"
    }
})


export default TitleLogin;