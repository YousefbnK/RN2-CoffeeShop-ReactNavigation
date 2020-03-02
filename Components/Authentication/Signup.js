import React, { Component } from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";

import styles from "./styles";

class Signup extends Component {
  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signup</Text>
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
          <Text style={styles.authButtonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        >
          <Text style={styles.authOther}>Click here to log in!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Signup.navigationOptions = {
  title: "Sign up"
};

export default Signup;
