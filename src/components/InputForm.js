import React from 'react'
import { View , Text , StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'


const InputForm = ({onNameChange, onPasswordChange, name, password}) => {
    return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mail / Usuario</Text>
          <TextInput
              style={styles.inputOne}
              placeholder="Search"
              autoCapitalize="none"
              autoCorrect={false}
              value={name}
              onChangeText={(newName) => onNameChange(newName)} 
      />
          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.viewPassword}>          
            <TextInput 
              style={styles.inputTwo}
              placeholder="Search"
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={(newPassword) => onPasswordChange(newPassword)} 
              secureTextEntry={true}
          />
          <TouchableOpacity  style={styles.Touchable}>
          <Image
            style={styles.tinyLogo}
            source={require('../public/openEye.png')}
          />
          </TouchableOpacity>
          </View>
        </View>
      );
}


const styles = StyleSheet.create({
    inputContainer: {
      display:"flex",
      marginLeft: 17,
      width: 380,
    },
    inputOne: {
      fontSize: 18,
      borderBottomWidth: 1,
      borderColor: "black",
      marginBottom: 15,
      width: "100%",
    },
    inputTwo:{
      fontSize: 18,
      borderColor: "black",
      maxWidth: 340,
    },
    viewPassword:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",     
      borderBottomWidth: 1,
      alignItems: "center"
    },
    label: {
      fontSize: 20,
      marginBottom: 5,
      marginLeft: 5,
    },
    tinyLogo:{
      borderWidth: 1,
      width: 22.7,
      height: 15.5,
      alignItems: "center",
    },
    Touchable: {
      borderColor: "black", 
      width: 22,
      height: 15.5,
      marginRight:10,
    },
    label:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      fontFamily: "Vollkorn-Medium"
    }
  });


export default InputForm;