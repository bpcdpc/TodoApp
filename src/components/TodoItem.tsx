import type { Todo } from "../types/Todo";

type TodoItemProps = {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};

export default function TodoItem({
  todo,
  onDeleteTodo,
  onToggleTodo,
}: TodoItemProps) {
  const onDelete = () => {
    onDeleteTodo(todo.id);
  };

  const onToggle = () => {
    onToggleTodo(todo.id);
  };
  return (
    <li className="flex gap-3 w-full items-center border-b border-b-gray-100 pb-3">
      <input
        onChange={onToggle}
        type="checkbox"
        checked={todo.isDone ? true : false}
      />
      <p className="flex-1 cursor-pointer">{todo.content}</p>
      <span className="text-gray-500 text-sm">{todo.date}</span>
      <button
        onClick={onDelete}
        className="bg-gray-200 rounded-sm text-sm px-2 py-1"
      >
        삭제
      </button>
    </li>
  );
}
