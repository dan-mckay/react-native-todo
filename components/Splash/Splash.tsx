import { FC } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styleConstants from "../../styles.constants";

const Splash: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TODO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: styleConstants.colors.header,
  },
  text: { color: "#fff", fontSize: 36, fontWeight: "bold" },
});

export default Splash;
