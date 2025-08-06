import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodosContext } from "../../context/todos.constant";
import type { TTodo } from "../../context/types.context";



export default function useTodoList() {
       const { todos, dispatch } = useContext(TodosContext);
       const navigate = useNavigate();
       const handleClickTodo = (todo: TTodo) => {
              navigate(todo.id)
       }
       const handleDeleteTodo = (todo: TTodo) => {
              dispatch?.({ type: "REMOVE_TODO", payload: todo })
       }

       return {
              todos,
              handleClickTodo,
              handleDeleteTodo
       }
}