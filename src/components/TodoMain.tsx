import { useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import type { Todo } from "../types/Todo";

export default function TodoMain() {
  console.log("TodoMain 렌더링");
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef<number>(todos.length + 1);

  const onAddTodo = (content: string) => {
    const todo: Todo = {
      id: idRef.current,
      content,
      date: new Date().toLocaleDateString(),
      isDone: false,
    };
    setTodos([todo, ...todos]);
    idRef.current += 1;
  };

  const onDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      }),
    );
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
