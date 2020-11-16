import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native'
import TitleLogin from '../components/TitleLogin'
import InputForm from '../components/InputForm'
import ForgetPassword from '../components/ForgetPassoword'
import EnterButton from '../components/EnterButton'
import HeaerLoging from '../components/HeaderLogin'
import Home from './Home'

import axios from "axios";
import { NavigationEvents } from 'react-navigation'

const LoginScreen = ({navigation}) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

   const signIn = () => {
       axios.post('https://vindu.paisanos.io/public-api/user/login', {
    username: name,
    password: password
  })
    .then(function (response) {
    response.status === 200 ? navigation.push("Home") : alert("cuenta o contraseña equivocada");
  })
    .catch(function (error) {
    console.log(error);
  });} 
    
    return (
    <View>
        <HeaerLoging />
          <View style={styles.viewContainer}>
            <TitleLogin />
              <View style={styles.inputContainer}>
                <InputForm
                    name={name}
                    password={password}
                    onNameChange={(newName) => {
                    setName(newName)
                    }}           
                    onPasswordChange={(newPassword) => {
                    setPassword(newPassword)
                }} 
                />
              </View>
            <ForgetPassword />
          <EnterButton signIn={() => {signIn()}}/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
  viewContainer: {
    marginLeft: 17,
    width: 380,
    height:805,
    display: "flex",
    alignItems: "center"
  },
  inputContainer: {
    height: 166,
    width: 380
  }
})


export default LoginScreen;