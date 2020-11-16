import React from 'react'
import { View , Text , StyleSheet, TextInput, TouchableOpacity} from 'react-native'

const ForgetPassword = () => {
    return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Olvide mi contraseña
                    </Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 36,
    },
    text: {
        width: 144,
        height: 20,
        fontFamily: "LexendDeca-Regular",
        textDecorationLine: "underline"
    }
})

export default ForgetPassword;