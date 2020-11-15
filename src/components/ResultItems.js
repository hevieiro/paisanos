import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList,   Button, Image, TouchableOpacity} from 'react-native'
import axios from "axios";
import { not } from 'react-native-reanimated';

const ResultItems = ({item}) => {

    return (
            <View style={styles.viewContainer}>
                <View style={styles.Container}>
                    <Image style={styles.images} source={{uri: item.image_url}}/>
                    <View style={styles.category}> 
                        <Text style={styles.textCategory}>{item.category.name}</Text>
                    </View>
                    <View style={styles.title} >
                         <Text style={styles.textTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <View style={styles.leveTimeButton}>
                            <TouchableOpacity>                            
                                <View style={styles.footerLevel}><Text style={styles.leveTimeText}>{item.level.name}</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity>                           
                                <View style={styles.footerHour}><Text style={styles.leveTimeText}>2:00hs</Text></View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.heartContainer}>
                            <View  style={styles.heartContainerTwo}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../public/heart.png')}/>
                                <TouchableOpacity >                            
                                    <View style={styles.heart}><Text style={styles.heartText}>{item.likes}</Text></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    viewContainer:{
        width: 380,
        height: 350,
        marginBottom: 20,
        marginStart: 17,
        borderRadius: 19,
        backgroundColor: "white",
        backgroundColor: "#f8f9fb"
    },
    Container: {
        margin: 8,
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
    textCategory:{
        marginTop: 10,
        fontSize: 12,
        color: "#898989"
    },
    title:{
        borderWidth: 1,
        paddingBottom: 8,
        paddingTop: 8,
        width: 207,
        height: 29,
        display: "flex",
        justifyContent: "center",
    },
    textTitle:{
        fontSize: 21,
        color: "#333333"
    },
    footerContainer:{
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        display:"flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        
    },
    leveTimeButton: {
        borderWidth: 1,
        display: "flex",
        borderWidth: 1,
        flexDirection: "row",
        borderRadius:10,
        width: 250,
        paddingTop: 33,
     },
     footerLevel: {
        width: 50,    
        height: 28,    
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eeece2"
     },
     footerHour: {
         width: 50,    
         height: 28,    
         borderRadius: 10,
         borderWidth: 1,
         justifyContent: "center",
         alignItems: "center",
         backgroundColor: "#eeece2"
     },
     leveTimeText:{
        fontSize: 11,
        color: "#9d7c08"
     },
     heart:{
         fontSize: 30,
         justifyContent: "center",
         alignItems: "center",
         borderWidth: 1,
         height: 28,
         fontSize: 12
     },
     heartContainer:{
         borderWidth: 1,
         height: 28,
         justifyContent: "flex-end",
         flexDirection: "row",
         alignItems: "stretch",
         width: 100,   
     },
     heartContainerTwo:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        borderWidth: 1
    },
     heartText: {
         fontSize: 12,
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         color: "#9d7c08"
     },
 
     tinyLogo:{
        borderWidth: 1,
        width: 20,
        height: 19,
        alignItems: "center",
      }
})


export default ResultItems


