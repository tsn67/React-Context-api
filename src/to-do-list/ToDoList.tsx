import ToDoListAdd from "./ToDoListAdd"
import ToDoListView from "./ToDoListView"

const ToDoList = () => {

    return (
        <div className="flex flex-col gap-1 md:w-[60vw] w-screen m-2">
            <ToDoListView />
            <ToDoListAdd />
        </div>
    )
}

export default ToDoList