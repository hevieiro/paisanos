import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList,   Button, Image} from 'react-native'
import axios from "axios";
import { not } from 'react-native-reanimated';

const ResultItems = ({item}) => {

    return (
        <View style={styles.principalContainer}>
            <View style={styles.viewContainer}>
                <View style={styles.Container}>
                    <Image style={styles.images} source={{uri: item.image_url}}/>
                    <View style={styles.category}> 
                        <Text>{item.category.name}</Text>
                    </View>
                    <View style={styles.title} >
                         <Text>{item.title}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    principalContainer:{
        backgroundColor: "grey"
    },
    viewContainer:{
        width: 380,
        height: 350,
        marginBottom: 20,
        marginStart: 17,
        borderRadius: 19,
        backgroundColor: "white"
    },
    Container: {
        margin: 8
    }
    ,
    images: {
        width: 364,
        height: 214,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
    },
    category:{
        borderWidth: 1,
    },
    title:{
        borderWidth: 1,
    }

})


export default ResultItems


