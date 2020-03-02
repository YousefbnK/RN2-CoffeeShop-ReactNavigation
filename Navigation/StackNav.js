import { createStackNavigator } from "react-navigation-stack";

//Components
import Signup from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";
import index from "../Components/CoffeeList/";
import CoffeeDetail from "../Components/CoffeeDetail/";
import CoffeeCart from "../Components/CoffeeCart";

const StackNav = createStackNavigator(
  {
    SignupScreen: Signup,
    LoginScreen: Login,
    CoffeeListScreen: index,
    CoffeeDetail: CoffeeDetail,
    CoffeeCartScreen: CoffeeCart
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#rgb(20, 90, 100)"
      },
      headerTintColor: "white"
    }
  }
);

export default StackNav;
