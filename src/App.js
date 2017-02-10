import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PageTitle from './PageTitle'
import TodoList from './TodoList'
import Inputs from './Inputs'

class App extends Component {
  state = {
    input: "Belum Input",
    filterInput: "",
    list: []
  }

  componentDidMount () {
    fetch('http://localhost:3000/data.json')
      .then(response => response.json())
      .then(json => {
        this.setState({
          list: json
        })
      })
  }

  constructor (props) {
    super(props)

    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.sortList = this.sortList.bind(this)
    this.updateTodoList = this.updateTodoList.bind(this)
  }

  handleInputChange (event) {
    const newValue = event.target.value

    this.setState({
      input: newValue
    })
  }

  handleFilterChange (event) {
    const newFilter = event.target.value

    this.setState({
      filterInput: newFilter
    })
  }

  sortList () {
    const sortedList = Object.assign({}, this.state, {
      list: this.state.list.sort()
    })
    this.setState(sortedList)
  }

  updateTodoList (event) {
    if (event.key === 'Enter') {
      this.setState({
        input: '',
        list: this.state.list.concat([event.target.value])
      })
    }
  }

  render() {
    const title = this.state.input || 'Title'
    return (
      <div className="App">
          <PageTitle title={title} count={1} />

          <Inputs
            addValue={this.state.input}
            onAddValueChange={this.handleInputChange}
            onAddValueKeyPress={this.updateTodoList}
            onSort={this.sortList}
            filterValue={this.state.filterInput}
            onFilterChange={this.handleFilterChange} />

          <TodoList filter={this.state.filterInput} items={this.state.list} />
      </div>
    );
  }
}

export default App;
