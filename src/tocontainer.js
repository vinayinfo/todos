import React from "react";
import { connect } from 'react-redux';
import 'jquery';


import TodoForm from './todoform';
import {Like} from './like';

class TodoSingleLi extends React.Component {

  render() {
      return (
            <div className="list-group-item">
              <div className="list-group-item-heading">
                <h3>{this.props.task.id}==>{this.props.task.text}</h3>
                  <Like task={this.props.task}/>
              </div>
            </div>
      );
  }
}

class TodoList extends React.Component {

    render() {
        return (
                <div className="col-xs-10 col-xs-offset-1 list-group">
                  {
                    this.props.todos.reverse().map(todo =>
                      <TodoSingleLi key={todo.id} task={todo}/>
                    )
                  }
                </div>
        );
    }
};

export class TodoContainer extends React.Component {
    render() {
        return (
            <div>
              <TodoForm />
              <TodoList />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({todos : state.todos});

TodoList = connect(mapStateToProps)(TodoList)
