import { useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";

export default function CreateTodo() {
  const { id } = useParams();
  const isNew = id === "new";
  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <form className="shadow-lg bg-white w-[500px] h-[500px] rounded-xl p-5">
        <h1 className="text-xl text-black font-bold">
          {isNew ? "فرم ساخت" : "فرم ویرایش"}
        </h1>
        <div className="my-10 text-black flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <label className="">عنوان</label>
            <input
              className="border border-gray-300 rounded-lg p-1"
              type="text"
            />
          </div>
          <div>
            <label>نوع</label>
            <datalist className="border border-gray-300 rounded-lg p-1">
              <option value="task">تسک</option>
              <option value="meeting">جلسه</option>
            </datalist>
          </div>
          <div>
            <label>تاریخ</label>
            <Calendar />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg block w-full p-2 mt-auto self-end"
        >
          ذخیره
        </button>
      </form>
    </div>
  );
}
