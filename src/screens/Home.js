import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList,   Button} from 'react-native'
import axios from "axios";

import ResultItems from '../components/ResultItems'

const Home = () => {
    const [results, setResults] = useState([])

    const searchApi = () => {
        axios.get('https://vindu.paisanos.io/public-api/course')
          .then(response => {
            setResults(response.data)
            console.log(results.data, "ESTA ES LA DATA DE AXIOS")
          })
          .catch(function (error) {
            console.log(error, "AXIOS TIRO ERROR");
          });
        }

    return(
    <View>        
        <FlatList
            horizontal={false}
            data={results}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
            return (
                <ResultItems item={item} />
            );
            }}
      />        
        <Button onPress={searchApi} title="Press Me" >
        </Button>
    </View>
    )
}

export default Home