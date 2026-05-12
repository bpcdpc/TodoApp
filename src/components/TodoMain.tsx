import { useCallback, useReducer, useRef } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import type { Todo } from "../types/Todo";

type Action =
  | { type: "ADD"; newTodo: Todo }
  | { type: "TOGGLE"; targetId: number }
  | { type: "DELETE"; targetId: number };

function todosReducer(todos: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD":
      return [action.newTodo, ...todos];
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo,
      );
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.targetId);
    default:
      return todos;
  }
}

export default function TodoMain() {
  console.log("TodoMain 렌더링");
  const [todos, dispatch] = useReducer(todosReducer, []);
  const idRef = useRef<number>(todos.length + 1);

  const onAddTodo = (content: string) => {
    const todo: Todo = {
      id: idRef.current,
      content,
      date: new Date().toLocaleDateString(),
      isDone: false,
    };

    dispatch({ type: "ADD", newTodo: todo });
    idRef.current += 1;
  };

  const onDeleteTodo = (id: number) => {
    dispatch({ type: "DELETE", targetId: id });
  };

  const onToggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE", targetId: id });
  };

  console.log(todos);

  return (
    <main className="flex flex-col gap-8">
      <TodoForm onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    </main>
  );
}
