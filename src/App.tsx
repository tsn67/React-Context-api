import ToDoListProvider from "./providers/ToDoListProvider"
import "./styles/index.css"
import { ToDoList } from "./to-do-list"

const App = () => {

    return (
        <div className="w-screen h-screen flex justify-center">
            <ToDoListProvider>
                <ToDoList />
            </ToDoListProvider>
        </div>
    )
}

export default App