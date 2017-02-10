import React, { Component, PropTypes } from 'react'

class TodoList extends Component {
    static propTypes = {
        filter: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.string)
    }

    render () {
        const finalList = this.props.filter === '' ?
            this.props.items :
            this.props.items.filter((el) => el.indexOf(this.props.filter) >= 0)

        return (
          <ul>
          {
            finalList.map((item, index) => {
              return (<li key={`item-${index}`}>{item}</li>)
            })
          }
          </ul>
        )
    }
}

export default TodoList