import { createContext } from "react";
import type { TAction, TTodosContext } from "./types.context";

export const TodosContext = createContext<
       TTodosContext & {
              dispatch?: React.ActionDispatch<[action: TAction]>;
       }
>({
       todos: [],
});

export const INITIAL_STATE: TTodosContext = {
       todos: [],
};