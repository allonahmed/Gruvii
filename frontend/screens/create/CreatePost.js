import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CreatePost() {
  return (
    <View style={styles.container}>
      <Text>CreatePost</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
