import { StyleSheet, View } from "react-native";
import { RouteProvider, TodoProvider } from "./contexts";
import AppRouter from "./AppRouter";
import styleConstants from "./styles.constants";

export default function App() {
  return (
    <RouteProvider>
      <TodoProvider>
        <View style={styles.container}>
          <AppRouter />
        </View>
      </TodoProvider>
    </RouteProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: styleConstants.colors.primary,
    paddingHorizontal: 0,
    flexGrow: 1,
  },
});
