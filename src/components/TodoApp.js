import React from "react";
import Header from './layout/Header'
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import axios from 'axios'
import Footer from "./store/containers/Footer";

class TodoApp extends React.Component{

      constructor(props){
            super(props)
            this.state = {
                  todos :[
                        
                  ]
            }
      }
      handleCheckBoxChane=(id)=>{
            this.setState({
                  todos: this.state.todos.map((todo)=>{
                        if(todo.id===id){
                              todo.completed = !todo.completed
                        }
                        return todo
                  })
            })
      }
      deleteTodo=(id)=>{
            axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(()=>{
                  this.setState({
                        todos: this.state.todos.filter((item=>{
                              return item.id !== id
                        }))
                  })
            })
      }
      addTodo= title =>{
            const newTodo={
                  title:title,
                  completed:false
            }
            axios.post('https://jsonplaceholder.typicode.com/todos',newTodo)
                  .then(response=>{
                        this.setState({
                              todos:[...this.state.todos,response.data]
                        })
                  })
      }
      componentDidMount(){
            //tạo get request để lấy danh sách todo
            const config={
                  params:{
                        _limit:5
                  }
            }
            axios.get('https://jsonplaceholder.typicode.com/todos',config)
                  .then(response => this.setState({todos:response.data}))
      }
      render(){
            return(
                  <div className="container">
                       <Header />
                       <AddTodo addTodo={this.addTodo} />
                       <Todos todos={this.state.todos} handleChane={this.handleCheckBoxChane}
                       deleteTodo={this.deleteTodo}
                        />
                        <Footer/>
                  </div>

            )
      }
}
export default TodoApp
