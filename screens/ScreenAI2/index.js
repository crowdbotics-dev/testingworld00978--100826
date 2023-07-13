import { useSelector } from "react-redux";
import { api_v1_login_create } from "../../store/testingworldAPI/authTokens.slice.js";
import { useDispatch } from "react-redux";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const LoginScreen = () => {
  const {
    entities: username
  } = useSelector(state => state.username);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(api_v1_login_create({
      username: {
        username
      }
    }));
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>My App</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#999" secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    marginBottom: 50
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  },
  formContainer: {
    width: "80%"
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    height: 50,
    backgroundColor: "#333",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  }
});
export default LoginScreen;