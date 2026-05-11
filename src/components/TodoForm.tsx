import { useRef } from "react";
import type { SubmitEvent } from "react";

type TodoFormProps = {
  onAddTodo: (content: string) => void;
};

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  console.log("TodoForm 렌더링");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current?.value) return;
    onAddTodo(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-gray-700">새로운 Todo 작성하기 ✏️</h2>
      <form className="flex gap-1.5 w-full" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="새로운 Todo..."
          className="border border-zinc-300 rounded-sm p-2 flex-1 focus:border-blue-500 focus:outline-none"
          ref={inputRef}
        />
        <button className="bg-blue-600 text-white rounded-sm px-4 py-2 transition hover:bg-blue-700 an">
          추가
        </button>
      </form>
    </div>
  );
}
