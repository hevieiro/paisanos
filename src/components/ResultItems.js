import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'


const ResultItems = ({item}) => {

    return (
            <View style={styles.viewContainer}>
                <View style={styles.Container}>
                    <View style={styles.images}>                    
                        <Image style={styles.images} source={{uri: item.image_url}}/>
                    </View>
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
                                <View style={styles.footerHour}><Text style={styles.leveTimeText}>2:00 hs</Text></View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.heartContainer}>
                            <View  style={styles.heartContainerTwo}>
                                <TouchableOpacity style={styles.heartContainerTree}>                              
                                    <Image
                                        style={styles.tinyLogo}
                                        source={require('../public/heart.png')}/>
                                    </TouchableOpacity>
                                <View style={styles.heart}><Text style={styles.heartText}>{item.likes}</Text></View>
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
        backgroundColor: "#f8f9fb"
    },
    Container: {
        margin: 8,
    }
    ,
    images: {
        width: 364,
        height: 214,
        borderRadius: 11,
        display: "flex",
        justifyContent: "center",
    },
    category:{
        paddingTop: 10
    },
    textCategory:{
        fontSize: 12,
        color: "#898989",
        fontFamily: "LexendDeca-Regular"
    },
    title:{
        paddingBottom: 8,
        paddingTop: 8,
        width: 350,
        height: 29,
        display: "flex",
        justifyContent: "center",
    },
    textTitle:{
        fontSize: 21,
        color: "#333333",
        fontFamily: "Vollkorn-Medium"
    },
    footerContainer:{
        borderRadius: 10,
        marginBottom: 10,
        display:"flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        
    },
    leveTimeButton: {
        display: "flex",
        flexDirection: "row",
        borderRadius:10,
        width: 250,
        paddingTop: 33,
     },
     footerLevel: {
        width: 50,    
        height: 28,    
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eeece2",
     },
     footerHour: {
         width: 50,    
         height: 28,    
         borderRadius: 10,
         justifyContent: "center",
         alignItems: "center",
         backgroundColor: "#eeece2"
     },
     leveTimeText:{
        fontSize: 11,
        color: "#9d7c08",
        fontFamily: "LexendDeca-Regular",
        paddingBottom: 4
     },
     heart:{
         fontSize: 30,
         justifyContent: "center",
         alignItems: "center",
         height: 28,
         fontSize: 12,
     },
     heartContainer:{
         height: 31,
         justifyContent: "flex-end",
         flexDirection: "row",
         alignItems: "stretch",

         width: 100,   
     },
     heartContainerTwo:{
         height: 31,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        alignItems: "center",
    },
    heartContainerTree:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25
    },
     heartText: {
         fontSize: 12,
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         color: "#9d7c08",
         fontFamily: "LexendDeca-Regular"
     },
     tinyLogo: {
        width: 35,
        height: 31,
        alignSelf: "center"      }
})

// ajustar el corazon
// hacer responsive las imagenes
// cambiar hora

export default ResultItems
