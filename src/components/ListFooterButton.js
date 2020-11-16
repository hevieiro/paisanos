import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

ListFooterButton = () => {
    return(
        <View 
        style={styles.viewButton}>
          <Text style={styles.textButton}> VER TODOS LOS CURSOS</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    textButton:{
        fontSize: 16,
        letterSpacing: 0.98,
        color: "#ffffff"
      }
})


export default ListFooterButton