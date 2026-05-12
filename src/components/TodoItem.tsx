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
  const { id, content, date, isDone } = todo;
  console.log(`${id} TodoItem 렌더링`);

  const onDelete = () => {
    onDeleteTodo(id);
  };

  const onToggle = () => {
    onToggleTodo(id);
  };
  return (
    <li className="flex gap-3 w-full items-center border-b border-b-gray-100 pb-3">
      <input
        onChange={onToggle}
        type="checkbox"
        checked={isDone ? true : false}
      />
      <p
        className={`flex-1 cursor-pointer ${isDone ? " line-through text-gray-400" : ""}`}
        onClick={onToggle}
      >
        {content}
      </p>
      <span className="text-gray-500 text-sm">{date}</span>
      <button
        onClick={onDelete}
        className="bg-gray-200 rounded-sm text-sm px-2 py-1"
      >
        삭제
      </button>
    </li>
  );
}
