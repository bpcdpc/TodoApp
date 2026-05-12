import { useState, type ChangeEvent } from "react";
import type { Todo } from "../types/Todo";

import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};

export default function TodoList({
  todos,
  onDeleteTodo,
  onToggleTodo,
}: TodoListProps) {
  console.log("TodoList 렌더링");
  const [query, setQuery] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredTodos =
    query === ""
      ? todos
      : todos.filter((todo) => todo.content.toLowerCase().includes(query));

  const analyzeTodos = (todos: Todo[]) => {
    const totalCount = todos.length;
    const notDoneCount =
      todos.length - todos.filter((todo) => !todo.isDone).length;
    return { totalCount, notDoneCount };
  };

  const { totalCount, notDoneCount } = analyzeTodos(todos);

  return (
    <div className="flex flex-col gap-4 justify-center">
      <h2 className="font-semibold text-gray-700">Todo List 🍀</h2>
      <div>
        <input
          type="text"
          placeholder="검색어를 입력하시오."
          className="border-b border-zinc-300 p-2 w-full focus:border-b-blue-500 focus:outline-none"
          value={query}
          onChange={onChange}
        />
      </div>
      <div>
        <div className="flex justify-end text-sm text-gray-400 mb-3">
          남은 작업 {notDoneCount} / {totalCount}
        </div>
        <ul className="flex flex-col gap-3">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
