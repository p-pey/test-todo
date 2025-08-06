import * as Z from 'zod';
export const TActionKeys = {
       CREATE_TODO: "CREATE_TODO",
       "UPDATE_TODO": "UPDATE_TODO",
       "REMOVE_TODO": "REMOVE_TODO"
};
export type TAction = {
       type: keyof typeof TActionKeys;
       payload: unknown
}

export type TEventType = "meeting" | "task";

export const TodoSchema = Z.object({
       title: Z.string("لطفا عنوان را وارد کنید").min(3, "عنوان حداقل باید سه حرف باشد"),
       type: Z.union([Z.literal("task"), Z.literal("meeting")]),
       date: Z.string(),
       id: Z.string()
});
export type TTodo = Z.infer<typeof TodoSchema>;
export type TTodosContext = {
       todos: TTodo[];
};