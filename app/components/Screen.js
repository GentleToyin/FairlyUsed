import { SafeAreaView, StatusBar, Platform, StyleSheet } from "react-native";

const Screen = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" && StatusBar.currentHeight,
    flex: 1,
  },
});
export default Screen;
