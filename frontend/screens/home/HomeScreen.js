import { ImageBackground, StyleSheet, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import React, { useState } from "react";
import Header from "./home-comp/Header";
import SearchBar from "./home-comp/SearchBar";
import PostContent from "./PostContent";

//default theme for paper provider... not sure how it works yet
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f"
  }
};

export default function HomeScreen() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/media/myappbg.png")}
          style={styles.backgroundImage}
        >
          <Header />
          <SearchBar />
          <PostContent />
        </ImageBackground>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center"
  },
  backgroundImage: {
    height: "100%",
    width: "100%"
  }
});
