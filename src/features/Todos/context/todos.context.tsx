import { useReducer, type PropsWithChildren } from "react";
import { INITIAL_STATE, TodosContext } from "./todos.constant";
import TodosReducer from "./todos.reducer";

export default function TodosContextProvider(props: PropsWithChildren) {
  const [values, dispatch] = useReducer(TodosReducer, INITIAL_STATE);
  return (
    <TodosContext value={{ ...values, dispatch }}>
      {props.children}
    </TodosContext>
  );
}
