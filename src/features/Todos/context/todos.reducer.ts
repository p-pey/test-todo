import type { TAction, TTodo, TTodosContext } from "./types.context";



export default function TodosReducer(state: TTodosContext, action: TAction) {
       switch (action.type) {
              case "CREATE_TODO": {
                     return {
                            todos: [...state.todos, action.payload as TTodo]
                     }
              };
              case "UPDATE_TODO": {
                     const updatedTodo = action.payload as TTodo;
                     return {
                            todos: state.todos.map(todo => {
                                   if (todo.id !== updatedTodo.id) return todo;
                                   return updatedTodo
                            })
                     }
              };
              case "REMOVE_TODO": {
                     const removedTodo = action.payload as TTodo;
                     return {
                            todos: state.todos.filter(todo => {
                                   return todo.id !== removedTodo.id
                            })
                     }
              }
              default: return state
       }
}