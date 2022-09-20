import { StyleSheet, Text, View, Button } from "react-native";
import { RouteNames } from "../../types/Routes";
import { useRoutes, useTodoList } from "../../contexts";
import { Icon } from "../../components/Icon/Icon";
import styleConstants from "../../styles.constants";

export default function Home() {
  const { setRoute } = useRoutes();
  const { todoList } = useTodoList();
  return (
    <View style={styles.container}>
      <View>
        <View
          style={styles.listCard}
          onTouchEnd={() => {
            setRoute(RouteNames.list);
          }}
        >
          <View style={styles.iconTextContainer}>
            <Icon type="dueToday" />
            <Text style={styles.listCardText}>Due Today</Text>
          </View>
          <Text style={[styles.listCardText, styles.listCardCountText]}>2</Text>
        </View>
        <View style={[styles.listCard, styles.listCardScheduled]}>
          <View style={styles.iconTextContainer}>
            <Icon type="scheduled" />
            <Text style={styles.listCardText}>Scheduled</Text>
          </View>
          <Text style={[styles.listCardText, styles.listCardCountText]}>6</Text>
        </View>
        <View style={[styles.listCard, styles.listCardDone]}>
          <View style={styles.iconTextContainer}>
            <Icon type="done" />
            <Text style={styles.listCardText}>Done</Text>
          </View>
          <Text style={[styles.listCardText, styles.listCardCountText]}>
            12
          </Text>
        </View>
      </View>
      <View style={styles.addNewTodoBtn}>
        <Button
          onPress={() => {
            setRoute(RouteNames.update);
          }}
          title="+ Add New Todo"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "space-between",
    flexGrow: 1,
  },
  listCard: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#EE6C4D",
    padding: 30,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  listCardScheduled: {
    backgroundColor: "#227C9D",
  },
  listCardDone: {
    backgroundColor: "#FE6D73",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  listCardText: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginLeft: 20,
  },
  listCardCountText: {
    fontSize: 36,
  },
  addNewTodoBtn: {
    backgroundColor: "transparent",
  },
});
