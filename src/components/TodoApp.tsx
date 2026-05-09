import TodoHeader from "./TodoHeader";
import TodoMain from "./TodoMain";

export default function TodoApp() {
  return (
    <div className="mx-auto my-10 min-h-screen max-w-md p-4">
      <TodoHeader />
      <TodoMain />
    </div>
  );
}
