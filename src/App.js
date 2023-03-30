import './App.css'
import { useState } from 'react'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const day = new Date().toLocaleDateString(undefined,{weekday:'long'})
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event) => setToDo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
          setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
          setToDo('');
          }
        } className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((value) => {
            return (
              <div key={value.id} className="todo">
                <div className="left">
                  <input onChange={(event) => {
                    console.log(event.target.checked)
                    console.log(value)
                    setToDos(toDos.filter(obj => {
                      if (obj.id === value.id) {
                        obj.status = event.target.checked
                      }
                      return obj
                    }))
                  }} value={value.status} type="checkbox" name="" id="" />
                  <p>{value.text}</p>
                </div>
                <div className="right">
                  <i onClick={() => {setToDos(toDos.filter((todo) => todo.id !== value.id))}} className="fas fa-times"></i>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

