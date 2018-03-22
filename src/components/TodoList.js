import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, deleteSubTodo, toggleTodo, toggleSubtodo } from '../actions';
import { bindActionCreators } from 'redux';
import Modal from './Modal';
import '../styles/TodoList.css';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = ({
      tdname: '',
      detail: '',
      subtodos: null,
      isOpen: false,
      target: null
    });
  }


  render(){
    if(this.props.todos.length === 0)
      return null;
    return (
      <div className="todo-list-container">
        <ul className="todo-list-ul">
          {this.props.todos.map(todo => {
            return(
              <li className="todo-list-item" key={todo.id}>
                <input className="todo-checkbox"
                  type="checkbox" checked={todo.completed}
                  onChange = {
                    () => this.props.toggleTodo(todo.id)
                  }/>
                <div className="todo-list-item-name">
                  <span
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                    onClick = {
                      () => this.setState({isOpen: true, target: todo})
                    }>
                    {todo.name}
                  </span>
                </div>
                <div className="todo-list-item-deadline">
                  <span
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      color: todo.completed||parseInt(todo.deadline.replace(/-/g,''), 10)>=this.formatDate()
                      ? 'green'
                      : 'red'
                    }}>{todo.deadline}
                  </span>
                </div>
                <span className="todo-list-item-completed"
                  style={{
                    color: todo.completed ? 'green' : 'red',
                    textDecoration: todo.completed ? 'line-through' : 'none'
                  }}>
                  {todo.completed? 'Completed': 'Uncomplete'}
                </span>
                <button type="button" className="todo-list-buttons"
                  onClick = {() => this.props.deleteTodo(todo.id)}>x</button>
                {
                  todo.subtodos.length>0
                  ? this.renderSubtodos(todo.subtodos, todo.id)
                  : null
                }
              </li>
            )
          })}
        </ul>
        <Modal
          show={this.state.isOpen}
          close={this.closeModal}
          todo={this.state.target}
          today={this.formatDate()}
        />
      </div>
    );
  }

  renderSubtodos(subtodos, id){
    return(
      <ul className="subtodo-list-ul">
        {subtodos.map(subtodo =>
          <li className="subtodo-list-item" key={'subtodo-item'+subtodo.id}>
            <input className="subtodo-checkbox"
              type="checkbox" checked={subtodo.completed}
              onChange = {
                () => this.props.toggleSubtodo(id, subtodo.id, subtodo.completed)
              }/>
            <div className="subtodo-name">
              <span
                style={{
                  textDecoration: subtodo.completed ? 'line-through' : 'none'
                }}
                onClick = {() => this.setState({isOpen: true, target: subtodo})}>
                {subtodo.name}
              </span>
            </div>
            <div className = "subtodo-deadline">
              <span
                style={{
                  textDecoration: subtodo.completed ? 'line-through' : 'none',
                  color: subtodo.completed||parseInt(subtodo.deadline.replace(/-/g,''), 10)>=this.formatDate() ? 'green' : 'red'
                }}>
                {subtodo.deadline}
              </span>
            </div>
            <div className = "subtodo-completed">
              <span style={{
                textDecoration: subtodo.completed ? 'line-through' : 'none',
                color: subtodo.completed ? 'green' : 'red'
              }}>
                {subtodo.completed? 'Completed': 'Uncomplete'}
              </span>
            </div>
            <button type="button" className="subtodo-buttons"
              onClick = {() => {
                this.props.deleteSubTodo(id, subtodo.id, subtodo.completed)
              }}>
              x
            </button>
          </li>
        )}
      </ul>
    )
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
      target: null
    })
  };

  formatDate = () => {
    let today = new Date(), year = today.getFullYear(), month = (today.getMonth() + 1) + '', day = today.getDate() + '';
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return parseInt([year, month, day].join(''), 10);
  }
}

const mapStateToProps = ({todos}) => ({todos});
const mapDispatchToProps = (dispatch) => bindActionCreators({deleteTodo, deleteSubTodo, toggleTodo, toggleSubtodo}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
