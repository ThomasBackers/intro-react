import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Controllers = ({ setToDos, toDos }) => {
    const inputValue = useRef()

    const addElement = () => {
        const userInput = inputValue.current.value
        inputValue.current.value = ""
        setToDos(previousToDos => {
            // returns a list
            return [
                // which contains all previous to-dos (if there are)
                ...previousToDos,
                // and the newly created to-do
                {
                    id: uuidv4(),
                    content: userInput,
                    isComplete: false
                }
            ]
        })
    }

    const hitEnter = event => {
        if (event.key === "Enter") addElement()
    }
    
    const clearList = () => {
        const toDosCopy = [...toDos]
        const filteredCopy = toDosCopy.filter(toDoCopy => !toDoCopy.isComplete)
        setToDos(filteredCopy)
    }

    const deleteList = () => {
        setToDos([])
    }

    return (
        <menu>
            <div className="container">
                <input type="text" ref={inputValue} onKeyDown={hitEnter} />
                <div className="buttons">
                    <button onClick={addElement}>
                        <i className="fas fa-paper-plane"></i>
                    </button>
                    <button onClick={clearList}>
                        <i className="fas fa-broom"></i>
                    </button>
                    <button onClick={deleteList}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </menu>
    )
}

export default Controllers
