import React from 'react'
import { View , Text , StyleSheet, TouchableOpacity } from 'react-native'

const EnterButton = ({signIn}) => {
    return(
        <View style={styles.viewContainer}>
            <TouchableOpacity onPress={() => {signIn(); console.log("axios executed")}}>        
                <View style={styles.view} title="ingresar">
                    <Text style={styles.Text}>INGRESAR</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer:{
        paddingBottom: 13
    },
    view:{
        height: 60,
        width: 380,
        backgroundColor: "#c19604",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 82,

    },
    Text: {
        fontFamily: "LexendDeca-Regular",
        fontSize: 16,
        width: 94,
        height: 28,
        color :"#ffffff",
        letterSpacing: 0.98
    }
})

export default EnterButton;