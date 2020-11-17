import React, { useState } from 'react'
import { View , Text , StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'


const InputForm = ({onNameChange, onPasswordChange, name, password}) => {

  const [ input , setInput] = useState(false)

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
            {!input ? <TextInput 
              style={styles.inputTwo}
              placeholder="*********"
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={(newPassword) => onPasswordChange(newPassword)} 
              secureTextEntry={true}
            />
              : <TextInput 
              style={styles.inputTwo}
              placeholder="Contraseña"
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={(newPassword) => onPasswordChange(newPassword)} 
              secureTextEntry={false}
            />}          
            <View style={styles.viewEye}>
              <TouchableOpacity onPress={() => setInput(!input)} style={styles.Touchable}>
                {!input ? <Image
                  style={styles.tinyLogoClosed}
                  source={require('../public/closedEye.png')}
                /> : <Image
                style={styles.tinyLogoOpened}
                source={require('../public/openEye.png')}
              />}
              </TouchableOpacity>
            </View>
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
      borderBottomColor: "#0013"
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
      borderBottomColor: "#0013",
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
    tinyLogoClosed:{
      width: 20,
      height: 15,
      alignItems: "center",
    },
    tinyLogoOpened:{
      borderWidth: 1,
      width: 20,
      height: 15,
      alignItems: "center",
      marginLeft: 1
    },
    Touchable: {
      borderColor: "black", 
      width: 20,
      height: 15,
      marginLeft: 1,
      marginBottom: 2
    },
    viewEye: {
      width: 23,
      height: 17,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1
    }
  });


export default InputForm;