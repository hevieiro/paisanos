import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native'
import TitleLogin from '../components/TitleLogin'
import InputForm from '../components/InputForm'
import ForgetPassword from '../components/ForgetPassoword'
import EnterButton from '../components/EnterButton'
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
        <TitleLogin />
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
        <ForgetPassword />
        <EnterButton signIn={() => {signIn()}}/>
    </View>
    )
}

const styles = StyleSheet.create({})


export default LoginScreen;