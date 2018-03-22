import React, { Component } from 'react';
import '../styles/Modal.css';

class Modal extends Component {
  render() {
    if(!this.props.show)
      return null;
    const {todo, today} = this.props;
    return (
      <div className="modal-container">
        <div className="modal-bg" onClick = {this.props.close}/>
        <div className="detail-modals">
          <div className="modal-todo-infos">
            <span className="modal-todo-names">{todo.name}</span>
            <span className="modal-todo-deadlines"
              style={{
                color: todo.completed||parseInt(todo.deadline.replace(/-/g,''), 10)>=today
                ? 'green'
                : 'red'
              }}>
              {todo.deadline}
            </span>
            <span className="modal-todo-completed"
              style={{color: todo.completed ? 'green' : 'red'}}>
              {todo.completed? 'Completed': 'Uncomplete'}
            </span>
          </div>
          <div className="modal-todo-detail-title">Details:</div>
          {
            todo.detail
            ? <div className="modal-todo-detail">{todo.detail}</div>
            : <div className="modal-no-detail">No Details</div>
          }
          {
            todo.subtodos&&todo.subtodos.length>0
            ? this.renderSubtodos(todo.subtodos, todo.id, today)
            : null
          }
          <button type="button"
            className="modal-buttons"
            onClick = {this.props.close}>
            Close
          </button>
        </div>
      </div>
    );
  }

  renderSubtodos(subtodos, id, today){
    return(
      <ul className="modal-subtodos-ul">
        {subtodos.map(subtodo =>
          <li className="modal-subtodos-li" key={'subtodo-item'+subtodo.id}>
            <div className="modal-subtodo-infos">
              <span className="modal-subtodo-names">{subtodo.name}</span>
              <span className="modal-subtodo-deadlines"
                style={{
                  color: subtodo.completed||parseInt(subtodo.deadline.replace(/-/g,''), 10)>=today
                  ? 'green'
                  : 'red'
                }}>
                {subtodo.deadline}
              </span>
              <span className="modal-subtodo-completed"
                style={{color: subtodo.completed ? 'green' : 'red'}}>
                {subtodo.completed? 'Completed': 'Uncomplete'}
              </span>
            </div>
            <div className="modal-subtodo-detail-title">Details:</div>
            {
              subtodo.detail
              ? <div className="modal-subtodo-detail">{subtodo.detail}</div>
              : <div className="modal-sub-no-detail">No Details</div>
            }
          </li>
        )}
      </ul>
    )
  }

  formatDate = () => {
    let today = new Date();
    return new Date(today.getTime()-(today.getTimezoneOffset() * 60000))
      .toISOString()
      .slice(0, 10);
  }
}

export default Modal;
