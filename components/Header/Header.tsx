import { StyleSheet, View, Text } from "react-native";
import styleConstants from "../../styles.constants";

export const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>TODOS</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: styleConstants.colors.header,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerText: { color: "#fff", fontSize: 24, fontWeight: "bold" },
});
