import ToDoElement from './ToDoElement/ToDoElement'

const ToDoList = ({ toDos, setToDos }) => {
    return (
        toDos.map(toDo => {
            return <ToDoElement key={toDo.id} toDo={toDo} toDos={toDos} setToDos={setToDos} /> 
        })
    )
}

export default ToDoList
