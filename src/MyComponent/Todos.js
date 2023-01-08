import React from 'react'
import {TodoItem} from './TodoItem'
const Todos = (props) => {
  return (
    <div className='container'>
      <h4 className='text-center my-4'>

        Todos List
      </h4>
      
       {/* using higher order method of javaScript */}
      {props.todos.length===0?"No todo list to show.":
       props.todos.map((todo)=>{
                      
         return <TodoItem todo={todo} key={todo.src} onDelete={props.onDelete}/>
            
       })
       }
       
       


    </div>
  )
}

export default Todos
