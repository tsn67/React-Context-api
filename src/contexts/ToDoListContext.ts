import type { Dispatch } from "react";
import type { ToDoListAction, ToDoListState } from "../reducers/todolistReducer";
import React, { useContext } from "react";

interface TodolistContextType {
    data: ToDoListState
    dispatch: Dispatch<ToDoListAction>
}

const ToDoListContext = React.createContext<TodolistContextType>({} as TodolistContextType);

export default ToDoListContext;

export function useToDoList () {
    return useContext(ToDoListContext)
}

