import { Platform, StyleSheet, Text } from "react-native";

const AppText = ({ children, style }) => {
  return <Text style={[StyleSheet.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default AppText;
