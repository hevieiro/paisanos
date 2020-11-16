import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image} from 'react-native'

const HeaerLoging = () => {
    return(
        <View style={styles.viewHeader}>
            <Image
                style={styles.Image}
                source={require('../public/back.png')}
            />
            <Text style={styles.Text}>
                SALTAR
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewHeader: {
        height: 19,
        width: 380,
        marginTop: 73,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 17,
        marginBottom: 46
    },
    Image: {
        height: 18,
        width: 10
    },
    Text: {
        height:20,
        width: 61,
        fontSize: 16,
        fontFamily: "LexendDeca-Regular",
        color: "#333333",
        marginBottom: 10
        
    }

})

export default HeaerLoging