export default function TodoList() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <h2 className="font-semibold text-gray-700">Todo List 🍀</h2>
      <div>
        <input
          type="text"
          placeholder="검색어를 입력하시오."
          className="border-b border-zinc-300 p-2 w-full focus:border-b-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <ul className="flex flex-col gap-3">
          <li className="flex gap-3 w-full items-center border-b border-b-gray-100 pb-3">
            <input type="checkbox" />
            <p className="flex-1 cursor-pointer">할 일</p>
            <span className="text-gray-500 text-sm">2004.4.4</span>
            <button className="bg-gray-200 rounded-sm text-sm px-2 py-1">
              삭제
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
