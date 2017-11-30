/**
 * Created by cusickj on 11/30/17.
 */
import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.todos = []
        this.state = {
            inputValue: '',
            todos: [],
        }
        this.handleClick=this.handleClick.bind(this);
    }



    showTodos = () => {
        console.log("show todos here");

        for (var i = 0 ; i < this.todos.length; i++) {
            console.log(this.todos[i]);
        }
    }


    handleClick() {
        console.log("clicked" + Date());
        this.todos.push(this.state.inputValue);
        this.setState({inputValue: '', todos: this.todos});
        console.log("todos lenght:" + this.todos.length);
        this.showTodos();
    }

    updateInputValue = (evt) => {
        this.setState({inputValue: evt.target.value})
    }

    handleRemove(i) {
        console.log("handleRemove called fo index:" + i );
        console.log("todos lenght:" + this.todos.length)

        if (i > -1)  {
            this.todos.splice(i, 1);
            this.setState({todos: this.todos})

        }
        console.log("callng show todos from handle remove");
        this.showTodos();
    }

    createListItems(todo, index) {
        return <li key={index} onClick={() => this.handleRemove(index)}>{todo}</li>
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-8 col-md-offset-2">
                <input type="text" value={this.state.inputValue} onChange={event => this.updateInputValue(event)}></input>
                <button onClick={this.handleClick}>Submit</button>
                <ul>
                    {this.state.todos.map((todo, index) => this.createListItems(todo, index))}
                </ul>
                </div>
            </div>
        )
    }
}

export default TodoList
