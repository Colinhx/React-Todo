import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {bindActionCreators} from 'redux';
import '../styles/Form.css';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = ({
      tdName: '',
      detail: '',
      deadline: this.formatDate(),
      subTodos: [],
      subtodoId: 0
    })
  }
  render() {
    return (
      <div className="add-todo-form-container">
        <form className="add-todo-form" onSubmit={this.handleSubmit}>
          <input className="todo-name-input"
            type="text" value={this.state.tdName}
            onChange={this.tdNameChange}/>
          <input className="todo-date-input"
            type="date" value={this.state.deadline}
            onChange={this.deadlineChange}
            max="2099-12-31"/>
          <textarea className="todo-detail-input"
            value={this.state.detail}
            onChange={this.detailChange}
            placeholder="Please enter todo detail"/>
          {this.state.subTodos.length>0 ? this.rendersubTodos() : null}
          <button className="form-buttons"
            type="button"
            onClick = {this.addSubTodo}>Add Sub-Todo</button>
          <button className="form-buttons"
            type="submit">Add Todo</button>
        </form>
      </div>
    );
  }

  tdNameChange = (e) => {
    this.setState({ tdName: e.target.value});
  }

  deadlineChange = (e) => {
    this.setState({ deadline: e.target.value});
  }

  detailChange = (e) => {
    this.setState({detail: e.target.value});
  }

  addSubTodo = () => {
    this.setState({
      subTodos: [...this.state.subTodos, {
        id: this.state.subtodoId,
        name: '',
        detail: '',
        deadline: this.formatDate(),
        completed: false
      }],
      subtodoId: 1+this.state.subtodoId
    })
  }

  rendersubTodos(){
    return(
      <ul className="subtodo-list-container">
        {this.state.subTodos.map((subtodo, i) =>
          <li className="subtodo-list" key={'subtodo'+i}>
            <input className="subtodo-name-input" type="text"
              value={subtodo.name}
              onChange={(e) => {
                let newsubTodos = [...this.state.subTodos];
                newsubTodos[i].name =  e.target.value;
                this.setState({subTodos: newsubTodos});
              }}/>
            <input className="subtodo-date-input" type="date"
              value={subtodo.deadline}
              max={this.state.deadline}
              onChange={(e) => {
                  let newsubTodos = [...this.state.subTodos];
                  newsubTodos[i].deadline =  e.target.value;
                  this.setState({subTodos: newsubTodos});
                }}/>
            <textarea className="subtodo-detail-input"
              value={subtodo.detail}
              placeholder="Please enter sub-todo detail"
              onChange={(e) => {
                  let newsubTodos = [...this.state.subTodos];
                  newsubTodos[i].detail =  e.target.value;
                  this.setState({subTodos: newsubTodos});
              }}/>
            <button className="form-buttons" type="button"
              onClick = {() => {
                  let newsubTodos = [...this.state.subTodos];
                  newsubTodos.splice(i, 1);
                  this.setState({subTodos: newsubTodos});
              }}>Remove</button>
          </li>
        )}
      </ul>
    );
  }

  handleSubmit = (e) => {
    let {tdName, detail, deadline, subTodos} = this.state;
    e.preventDefault()
    if (!tdName.trim()) {
      return
    }
    if(subTodos.length>0&&subTodos.some(subtodo => !subtodo.name||!subtodo.deadline))
      return;
    this.props.addTodo(tdName, detail, deadline, subTodos);
    this.setState({
      tdName: '',
      detail: '',
      deadline: this.formatDate(),
      subTodos: []
    });
  }

  //convert current date to formate yyyy-mm-dd
  formatDate = () => {
    let today = new Date();
    return new Date(today.getTime()-(today.getTimezoneOffset() * 60000))
      .toISOString()
      .slice(0, 10);
  }
}

const mapStateToProps = ({todos}) => ({todos});
const mapDispatchToProps = (dispatch) => bindActionCreators({addTodo}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
