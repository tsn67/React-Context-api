import { useReducer, type ReactNode } from "react";
import ToDoListContext from "../contexts/ToDoListContext";
import type { ToDoListState } from "../reducers/todolistReducer";
import todolistReducer from "../reducers/todolistReducer";


const ToDoListProvider = ({children}: {children: ReactNode}) => {

    const [data, dispatch] = useReducer(todolistReducer, [] as ToDoListState);

    return (
        <ToDoListContext.Provider value={{data: data, dispatch: dispatch}}>
            {children}
        </ToDoListContext.Provider>
        
    )
}

export default ToDoListProvider