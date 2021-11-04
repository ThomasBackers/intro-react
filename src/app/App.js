import { useState, useEffect } from 'react'
import Controllers from './Controllers/Controllers'
import ToDoList from './ToDoList/ToDoList'

// Let's set a key for the local storage
const LOCAL_STORAGE_KEY = "toDoList"

const App = () => {
    const [toDos, setToDos] = useState([])

    // useEffect's first parameter is called each time a change occurs in the second parameter
    // here it is an empty string so it will never ever change and the function will only be 
    // called once
    useEffect(() => {
        // Let's retrieve our data from local storage
        // BEWARE: it is mandatory to parse it as it is stored as a string
        const toDos = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_KEY)
        )
        // we have to check if toDos is not null before to try to set it
        if (toDos) setToDos(toDos)
    }, [])

    useEffect(() => {
      // So each time a change occurs in toDos
      // this will save the mods on the local storage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos))
    }, [toDos])

    return (
        <div className="App">
            <main>
                <ul className="container">
                  <ToDoList toDos={toDos} setToDos={setToDos} />
                </ul>
            </main>
            
            <Controllers setToDos={setToDos} toDos={toDos} />  
        </div>
    )
}

export default App
