export default function TodoHeader() {
  const now = new Date().toDateString();
  return (
    <header className="mb-8">
      <h1>
        <span className="block text-xl font-semibold text-gray-700">
          오늘은 📆
        </span>
        <span className="block text-4xl font-semibold text-blue-600">
          {now}
        </span>
      </h1>
    </header>
  );
}
