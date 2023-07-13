import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>My App</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#999" secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("welcome", {
          test: "test123"
        });
      }}>
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