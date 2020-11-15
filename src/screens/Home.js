import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList,  Button, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import axios from "axios";

import ResultItems from '../components/ResultItems'

const Home = () => {
    const [results, setResults] = useState([])

    useEffect(() => { 
        axios.get('https://vindu.paisanos.io/public-api/course')
          .then(response => {
            setResults(response.data)
            setArray([response.data[0]])
          })
          .catch(function (error) {
            console.log(error, "AXIOS ERROR");
          });
    }, [])


    return(
    <ScrollView style={styles.viewContainer}>
    <FlatList
          horizontal={false}
          data={results}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={
            <TouchableOpacity>
              <View style={styles.viewButton}>
                <Text style={styles.textViewButton}>VER TODOS LOS CURSOS</Text>
              </View>
            </TouchableOpacity>
        }
          renderItem={({ item }) => (            
            <ResultItems item={item}  />
          )}
      />
</ScrollView>  
    )
}

const styles = StyleSheet.create({
  viewContainer:{
    display: "flex",
    flexDirection: "column",
    flex: 1,
 },
 viewButton:{
   height: 60,
   width: 380,
  backgroundColor: "#c19604",
  marginBottom: 30,
  marginTop: 30,
  marginLeft: 17  
  },
  viewButton:{
    height: 60,
    width: 380,
    backgroundColor: "red",
    marginLeft:17,
    marginRight: 17,
    marginTop: 30,
    marginBottom:30,
    borderRadius: 5,
    backgroundColor: "#c19604",
    display:"flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textViewButton:{
    fontSize: 16,
    color: "#ffffff",
    letterSpacing: 0.98
  }
})

// borrar barra de navegacion
// fuentes
// achicar imagenes
export default Home;