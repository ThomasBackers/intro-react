const ToDoElement = ({ toDo, toDos, setToDos }) => {
    const checkTheBox = event => {
        const toDosCopy = [...toDos]
        const toDoCopy = toDosCopy.find(toDoCopy => toDoCopy.id === toDo.id)
        toDoCopy.isComplete = !toDoCopy.isComplete
        // design stuff
        toDoCopy.isComplete ? 
            event.target.style.backgroundColor = "#48CAE4" 
            : event.target.style.backgroundColor = "#fff"
        setToDos(toDosCopy)
    }

    return (
        <li>
            <input type="checkbox" checked={toDo.isComplete} onChange={checkTheBox} />
            <label>
                <span>
                    {toDo.content}
                </span>
            </label>
        </li>
    )
}

export default ToDoElement
