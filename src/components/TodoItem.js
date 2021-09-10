import React from 'react'

class TodoItem extends React.Component{
      render(){
            const {id,title,completed} = this.props.todo
            return(
                  <li className="todo-item" >
                        <input type="checkbox" checked={completed}
                        onChange={()=>this.props.handleChane(this.props.handleChane(id))}
                        />
                        <span className={ completed ?"completed":null} >{title}</span>
                        <button onClick={()=>this.props.deleteTodo(id)} className="btn-style">X</button>
                  </li>
                  
            )
      }

}

export default TodoItem