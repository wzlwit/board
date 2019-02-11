import React, { Component } from 'react';
import { Comment } from './comment';

export class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { comments: ['hello', 'world', 'i am here'], changed: [null, null, null] };
        this.update = this.update.bind(this);
        this.removeTA = this.removeTA.bind(this);
        this.add = this.add.bind(this);
        this.taChange = this.taChange.bind(this);
        this.taReset = this.taReset.bind(this);
    }
    update(newText, i) {
        var ary = this.state.comments;
        var ary2 = this.state.changed;
        ary[i] = newText;
        ary2[i] = null;
        this.setState({ comments: ary, changed: ary2 });
    }
    removeTA(index) {
        let ary = this.state.comments, ary2 = this.state.changed;
        ary.splice(index, 1);
        ary2.splice(index, 1);
        this.setState({ comments: ary, changed: ary2 });
        //after removeTA, must re-render by using setState()
    }
    add() {
        let ary = this.state.comments, ary2 = this.state.changed;
        ary.push('please edit and enter your comment');
        ary2.push(null);
        this.setState({ comments: ary, changed: ary2 });
    }


    taChange(text, index) {
        var ary = this.state.changed;
        ary[index] = text;
        this.setState({ changed: ary });
    }//this function makes sure  when an TextArea is changed without saved, removing another textarea will work correctlly. the changed value will be kept in array of this.state.changed in <Board/>
    taReset(index) {
        var ary=this.state.changed;
        ary[index] = null;
        this.setState({ changed: ary});
    }
    render() {
        return (
            <div >
                <h2>Comments Board:</h2>
                <button className='btn-purple' onClick={this.add}>Add Comment</button>
                <br />
                <br />
                {this.state.comments.map((text, i) => (<Comment index={i} key={i} update={this.update} removeTA={this.removeTA} value={text} changed={this.state.changed[i]} taChange={this.taChange} taReset={this.taReset} />))}
                {/* <Comment value={this.state.comments[0]} /> */}
            </div>
        );
    }
}


