import { Link } from "react-router-dom";
import useTodoList from "./useTodoList";

export default function TodosList() {
  const todoListHook = useTodoList();
  return (
    <div className="text-black w-screen h-screen flex flex-col items-center justify-center p-5 lg:p-[10%]">
      <Link
        to="new"
        className="block text-right ml-auto text-sm p-2 m-3 bg-blue-400 font-bold text-white rounded-lg"
      >
        ساخت تودو جدید
      </Link>
      <div className="w-full h-[80%] shadow-lg py-5 px-3">
        {todoListHook.todos.length === 0 ? (
          <h3 className="w-full h-full text-center mx-auto">
            <span>لیست خالی است</span>
            <Link
              to="new"
              role="button"
              className="underline text-blue-300 mx-2 p-0"
            >
              ایجاد
            </Link>
          </h3>
        ) : (
          <ul className="flex flex-col gap-3 px-2 max-h-full overflow-y-auto scrollbar">
            {todoListHook.todos.map((todo) => {
              return (
                <li
                  key={todo.id}
                  className="relative p-3 rounded-lg border border-gray-300 flex flex-col items-start gap-2 cursor-pointer"
                  onClick={() => todoListHook.handleClickTodo(todo)}
                >
                  <span
                    onClick={(event) => {
                      event.stopPropagation();
                      todoListHook.handleDeleteTodo(todo);
                    }}
                    role="button"
                    className="absolute top-[10px] left-[10px]"
                  >
                    {"🗑️"}
                  </span>
                  <div className="flex gap-2">
                    <span>عنوان:</span>
                    <p>{todo.title}</p>
                  </div>

                  <span>{`تاریخ : ${todo.date}`}</span>
                  <span
                    className={`px-2 py-1 rounded-xl inline-block italic text-black ${
                      todo.type === "meeting" ? "bg-blue-300 " : "bg-green-300"
                    }`}
                  >{`${todo.type === "meeting" ? "جلسه" : "تسک"}`}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
