import React from 'react'
import { View , Text , StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'


const InputForm = ({onNameChange, onPasswordChange, name, password}) => {
    return (
        <View style={styles.inputContainer}>
          <View style={styles.viewLabel}> 
            <Text style={styles.label}>Mail / Usuario</Text>
          </View>
            <TextInput
                style={styles.inputOne}
                placeholder="nombre@mail.com"
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newName) => onNameChange(newName)} 
            />
          <View style={styles.viewLabelTwo}> 
            <Text style={styles.labelTwo}>Contraseña</Text>
          </View>
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
                source={require('../public/closedEye.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
}


const styles = StyleSheet.create({
    inputContainer: {
      display:"flex",
      width: 380,
    },
    inputOne: {
      fontSize: 18,
      borderBottomWidth: 1,
      borderColor: "black",
      marginBottom: 15,
      width: "100%",
      borderBottomColor: "#000000"
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
      borderBottomColor: "#000000",
      alignItems: "center",
    },
    label: {
      fontSize: 16,
      fontFamily: "Vollkorn-Medium"
    },
    labelTwo:{
      fontSize: 16,
      fontFamily: "Vollkorn-Medium"
    },
    viewLabel:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      height: 22,
      alignItems: "center"
    },
    viewLabelTwo:{
      marginTop: 6,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      height: 22,
      alignItems: "center"
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
  });


export default InputForm;