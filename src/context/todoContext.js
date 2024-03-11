import { useContext, createContext } from "react";

export const todoContext = createContext({
  todos: [{ id: 1, todo: "todo msg", complete: false }],
  addTodo: (todo) => {},
  editTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(todoContext);
};

export const TodoContextProvider = todoContext.Provider;
