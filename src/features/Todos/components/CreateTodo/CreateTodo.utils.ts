import { TodoTypes } from "./schema";



export class CreateTodoUtils {
       static getTodoTypeDropdownOptions() {
              return TodoTypes.map(item => ({ label: item === "meeting" ? "جلسه" : "تسک", value: item }))
       }
}