import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 } from "uuid";
import { TodosContext } from "../../context/todos.constant";
import type { TTodo } from "../../context/types.context";
import { FormTodoSchema } from "./schema";



export default function useCreateTodo() {
       const { id } = useParams();
       const navigate = useNavigate()
       const { todos, dispatch } = useContext(TodosContext)
       const isNew = id === "new";
       const selectedTodo = isNew ? null : todos.find(todo => todo.id === id);
       const [errors, setErrors] = useState<Record<keyof TTodo, string | null>>({
              date: null,
              id: null,
              title: null,
              type: null
       })

       const handleCreateTodo: React.FormEventHandler<HTMLFormElement> = async (event) => {
              event.preventDefault();
              setErrors({ date: null, id: null, title: null, type: null })
              const formData = new FormData(event.currentTarget);
              const [title, todoDate, todoType, id] = [formData.get('title'), formData.get('date'), formData.get('type'), selectedTodo?.id ?? v4()];

              FormTodoSchema.parseAsync({ title, type: todoType, date: todoDate, id })
                     .then(() => {
                            console.log("SUCCESS");
                            dispatch?.({ type: isNew ? "CREATE_TODO" : "UPDATE_TODO", payload: { title, date: todoDate, type: todoType, id } });
                            navigate("/todos")
                     }).catch(error => {
                            const zodError = JSON.parse(error) as { path: (keyof typeof errors)[], message: string }[];
                            zodError.forEach(e => {
                                   setErrors(p => ({ ...p, [e.path[0]]: e.message }))
                            })

                     })
       }
       return {
              isNew,
              selectedTodo,
              handleCreateTodo,
              errors
       }
}