import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {addItem} from './todos_reducer';

class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
      this.refs.inputValue.value ? this.props.addItem(this.refs.inputValue.value): '';
    }

    render() {
        return (
              <form className="form-inline">
                <div className="form-group">
                  <input type="text" className="form-control col-md-12" id="exampleInputName2" ref="inputValue" placeholder="Todo placeholder"/>
                </div>
                <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Create</button>
              </form>
        )
    }
};

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators({addItem: addItem}, dispatch);
}
//set props
const mapStateToProps = (state) => ({todos : state.todos});


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
