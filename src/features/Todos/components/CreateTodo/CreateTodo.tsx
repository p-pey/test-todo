import Calendar from "../Calendar/Calendar";
import { CreateTodoUtils } from "./CreateTodo.utils";
import { TodoTypes } from "./schema";
import useCreateTodo from "./useCreateTodo";

export default function CreateTodo() {
  const createTodoHook = useCreateTodo();
  return (
    <div className="w-screen h-screen bg-gray-100 p-5 md:p-0 flex items-center justify-center">
      <form
        onSubmit={createTodoHook.handleCreateTodo}
        className="shadow-lg bg-white w-full md:w-[500px] h-[500px] rounded-xl p-5 flex flex-col"
      >
        <h1 className="text-xl text-black font-bold">
          {createTodoHook.isNew ? "فرم ساخت" : "فرم ویرایش"}
        </h1>
        <div className="my-10 text-black flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label className="">عنوان</label>
            <input
              className="border border-gray-300 rounded-lg p-1 outline-0"
              type="text"
              name="title"
              defaultValue={createTodoHook.selectedTodo?.title}
            />
            <span className="text-xs text-red-400">
              {createTodoHook.errors.title}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label>نوع</label>

            <select
              name="type"
              defaultValue={createTodoHook.selectedTodo?.type ?? TodoTypes[0]}
              className="outline-0 border border-gray-300 rounded-lg p-1"
            >
              {CreateTodoUtils.getTodoTypeDropdownOptions().map((todoType) => {
                return (
                  <option value={todoType.value} key={todoType.value}>
                    {todoType.label}
                  </option>
                );
              })}
            </select>
            <span className="text-xs text-red-400">
              {createTodoHook.errors.type}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label>تاریخ</label>
            <Calendar defaultValue={createTodoHook.selectedTodo?.date} />
            <span className="text-xs text-red-400">
              {createTodoHook.errors.date}
            </span>
          </div>
        </div>
        <button
          role="button"
          type="submit"
          className="bg-blue-500 text-white rounded-lg block w-full p-2 mt-auto self-end"
        >
          ذخیره
        </button>
      </form>
    </div>
  );
}
