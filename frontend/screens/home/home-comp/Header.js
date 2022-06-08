import {
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  StatusBar
} from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.headerWrapper}>
      <Text
        numberOfLines={1}
        onPress={() => console.log("pressed header")}
        style={styles.headerText}
      >
        Gruvii
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 25,
    paddingTop: Platform.OS === "ios" ? 20 : 10,
    paddingBottom: 20,
    color: "#f8f8f8"
  }
});
export default Header;
