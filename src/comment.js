import React, { Component } from 'react';

export class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed:this.props.changed
    };
/*     this.handleEdit = this.handleEdit.bind(this); */
    this.update = this.update.bind(this);
    this.reset = this.reset.bind(this);
    this.removeTA = this.removeTA.bind(this);
    this.renderNormal = this.renderNormal.bind(this);
    this.renderEditing = this.renderEditing.bind(this);
    this.taChange=this.taChange.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

/*   handleEdit() {
    var idx=this.props.index;
    var val=document.getElementsByTagName('textarea')[idx].value;
    this.props.taChange(val,idx);
  } */
  handleChange() {
    this.setState({changed: document.getElementsByTagName('textarea')[this.props.index].value});
  }

  update() {
    var idx = this.props.index;
    // console.log(idx);
    var tA = document.getElementsByTagName('textarea')[idx];
    // console.log(tA);
    console.log(tA.value);
     this.props.update(tA.value, idx);
     
  }
  reset() {
    this.props.taReset(this.props.index);

  }
  removeTA() {
    this.props.removeTA(this.props.index);
  }
  taChange(){
    var idx=this.props.index;
    var ta=document.getElementsByTagName('textarea')[idx];
    var val=ta.value;
    this.props.taChange(val,idx);
   }

  renderNormal() {
    return (
      <div className="comment">
        <textarea value={this.props.value}></textarea>{/* must be 'value' instead of 'default value', otherwise the content of textareas will not change as default value */}
        <button className='btn-primary' onClick={this.taChange}>Edit</button>
        <button className='btn-orange' onClick={this.reset}>Reset</button>
        <button className="btn-danger" onClick={this.removeTA}>removeTA</button>
      </div>
    );
  }
  renderEditing() {
    return (
      <div className="comment">
        <textarea value={this.state.changed} onBlur={this.taChange} onChange={this.handleChange} ></textarea>
        <button className='btn-green' onClick={this.update}>Save</button>
        <button className='btn-orange' onClick={this.reset}>Reset</button>
          <button className="btn-danger" onClick={this.removeTA}>removeTA</button>
      </div>
        );
      }
    
    
  render() {
    if (this.props.changed) {
      return this.renderEditing();
    } else {
      return this.renderNormal();
      }
    }
  }
  
