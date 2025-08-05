
interface ToDo {
    id: number
    content: string
    date: Date
}

export type ToDoListState = ToDo[]

export interface ToDoListAction {
    type: 'add' | 'delete'
    todo: ToDo
}

function todolistReducer(state: ToDoListState, action: ToDoListAction) {
    if (action.type == 'add')
        return [...state, action.todo] 
    else if (action.type == 'delete')
        return state.filter((todo) => todo.id != action.todo.id)
    return state
}

export default todolistReducer;