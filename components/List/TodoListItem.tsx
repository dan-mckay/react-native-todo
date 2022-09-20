import { FC, Key } from "react";
import { StyleSheet, Text, View, ScrollView, Switch } from "react-native";
import { useRoutes, useTodoList } from "../../contexts";
import { RouteNames } from "../../types/Routes";
import type { TodoItem } from "../../types/TodoItem";

type TodoItemWithKey = TodoItem & {
  key: Key;
};

const TodoListItem: FC<TodoItemWithKey> = (props) => {
  const { setRoute } = useRoutes();
  const { removeTodo } = useTodoList();

  const { itemId, title, description } = props;

  const handleChange = () => {
    removeTodo(props);
    setRoute(RouteNames.list);
  };

  return (
    <View style={styles.todoItem}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        <Text style={[styles.text, styles.desc]}>{description}</Text>
      </View>
      <Switch style={styles.switch} onChange={handleChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#98C1D9",
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 20,
  },
  switch: {
    marginLeft: 20,
  },
});

export default TodoListItem;
