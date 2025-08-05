import { useRef, useState } from "react"
import { useToDoList } from "../contexts/ToDoListContext";

const ToDoListAdd = () => {

    const {dispatch} = useToDoList()

    const [addingTask, setAddTask] = useState(false);
    const textInput = useRef<HTMLInputElement>(null)
    const idProvider = useRef<number>(0);

    function addNewTask() {
        if (textInput.current?.value.length == 0) {
          setAddTask(false);
          return;
        }

        dispatch({type: 'add', todo: {id: idProvider.current, content: textInput.current?.value as string, date: new Date()}})    
        idProvider.current = idProvider.current + 1
        setAddTask(false);
    }

    return (
        <div>
            {addingTask && <div
              className="absolute top-0 left-0 w-screen h-screen grid place-content-center bg-blue-800/60 backdrop-blur-[5px] z-40"
            >
                <div className="flex justify-center gap-1 w-screen md:w-[500px] md:p-0 p-2">
                  <input className="bg-white w-full p-2 rounded-md" ref={textInput} type="text" />
                  <button onClick={addNewTask} className="bg-emerald-800 hover:bg-emerald-500 text-white font-semibold px-2 py-1 rounded-sm w-[150px]">add task</button>
                </div>
            </div>}
            <button onClick={() => setAddTask(!addingTask)} className="bg-emerald-500 text-white font-semibold px-2 py-1 rounded-sm">add new task</button>
        </div>
    )
}

export default ToDoListAdd