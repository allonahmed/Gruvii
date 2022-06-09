import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Platform
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/media/myappbg.png")}
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.loginContainer}>
          <Text style={styles.headerText}>Welcome To Gruvii</Text>
          <TouchableOpacity
            style={styles.buttonSign}
            onPress={() => navigation.navigate("Home")}
            underlayColor="#fff"
          >
            <Text style={[styles.buttonsText, { color: "#13799c" }]}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLog}
            onPress={() => navigation.navigate("Home")}
            underlayColor="#fff"
          >
            <Text style={[styles.buttonsText]}>Log In</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,.9)",
    height: "60%",
    width: "75%",
    shadowColor: "#13997c",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 10
  },
  headerText: {
    fontSize: 25,
    paddingTop: Platform.OS === "ios" ? 20 : 20,
    paddingBottom: 20,
    color: "black"
  },
  buttonLog: {
    backgroundColor: "#13997c",
    width: "60%",
    paddingVertical: 10,
    marginVertical: 10
  },
  buttonSign: {
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "#13997c",
    borderStyle: "solid",
    borderWidth: 1,
    color: "#13997c",
    width: "60%",
    paddingVertical: 10,
    marginVertical: 10
  },
  buttonsText: {
    color: "#fff",
    textAlign: "center"
  }
});
