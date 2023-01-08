import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    
    <>
   <table class="table">
   
     
  <tbody>
    {/* <script>
     let v={todo.title}
console.log(v);
    </script> */}
    {/* if (v=="")  */}
    <tr>
      
      <th scope="row">{todo.src}</th>
      <td>{todo.title}</td>
      <td>{todo.desc}</td>
      {/* we are passing onDelete function into the  arrow function bcz withour arrow func it call during rendering and not onCLick */}
      <td> <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
      </td>
      
      
    </tr>
  </tbody>

</table>
    </>
  )
}

export default TodoItem
