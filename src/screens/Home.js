import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList,  Button, SafeAreaView, ScrollView} from 'react-native'
import axios from "axios";

import ResultItems from '../components/ResultItems'

const Home = () => {
    const [results, setResults] = useState([])

const [ array , setArray] = useState([])
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
            <View 
              style={styles.viewButton}>
            </View>
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
    flex: 1
 },
 viewButton:{
   height: 60,
   width: 380,
  backgroundColor: "#c19604",
  marginBottom: 30,
  marginTop: 30,
  marginLeft: 17  
  } 
})

// borrar barra de navegacion
// fuentes
// achicar imagenes
export default Home;