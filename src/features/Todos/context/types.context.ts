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

export type TTodo = {
       id: string;
       title: string;
       event: TEventType;
       date: string;
};

export type TTodosContext = {
       todos: TTodo[];
};