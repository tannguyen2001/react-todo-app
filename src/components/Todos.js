import React from "react";
import TodoItem from "./TodoItem";

class Todos extends React.Component{
      render(){
            return(
                  <div>
                        <ul>
                              {this.props.todos.map(todo => {
                                    return <TodoItem key={todo.id} todo={todo} handleChane={this.props.handleChane} deleteTodo={this.props.deleteTodo} />
                              })}
                        </ul>
                  </div>
            )
      }
}

export default Todos