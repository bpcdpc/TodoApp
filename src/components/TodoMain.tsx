import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoMain() {
  return (
    <main className="flex flex-col gap-8">
      <TodoForm />
      <TodoList />
    </main>
  );
}
