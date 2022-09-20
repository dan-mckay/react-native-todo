import { FC } from "react";
import { StyleSheet, ScrollView } from "react-native";
import TodoListItem from "./TodoListItem";
import { useTodoList } from "../../contexts";
import type { TodoItem } from "../../types/TodoItem";

const List: FC<TodoItem[]> = () => {
  const { todoList } = useTodoList();
  return (
    <ScrollView style={styles.todoList}>
      {todoList.map((todo) => (
        <TodoListItem key={`${todo.itemId}`} {...todo} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todoList: {
    padding: 20,
  },
});

export default List;
