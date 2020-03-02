import React, { Component } from "react";

// Styling Components
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { Text } from "native-base";
import styles from "./styles";

class Login extends Component {
  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("CoffeeListScreen")}
          style={styles.authButton}
        >
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignupScreen")}
        >
          <Text style={styles.authOther}>Click here to register!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Login.navigationOptions = {
  title: "Login"
};

export default Login;
