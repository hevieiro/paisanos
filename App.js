import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/screens/Home";
import LoginScreen from "./src/screens/LoginScreen";



const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: Home
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "",
    }
  }
);

//googlear create stack navigator las propiedades

export default createAppContainer(navigator);