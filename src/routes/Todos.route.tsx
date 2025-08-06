import { Outlet } from "react-router-dom";
import TodosContextProvider from "../features/Todos/context/todos.context";
import Todos from "../features/Todos/Todos";

export default function TodosRoute() {
  return (
    <TodosContextProvider>
      <Todos>
        <Outlet />
      </Todos>
    </TodosContextProvider>
  );
}
