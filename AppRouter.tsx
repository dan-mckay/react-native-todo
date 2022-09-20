import { Text, View, StyleSheet } from "react-native";
import { Home, List, Update, Header, Splash } from "./components";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Platform } from "react-native";
import { useRoutes, useTodoList } from "./contexts";
import { RouteNames } from "./types/Routes";
import styleConstants from "./styles.constants";

export default function AppRouter() {
  const { route } = useRoutes();
  const { isLoading, todoList } = useTodoList();

  const statusBarStyle = route !== RouteNames.update ? "light" : "dark";

  return isLoading ? (
    <Splash />
  ) : (
    <>
      <StatusBar style={statusBarStyle} />
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <>
          {(() => {
            switch (route) {
              case RouteNames.list:
                return <List {...todoList} />;
              case RouteNames.update:
                return <Update />;
              case RouteNames.home:
              default:
                return <Home />;
            }
          })()}
        </>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: styleConstants.colors.primary,
    paddingHorizontal: 0,
    flexGrow: 1,
  },
  safeArea: {
    flexGrow: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
