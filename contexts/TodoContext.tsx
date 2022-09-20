import React, {
  createContext,
  useState,
  useEffect,
  FC,
  useContext,
  PropsWithChildren, // needed in React 18
} from "react";
import TodoListItem from "../components/List/TodoListItem";
import type { TodoItem } from "../types/TodoItem";
import { MOCK_LIST } from "../__mocks__/list";

type TodoProviderValue = {
  isLoading: boolean;
  todoList: TodoItem[];
  addTodo: (todo: TodoItem) => void;
  removeTodo: (todo: TodoItem) => void;
};

const TodoContext = createContext<TodoProviderValue>({} as TodoProviderValue);

export const useTodoList = (): TodoProviderValue => {
  const value = useContext(TodoContext);
  return value;
};

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  // the value that will be given to the context
  const [todoList, setTodoList] = useState([] as TodoItem[]);
  const [isLoading, setIsLoading] = useState(true);

  const addTodo = (todo: TodoItem) => setTodoList([...todoList, todo]);

  const removeTodo = (todo: TodoItem) =>
    setTodoList(todoList.filter((item) => todo.itemId !== item.itemId));

  // fetch a user from a fake backend API
  useEffect(() => {
    const fetchTodoList = () => {
      // TODO - Get list from server
      setTimeout(() => {
        setTodoList(MOCK_LIST);
        setIsLoading(false);
      }, 3000);
    };

    fetchTodoList();
  }, []);

  console.log("Rerender of todo context", { todoList, isLoading });

  return (
    // the Provider gives access to the context to its children
    <TodoContext.Provider value={{ isLoading, todoList, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
