import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addLike, disLike} from './todos_reducer';

export class Like extends React.Component {
  constructor(props){
    super(props);
    this._handleClickAdd = this._handleClickAdd.bind(this);
    this._handleClickSub = this._handleClickSub.bind(this);
  }

  _handleClickAdd = function(e) {
    e.preventDefault();
    this.props.addLike(this.props.task.id);
  }
  _handleClickSub = function(e) {
    e.preventDefault();
    this.props.disLike(this.props.task.id);
  }
  render() {
      return (
            <div>
              Like {this.props.task.like}
              <button className="btn btn-primary" onClick={this._handleClickAdd} {...this.props.task.like}>+</button>
              <button className="btn btn-danger" onClick={this._handleClickSub} {...this.props.task.like}>-</button>
            </div>
      );
  }
}
function mapDispatchToProps(dispatch) {
  return {addLike: bindActionCreators(addLike, dispatch),
          disLike: bindActionCreators(disLike, dispatch)}
}
//set props
const mapStateToProps = (state, ownProps) => ({todos : state.todos});

Like = connect(mapStateToProps, mapDispatchToProps)(Like)
