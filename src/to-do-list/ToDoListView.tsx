import { useToDoList } from "../contexts/ToDoListContext"

const ToDoListView = () => {

    const {data, dispatch} = useToDoList()

    return (
        <div className="flex flex-col gap-1 w-full"
        >
            {data.map((item) => {
                return <div key={item.id} className="bg-gray-600 text-white px-2 py-2 rounded-sm flex justify-between">
                    <div className="flex gap-2">
                        <p>{item.content}</p>
                        <p className="text-yellow-100">{item.date.toDateString()}</p>
                    </div>
                    <button onClick={() => dispatch({type: 'delete', todo: item})} className="bg-red-400 rounded-[2px] px-2 py-1">delete</button>
                </div>
            })}

        </div>
    )
}

export default ToDoListView