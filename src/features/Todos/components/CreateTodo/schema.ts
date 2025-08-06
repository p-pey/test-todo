import * as Z from 'zod';
import { TodoSchema, type TTodo } from '../../context/types.context';


export const FormTodoSchema = TodoSchema.extend({
       title: Z.string("لطفا عنوان را وارد کنید").min(3, "عنوان حداقل باید سه حرف باشد"),
       type: Z.union([Z.literal("task"), Z.literal("meeting")]),
       date: Z.string("لطفا تاریخ رویداد را انتخاب کنید "),
       id: Z.string()
});


export const TodoTypes: TTodo['type'][] = ['meeting', 'task'];